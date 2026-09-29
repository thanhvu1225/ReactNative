import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Bai2BookCard() {
  return (
    <View style={styles.card}>
      {/* Ảnh sách */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
        }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          Nhà Giả Kim
        </Text>

        <Text style={styles.author}>Paulo Coelho</Text>

        <Text style={styles.price}>85.000đ</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "flex-start",

    padding: 12,
    margin: 16,

    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,

    backgroundColor: "white",
  },

  image: {
    width: 80,
    height: 110,
    borderRadius: 6,
  },

  info: {
    flex: 1,
    height: 110,

    marginLeft: 12,

    flexDirection: "column",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  author: {
    fontSize: 14,
    color: "#666",
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#e53935",
  },
});
