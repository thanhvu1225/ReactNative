import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';

interface CourseCardProps {
  title: string;
  imageUri?: string;
  isDecorative?: boolean;
}

export const CourseCard: React.FC<CourseCardProps> = ({ title, imageUri, isDecorative = false }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        {/* LOGIC LOADING ẢNH Ở ĐÂY */}
        <Image
          source={imageUri ? { uri: imageUri } : require('@/assets/images/react-logo.png')}
          style={styles.image}
          contentFit="cover"
          transition={500} // Hiệu ứng chuyển cảnh (fade-in) khi tải xong

          // 1. Loading State: Hiển thị blurhash mẫu khi đang tải dữ liệu
          placeholder="L6PZfS9F01_j.WyD%Miv4n%M9Fjt"

          // 2. Failed State: Hiển thị ảnh logo dự phòng nếu link URL bị hỏng
          errorSource={require('@/assets/images/partial-react-logo.png')}

          // 3. Resilience: Layout không bị sụp nhờ backgroundColor của imageContainer

          // 4. Accessibility: Informative vs Decorative
          accessible={!isDecorative}
          accessibilityLabel={isDecorative ? undefined : `Ảnh minh họa khóa học ${title}`}
        />
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{title}</Text>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.actionButton}>
            <Text style={styles.buttonText}>Đăng ký</Text>
          </Pressable>
          <Pressable style={styles.detailButton}>
            <Text style={styles.detailText}>Chi tiết</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    flexBasis: 160,     // Kích thước cơ bản lý tưởng
    flexGrow: 1,      // Cho phép giãn ra để lấp đầy hàng
    flexShrink: 1,    // Cho phép thu nhỏ nếu không đủ chỗ
    minWidth: 140,    // Đảm bảo không quá nhỏ gây vỡ nội dung
    maxWidth: '100%', // Đảm bảo không tràn màn hình điện thoại
    margin: 6,        // Khoảng cách xung quanh card

    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  imageContainer: {
    width: '100%',
    height: 100,
    backgroundColor: '#E5E5EA', // Resilience: Màu nền giữ khung nếu ảnh lỗi hoàn toàn
  },
  image: {
    width: '100%',
    height: '100%',
  },
  info: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1C1C1E',
  },
  buttonContainer: {
    marginTop: 12,
    gap: 8,
  },
  actionButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  detailButton: {
    paddingVertical: 4,
    alignItems: 'center',
  },
  detailText: {
    color: '#007AFF',
    fontSize: 13,
  },
});