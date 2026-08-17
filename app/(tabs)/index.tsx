import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>SmartCampus</Text>
    </View>
  );
}

function Avatar() {
  return (
    <View style={styles.avatarContainer}>
      <Image
        source={{ uri: "https://" }}
        style={styles.avatar}
        accessibilityRole="image"
        accessibilityLabel="Ảnh đại diện sinh viên Nguyễn Minh Anh"
      />
    </View>
  );
}

function SearchField({
  value,
  onChangeText,
}: {
  value: string;
  onChangeText: (text: string) => void;
}) {
  return (
    <TextInput
      style={styles.searchInput}
      value={value}
      onChangeText={onChangeText}
      placeholder="Tìm kiếm thông tin..."
      placeholderTextColor="#8A96A3"
      accessibilityRole="search"
      accessibilityLabel="Tìm kiếm thông tin sinh viên"
    />
  );
}

function StudentInfo() {
  return (
    <View style={styles.infoBox}>
      <Text style={styles.infoTitle}>Thông tin sinh viên</Text>

      <Text style={styles.infoText}>
        Email: <Text style={styles.bold}>vthanh1225@gmail.com</Text>
      </Text>

      <Text style={styles.infoText}>
        Lớp: <Text style={styles.bold}>DHKTPM19A</Text>
      </Text>
    </View>
  );
}

function SaveButton() {
  const [saved, setSaved] = useState(false);

  return (
    <Pressable
      onPress={() => setSaved(!saved)}
      hitSlop={8}
      accessibilityRole="button"
      accessibilityLabel="Lưu hồ sơ sinh viên"
      // accessibilityState={{
      //   pressed: saved,
      // }}
      style={({ pressed }) => [
        styles.saveButton,
        pressed && styles.saveButtonPressed,
      ]}
    >
      <Text style={styles.saveButtonText}>
        {saved ? "ĐÃ LƯU HỒ SƠ" : "LƯU HỒ SƠ"}
      </Text>
    </Pressable>
  );
}

function ContactButton() {
  return (
    <Pressable
      hitSlop={8}
      accessibilityRole="button"
      accessibilityLabel="Xem thông tin liên hệ"
      style={({ pressed }) => [
        styles.contactButton,
        pressed && styles.contactButtonPressed,
      ]}
    >
      {({ pressed }) => (
        <Text style={styles.contactButtonText}>
          {pressed ? "ĐANG NHẤN" : "XEM LIÊN HỆ"}
        </Text>
      )}
    </Pressable>
  );
}
function DisabledButton() {
  return (
    <Pressable
      disabled={true}
      accessibilityRole="button"
      accessibilityLabel="Chức năng vô hiệu hóa"
      accessibilityState={{
        disabled: true,
      }}
      style={styles.disabledButton}
    >
      <Text style={styles.disabledButtonText}>VÔ HIỆU</Text>
    </Pressable>
  );
}

export default function HomeScreen() {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <Header />

          <View style={styles.body}>
            {/* Thông tin sinh viên */}
            <View style={styles.studentHeader}>
              <Avatar />

              <View style={styles.studentInfo}>
                <Text style={styles.studentName}>
                  Nguyễn Vũ Thành
                </Text>

                <Text style={styles.studentId}>
                  MSSV: 23667451
                </Text>
              </View>
            </View>

            {/* Tìm kiếm */}
            <SearchField
              value={search}
              onChangeText={setSearch}
            />

            {/* Thông tin */}
            <StudentInfo />

            {/* Nút lưu */}
            <SaveButton />

            {/* Nút liên hệ */}
            <ContactButton />

            {/* Nút vô hiệu hóa */}
            <DisabledButton />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#F5F7FA",
  },

  scrollContent: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  card: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: "#FFFFFF",
    borderWidth: 2,
    borderColor: "#263238",
    borderRadius: 20,
    overflow: "hidden",

    elevation: 4,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },


  header: {
    height: 55,
    backgroundColor: "#1976D2",
    justifyContent: "center",
    paddingHorizontal: 18,
  },

  headerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },


  body: {
    padding: 16,
  },

  studentHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  studentInfo: {
    flex: 1,
    marginLeft: 14,
  },

  studentName: {
    color: "#263238",
    fontSize: 17,
    fontWeight: "700",
  },

  studentId: {
    color: "#78909C",
    fontSize: 13,
    marginTop: 5,
  },

  avatarContainer: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: "#1976D2",
    backgroundColor: "#E3F2FD",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },

  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },


  searchInput: {
    height: 48,
    borderWidth: 1,
    borderColor: "#B0BEC5",
    borderRadius: 8,
    backgroundColor: "#F5F7FA",
    paddingHorizontal: 14,
    color: "#263238",
    fontSize: 14,
    marginBottom: 12,
  },

  infoBox: {
    borderWidth: 1,
    borderColor: "#90CAF9",
    backgroundColor: "#EAF4FF",
    borderRadius: 9,
    padding: 12,
    marginBottom: 14,
  },

  infoTitle: {
    color: "#263238",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 8,
  },

  infoText: {
    color: "#607D8B",
    fontSize: 13,
    marginBottom: 4,
  },

  bold: {
    fontWeight: "600",
  },


  saveButton: {
    minHeight: 48,
    borderRadius: 9,
    backgroundColor: "#1976D2",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  saveButtonPressed: {
    transform: [{ scale: 0.96 }],
    opacity: 0.7,
  },

  saveButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "700",
  },

  contactButton: {
    minHeight: 48,
    marginTop: 10,
    borderRadius: 9,
    borderWidth: 2,
    borderColor: "#1976D2",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  contactButtonPressed: {
    transform: [{ scale: 0.96 }],
    backgroundColor: "#E3F2FD",
    borderWidth: 3,
  },

  contactButtonText: {
    color: "#1565C0",
    fontSize: 14,
    fontWeight: "700",
  },

  disabledButton: {
    minHeight: 48,
    marginTop: 10,
    borderRadius: 9,
    backgroundColor: "#D5DDE6",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  disabledButtonText: {
    color: "#687685",
    fontSize: 14,
    fontWeight: "700",
  },
});