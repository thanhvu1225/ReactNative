import { useState } from 'react';

import {
  Alert,
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { Course, courses } from './src/data/courses';

interface CourseRowProps {
  course: Course;
  onPress: (course: Course) => void;
}

function CourseRow({ course, onPress }: CourseRowProps) {
  return (
    <Pressable
      onPress={() => onPress(course)}
      style={({ pressed }) => [
        styles.courseCard,
        pressed && styles.courseCardPressed,
      ]}
    >
      <Text style={styles.courseTitle}>
        {course.title}
      </Text>

      <Text style={styles.instructor}>
        Giảng viên: {course.instructor}
      </Text>

      <View style={styles.courseFooter}>
        <Text style={styles.category}>
          {course.category}
        </Text>

        <Text style={styles.studentCount}>
          {course.students} sinh viên
        </Text>
      </View>
    </Pressable>
  );
}

function CourseListScreen() {
  const [query, setQuery] = useState('');

  const normalizedQuery = query
    .trim()
    .toLocaleLowerCase('vi');

  const filteredCourses = courses.filter((course) =>
    `${course.title} ${course.instructor} ${course.category}`
      .toLocaleLowerCase('vi')
      .includes(normalizedQuery)
  );

  const openCourse = (course: Course) => {
    Alert.alert(
      course.title,
      `Giảng viên: ${course.instructor}\nSố sinh viên: ${course.students}`
    );
  };

  return (
    <FlatList
      data={filteredCourses}

      keyExtractor={(item) => item.id}

      renderItem={({ item }) => (
        <CourseRow
          course={item}
          onPress={openCourse}
        />
      )}

      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.screenTitle}>
            Course Catalog
          </Text>

          <Text style={styles.subtitle}>
            Khám phá các khóa học đang mở
          </Text>

          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Tìm theo tên, giảng viên hoặc danh mục"
            placeholderTextColor="#8A8F98"
            returnKeyType="search"
            style={styles.searchInput}
          />

          <Text style={styles.resultText}>
            Tìm thấy {filteredCourses.length} khóa học
          </Text>
        </View>
      }

      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyTitle}>
            Không tìm thấy khóa học
          </Text>

          <Text style={styles.emptyText}>
            Hãy thử tìm kiếm bằng một từ khóa khác.
          </Text>
        </View>
      }

      ItemSeparatorComponent={() => (
        <View style={styles.separator} />
      )}

      contentContainerStyle={styles.listContent}
    />
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CourseListScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },

  listContent: {
    padding: 16,
    paddingBottom: 30,
  },

  header: {
    marginBottom: 16,
  },

  screenTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#172033',
  },

  subtitle: {
    marginTop: 6,
    marginBottom: 16,
    fontSize: 15,
    color: '#667085',
  },

  searchInput: {
    height: 48,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D0D5DD',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 15,
    color: '#172033',
  },

  resultText: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: '600',
    color: '#475467',
  },

  courseCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: '#EAECF0',
  },

  courseCardPressed: {
    opacity: 0.7,
  },

  courseTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#172033',
  },

  instructor: {
    marginTop: 8,
    fontSize: 14,
    color: '#667085',
  },

  courseFooter: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  category: {
    fontSize: 13,
    fontWeight: '600',
    color: '#2563EB',
  },

  studentCount: {
    fontSize: 13,
    color: '#667085',
  },

  separator: {
    height: 12,
  },

  emptyContainer: {
    alignItems: 'center',
    paddingVertical: 50,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#172033',
  },

  emptyText: {
    marginTop: 8,
    color: '#667085',
    textAlign: 'center',
  },
});