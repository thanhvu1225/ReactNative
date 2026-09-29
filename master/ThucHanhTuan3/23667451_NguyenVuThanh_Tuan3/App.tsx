import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Pressable,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";

import Bai1_UseState from "./src/exercises/Bai1_UseState";
import Bai2_UseEffect from "./src/exercises/Bai2_UseEffect";
import Bai3_UseContext from "./src/exercises/Bai3_UseContext";
import Bai4_UseReducer from "./src/exercises/Bai4_UseReducer";
import Bai5_UseMemo from "./src/exercises/Bai5_UseMemo";
import Bai6_TodoApp from "./src/exercises/Bai6_TodoApp";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("MENU");

  const renderScreen = () => {
    switch (currentScreen) {
      case "BAI1":
        return <Bai1_UseState />;
      case "BAI2":
        return <Bai2_UseEffect />;
      case "BAI3":
        return <Bai3_UseContext />;
      case "BAI4":
        return <Bai4_UseReducer />;
      case "BAI5":
        return <Bai5_UseMemo />;
      case "BAI6":
        return <Bai6_TodoApp />;
      default:
        return (
          <ScrollView contentContainerStyle={styles.menuContainer}>

            <Text style={styles.sectionLabel}>MENU BÀI TẬP</Text>
            {[
              ["01", "useState", "Form họ tên", "BAI1"],
              ["02", "useEffect", "Kết nối dữ liệu", "BAI2"],
              ["03", "useContext", "Thông tin người dùng", "BAI3"],
              ["04", "useReducer", "Form đăng nhập", "BAI4"],
              ["05", "useMemo & useCallback", "Tối ưu hiệu năng", "BAI5"],
            ].map(([number, hook, description, screen]) => (
              <Pressable
                key={screen}
                style={({ pressed }) => [styles.exerciseButton, pressed && styles.pressed]}
                onPress={() => setCurrentScreen(screen)}
              >
                <Text style={styles.number}>{number}</Text>
                <View style={styles.exerciseCopy}>
                  <Text style={styles.hook}>{hook}</Text>
                  <Text style={styles.description}>{description}</Text>
                </View>
                <Text style={styles.arrow}>›</Text>
              </Pressable>
            ))}

            <Pressable
              style={({ pressed }) => [styles.projectButton, pressed && styles.pressed]}
              onPress={() => setCurrentScreen("BAI6")}
            >
              <View>
                <Text style={styles.projectLabel}>BÀI TỔNG HỢP</Text>
                <Text style={styles.projectTitle}>Todo App</Text>
                <Text style={styles.projectDescription}>Áp dụng toàn bộ kiến thức chương 3</Text>
              </View>
              <Text style={styles.projectArrow}>→</Text>
            </Pressable>
          </ScrollView>
        );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {currentScreen !== "MENU" && (
        <View style={styles.header}>
          <Button
            title="⬅ Trở về Menu"
            color="gray"
            onPress={() => setCurrentScreen("MENU")}
          />
        </View>
      )}

      {/* Hiển thị màn hình */}
      {renderScreen()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#eef3f2", paddingTop: 40 },
  header: {
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    alignItems: "flex-start",
  },
  menuContainer: { flexGrow: 1, padding: 24, paddingTop: 36, paddingBottom: 40 },
  hero: { backgroundColor: "#ffffff", padding: 18, marginBottom: 20, borderWidth: 1, borderColor: "#d8e2e0" },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333333",
  },
  sectionLabel: { color: "#587174", fontSize: 12, fontWeight: "bold", marginBottom: 12 },
  exerciseButton: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 4,
    flexDirection: "row",
    marginBottom: 12,
    minHeight: 62,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "#d8e2e0",
  },
  pressed: { opacity: 0.72, transform: [{ scale: 0.985 }] },
  number: { color: "#159a91", fontSize: 14, fontWeight: "800", width: 34 },
  exerciseCopy: { flex: 1 },
  hook: { color: "#19383c", fontSize: 17, fontWeight: "800" },
  description: { color: "#789093", fontSize: 13, marginTop: 4 },
  arrow: { color: "#159a91", fontSize: 28, fontWeight: "300", marginLeft: 10 },
  projectButton: {
    alignItems: "center",
    backgroundColor: "#e47f4e",
    borderRadius: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 18,
    minHeight: 104,
    paddingHorizontal: 20,
  },
  projectLabel: { color: "#ffe6d8", fontSize: 11, fontWeight: "800", letterSpacing: 1 },
  projectTitle: { color: "#ffffff", fontSize: 24, fontWeight: "800", marginTop: 5 },
  projectDescription: { color: "#fff1e9", fontSize: 12, marginTop: 4 },
  projectArrow: { color: "#ffffff", fontSize: 32, fontWeight: "300" },
});
