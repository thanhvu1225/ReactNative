import React from "react";
import { View, Text, StyleSheet } from "react-native";

const tabs = ["Trang chủ", "Danh mục", "Giỏ hàng", "Tài khoản"];

export default function Gio5Bai1BottomTab() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Tên App</Text>
        <Text>Trang chủ</Text>
      </View>

      <View style={styles.tabBar}>
        {tabs.map((tab) => (
          <View key={tab} style={styles.tab}>
            <Text style={styles.tabText}>{tab}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  content: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  tabBar: {
    height: 70,
    flexDirection: "row",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },

  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  tabText: {
    fontSize: 13,
    color: "#182035",
  },
});
