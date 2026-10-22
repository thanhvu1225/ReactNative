import { StyleSheet, Text, View } from 'react-native';

import { BookCover, colors } from '../components';
import { books, formatPrice } from '../data';
import { User } from '../types';

const selectedBook = books[0];

export default function CheckoutScreen({ user }: { user: User }) {
  return (
    <View style={styles.screen}>
      <View style={styles.card}>
        <Text style={styles.title}>Thông tin thanh toán</Text>
        <Text style={styles.label}>Tài khoản</Text>
        <Text style={styles.value}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>

        <View style={styles.divider} />

        <View style={styles.bookRow}>
          <BookCover color={selectedBook.color} title={selectedBook.title} style={styles.cover} />
          <View style={styles.bookInfo}>
            <Text style={styles.bookTitle}>{selectedBook.title}</Text>
            <Text style={styles.author}>{selectedBook.author}</Text>
            <Text style={styles.total}>{formatPrice(selectedBook.price)}</Text>
          </View>
        </View>

        <Text style={styles.note}>Màn hình này chỉ mở khi người dùng đã đăng nhập.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: colors.background,
  },
  card: {
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    padding: 18,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    backgroundColor: colors.surface,
  },
  title: {
    color: colors.text,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 18,
  },
  label: {
    color: colors.muted,
    fontSize: 13,
  },
  value: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
    marginTop: 5,
  },
  email: {
    color: colors.muted,
    fontSize: 14,
    marginTop: 3,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 18,
  },
  bookRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cover: {
    width: 72,
    height: 96,
  },
  bookInfo: {
    flex: 1,
    marginLeft: 14,
  },
  bookTitle: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '700',
  },
  author: {
    color: colors.muted,
    fontSize: 13,
    marginTop: 5,
  },
  total: {
    color: colors.danger,
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10,
  },
  note: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 18,
  },
});
