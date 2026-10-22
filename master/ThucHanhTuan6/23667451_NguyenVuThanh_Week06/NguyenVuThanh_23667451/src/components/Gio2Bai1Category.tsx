import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Gio2Bai1Category() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Danh mục sách</Text>

      <View style={styles.chips}>
        <View style={styles.chip}>
          <Text style={styles.chipText}>Tất cả</Text>
        </View>

        <View style={styles.chip}>
          <Text style={styles.chipText}>Văn học</Text>
        </View>

        <View style={styles.chip}>
          <Text style={styles.chipText}>Kinh tế</Text>
        </View>

        <View style={styles.chip}>
          <Text style={styles.chipText}>Kỹ năng sống</Text>
        </View>

        <View style={styles.chip}>
          <Text style={styles.chipText}>Thiếu nhi</Text>
        </View>

        <View style={styles.chip}>
          <Text style={styles.chipText}>Ngoại ngữ</Text>
        </View>

        <View style={styles.chip}>
          <Text style={styles.chipText}>Công nghệ</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },

  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  chip: {
    paddingHorizontal: 16,
    paddingVertical: 10,

    borderWidth: 1,
    borderColor: "#182035",

    borderRadius: 20,

    backgroundColor: "white",
  },

  chipText: {
    fontSize: 14,
    color: "#182035",
  },
});
