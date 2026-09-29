import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Gio3Bai1Badge() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sách giảm giá</Text>

      <View style={styles.book}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
            }}
            style={styles.image}
          />

          <View style={styles.badge}>
            <Text style={styles.badgeText}>-20%</Text>
          </View>
        </View>

        <Text style={styles.title}>Nhà Giả Kim</Text>
        <Text style={styles.author}>Paulo Coelho</Text>
        <Text style={styles.price}>85.000đ</Text>
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

  book: {
    width: 180,
    padding: 8,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },

  imageContainer: {
    position: "relative",
  },

  image: {
    width: "100%",
    aspectRatio: 3 / 4,
    borderRadius: 6,
  },

  badge: {
    position: "absolute",
    top: 6,
    left: 6,

    paddingHorizontal: 8,
    paddingVertical: 4,

    backgroundColor: "red",
    borderRadius: 5,
  },

  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },

  title: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
  },

  author: {
    marginTop: 4,
    color: "#666",
  },

  price: {
    marginTop: 6,
    fontWeight: "bold",
    color: "#e53935",
  },
});
