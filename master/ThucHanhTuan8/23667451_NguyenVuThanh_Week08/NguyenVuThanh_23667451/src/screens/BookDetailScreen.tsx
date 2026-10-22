import { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { BookCover, colors, PrimaryButton, RatingStars } from '../components';
import { books, formatPrice } from '../data';
import { reviewService } from '../services';
import { Review, User } from '../types';

type Props = {
  bookId: string;
  user: User | null;
  onLogin: () => void;
};

export default function BookDetailScreen({ bookId, user, onLogin }: Props) {
  const book = books.find((item) => item.id === bookId);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [loadingReviews, setLoadingReviews] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!book) return;
    reviewService
      .getByBookId(book.id)
      .then(setReviews)
      .finally(() => setLoadingReviews(false));
  }, [book]);

  const average = useMemo(() => {
    if (!reviews.length) return 0;
    return reviews.reduce((sum, item) => sum + item.rating, 0) / reviews.length;
  }, [reviews]);

  if (!book) {
    return <View style={styles.center}><Text>Không tìm thấy sách.</Text></View>;
  }

  const submitReview = async () => {
    if (!user) {
      onLogin();
      return;
    }
    if (!comment.trim()) {
      setError('Vui lòng nhập nội dung đánh giá');
      return;
    }

    setSubmitting(true);
    setError('');
    try {
      const newReview = await reviewService.postReview({
        bookId: book.id,
        userId: user.id,
        userName: user.name,
        rating,
        comment: comment.trim(),
      });
      setReviews((current) => [newReview, ...current]);
      setRating(5);
      setComment('');
    } catch {
      setError('Không thể gửi đánh giá, vui lòng thử lại');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.screen} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.content}>
        <BookCover color={book.color} title={book.title} style={styles.cover} />
        <Text style={styles.bookTitle}>{book.title}</Text>
        <Text style={styles.author}>Tác giả: {book.author}</Text>
        <Text style={styles.price}>{formatPrice(book.price)}</Text>
        <Text style={styles.heading}>Mô tả sách</Text>
        <Text style={styles.description}>{book.description}</Text>

        <View style={styles.divider} />

        <Text style={styles.heading}>Đánh giá trung bình</Text>
        <View style={styles.averageRow}>
          <Text style={styles.average}>{average.toFixed(1)}</Text>
          <View>
            <RatingStars value={average} size={22} />
            <Text style={styles.reviewCount}>{reviews.length} lượt đánh giá</Text>
          </View>
        </View>

        <Text style={styles.heading}>Viết đánh giá</Text>
        {user ? (
          <>
            <RatingStars value={rating} size={30} onChange={setRating} />
            <TextInput
              multiline
              textAlignVertical="top"
              value={comment}
              onChangeText={(value) => {
                setComment(value);
                if (value.trim()) setError('');
              }}
              placeholder="Nhập cảm nhận của bạn..."
              placeholderTextColor="#999999"
              style={[styles.input, error && styles.inputError]}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
            <PrimaryButton title="Gửi đánh giá" onPress={submitReview} loading={submitting} />
          </>
        ) : (
          <View style={styles.loginRow}>
            <Text style={styles.loginText}>Bạn cần đăng nhập để gửi đánh giá.</Text>
            <Pressable onPress={onLogin}><Text style={styles.loginButton}>Đăng nhập</Text></Pressable>
          </View>
        )}

        <Text style={styles.heading}>Nhận xét ({reviews.length})</Text>
        {loadingReviews ? (
          <ActivityIndicator color={colors.primary} style={styles.loader} />
        ) : reviews.length === 0 ? (
          <Text style={styles.empty}>Chưa có đánh giá nào.</Text>
        ) : (
          reviews.map((review) => (
            <View key={review.id} style={styles.reviewItem}>
              <View style={styles.reviewHeader}>
                <Text style={styles.reviewerName}>{review.userName}</Text>
                <Text style={styles.date}>{new Date(review.createdAt).toLocaleDateString('vi-VN')}</Text>
              </View>
              <RatingStars value={review.rating} size={16} />
              <Text style={styles.comment}>{review.comment}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    width: '100%',
    maxWidth: 600,
    alignSelf: 'center',
    padding: 20,
    paddingBottom: 36,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cover: {
    width: 160,
    height: 220,
    alignSelf: 'center',
  },
  bookTitle: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '700',
    marginTop: 18,
  },
  author: {
    color: colors.muted,
    fontSize: 14,
    marginTop: 7,
  },
  price: {
    color: colors.danger,
    fontSize: 18,
    fontWeight: '700',
    marginTop: 9,
  },
  heading: {
    color: colors.text,
    fontSize: 18,
    fontWeight: '700',
    marginTop: 24,
    marginBottom: 9,
  },
  description: {
    color: colors.text,
    fontSize: 14,
    lineHeight: 22,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginTop: 24,
  },
  averageRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  average: {
    color: colors.text,
    fontSize: 38,
    fontWeight: '700',
    marginRight: 14,
  },
  reviewCount: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 3,
  },
  input: {
    minHeight: 90,
    padding: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    color: colors.text,
    fontSize: 14,
    backgroundColor: colors.surface,
    marginTop: 12,
    marginBottom: 12,
  },
  inputError: {
    borderColor: colors.danger,
    marginBottom: 0,
  },
  errorText: {
    color: colors.danger,
    fontSize: 12,
    marginTop: 5,
    marginBottom: 12,
  },
  loginRow: {
    padding: 14,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    backgroundColor: colors.surface,
  },
  loginText: {
    color: colors.muted,
    fontSize: 14,
  },
  loginButton: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '700',
    marginTop: 8,
  },
  loader: {
    marginVertical: 18,
  },
  empty: {
    color: colors.muted,
    fontSize: 14,
  },
  reviewItem: {
    paddingVertical: 14,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  reviewerName: {
    flex: 1,
    color: colors.text,
    fontSize: 14,
    fontWeight: '700',
  },
  date: {
    color: colors.muted,
    fontSize: 11,
    marginLeft: 8,
  },
  comment: {
    color: colors.text,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 7,
  },
});
