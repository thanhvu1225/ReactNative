import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  SectionList,
  StyleSheet,
  SectionListData,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CourseCard } from './CourseCard';
import { PrimaryButton, SecondaryButton, IconButton } from './ui/AppButtons';

interface FeedbackForm {
  name: string;
  email: string;
  comments: string;
}

interface Announcement {
  id: string;
  title: string;
  date: string;
}

interface AnnouncementSection {
  title: string;
  data: Announcement[];
}

interface CourseData {
  id: string;
  title: string;
  imageUri?: string;
  isDecorative?: boolean;
}

const ANNOUNCEMENT_SECTIONS: AnnouncementSection[] = [
  {
    title: 'Hôm nay',
    data: [
      { id: '1', title: 'Thông báo nghỉ lễ 2/9', date: '16/08/2026' },
    ],
  },
  {
    title: 'Tuần này',
    data: [
      { id: '2', title: 'Đăng ký học phần HK1', date: '15/08/2026' },
      { id: '3', title: 'Hội thảo hướng nghiệp', date: '14/08/2026' },
    ],
  },
  {
    title: 'Trước đó',
    data: [
      { id: '4', title: 'Kết quả thi học kỳ phụ', date: '10/08/2026' },
      { id: '5', title: 'Thông báo nộp học phí', date: '05/08/2026' },
    ],
  },
];

const COURSES: CourseData[] = [
  { id: '1', title: 'React Native', imageUri: 'https://picsum.photos/seed/react/200/120' },
  { id: '2', title: 'Cấu trúc dữ liệu', imageUri: 'https://invalid-link-image.com/error.jpg' },
  { id: '3', title: 'Thiết kế UI/UX', isDecorative: true },
  { id: '4', title: 'Lập trình Java', imageUri: 'https://picsum.photos/seed/java/200/120' },
];

export const CampusDashboard: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [feedback, setFeedback] = useState<FeedbackForm>({ name: '', email: '', comments: '' });

  const renderAnnouncement = ({ item }: { item: Announcement }) => (
    <View style={styles.announcementItem}>
      <Ionicons name="notifications-outline" size={20} color="#007AFF" />
      <View style={styles.announcementContent}>
        <Text style={styles.announcementTitle}>{item.title}</Text>
        <Text style={styles.announcementDate}>{item.date}</Text>
      </View>
    </View>
  );

  const renderSectionHeader = ({ section: { title } }: { section: SectionListData<Announcement, AnnouncementSection> }) => (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionHeaderText}>{title}</Text>
    </View>
  );

  const ListHeader = () => (
    <View style={styles.headerPadding}>
      <Text style={styles.dashboardTitle}>Trang chủ Campus</Text>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#8E8E93" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <Text style={styles.mainSectionTitle}>Thông báo quan trọng</Text>
    </View>
  );

  const ListFooter = () => (
    <View style={styles.footerPadding}>
      <Text style={styles.mainSectionTitle}>Khóa học của bạn</Text>
      <View style={styles.coursesGrid}>
        {COURSES.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            imageUri={course.imageUri}
            isDecorative={course.isDecorative}
          />
        ))}
      </View>

      <Text style={styles.mainSectionTitle}>Hệ thống Nút bấm</Text>
      <View style={styles.buttonDemoContainer}>
        <View style={styles.buttonRow}>
          <PrimaryButton title="Primary" />
          <PrimaryButton title="Loading" loading />
        </View>
        <View style={styles.buttonRow}>
          <SecondaryButton title="Secondary" />
          <SecondaryButton title="Disabled" disabled />
        </View>
        <View style={styles.buttonRow}>
          <IconButton icon="heart" />
          <IconButton icon="share-social" loading />
          <IconButton icon="trash" disabled />
        </View>
      </View>

      {/* Exercise 8 - Feedback Form (Deliberate Failure State) */}
      <Text style={styles.mainSectionTitle}>Gửi ý kiến phản hồi </Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Họ và tên</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập họ tên"
          value={feedback.name}
          onChangeText={(text) => setFeedback({ ...feedback, name: text })}
        />

        <Text style={styles.label}>Email liên hệ</Text>
        <TextInput
          style={styles.input}
          placeholder="example@campus.edu.vn"
          keyboardType="email-address"
          value={feedback.email}
          onChangeText={(text) => setFeedback({ ...feedback, email: text })}
        />

        <Text style={styles.label}>Nội dung phản hồi</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Chúng tôi có thể cải thiện điều gì?"
          multiline
          numberOfLines={4}
          value={feedback.comments}
          onChangeText={(text) => setFeedback({ ...feedback, comments: text })}
        />

        <PrimaryButton
          title="Gửi phản hồi"
          onPress={() => console.log('Submit feedback', feedback)}
        />
      </View>
    </View>
  );


  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    <SectionList
      sections={ANNOUNCEMENT_SECTIONS}
      renderItem={renderAnnouncement}
      renderSectionHeader={renderSectionHeader}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={ListHeader}
      ListFooterComponent={ListFooter}
      ItemSeparatorComponent={ItemSeparator}
      stickySectionHeadersEnabled={false}
      keyboardShouldPersistTaps="handled" // Thêm để ẩn bàn phím khi chạm ra ngoài
      contentContainerStyle={styles.contentContainer}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  contentContainer: {
    padding: 16,
  },
  headerPadding: {
    paddingBottom: 8,
  },
  footerPadding: {
    paddingTop: 16,
  },
  dashboardTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 12,
    minHeight: 44,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  mainSectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 12,
    marginTop: 8,
  },
  sectionHeaderContainer: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8E8E93',
    textTransform: 'uppercase',
  },
  announcementItem: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
  },
  announcementContent: {
    marginLeft: 12,
    flex: 1,
  },
  announcementTitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1C1C1E',
  },
  announcementDate: {
    fontSize: 13,
    color: '#8E8E93',
    marginTop: 4,
  },
  separator: {
    height: 1,
    backgroundColor: '#F2F2F7',
  },
  coursesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 24,
    marginHorizontal: -6, // Bù đắp cho margin: 6 của CourseCard
  },
  buttonDemoContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    gap: 16,
    marginBottom: 24,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 100, // Để form nằm thấp hẳn xuống dưới
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 16,
    color: '#000000',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
});