import React from "react";
import { StyleSheet, Text, View } from "react-native";

const categories = ["Tiểu thuyết", "Kỹ năng", "Thiếu nhi"];

export default function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh mục sách</Text>
      {categories.map((category) => (
        <View key={category} style={styles.item}>
          <Text>{category}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    marginBottom: 16,
    fontSize: 22,
    fontWeight: "bold",
  },
  item: {
    marginBottom: 10,
    padding: 14,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "white",
  },
});
