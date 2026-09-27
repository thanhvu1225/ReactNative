import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Bai1Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>Tên App</Text>
      <View style={styles.right}>
        <Text style={styles.item}>Tìm kiếm</Text>
        <Text style={styles.item}>Giỏ hàng</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    paddingHorizontal: 16,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    backgroundColor: "#182035",
    borderWidth: 1,
    borderColor: "#000",
  },

  logo: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },

  item: {
    color: "white",
    fontSize: 16,
  },
});
