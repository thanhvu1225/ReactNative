import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const books = [
  {
    id: 1,
    title: "Nhà Giả Kim",
    author: "Paulo Coelho",
    price: "85.000đ",
    discount: "-20%",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
  },
  {
    id: 2,
    title: "Đắc Nhân Tâm",
    author: "Dale Carnegie",
    price: "90.000đ",
    discount: "-15%",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    id: 3,
    title: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
    author: "Rosie Nguyễn",
    price: "75.000đ",
    discount: "-10%",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
  },
  {
    id: 4,
    title: "Harry Potter",
    author: "J.K. Rowling",
    price: "120.000đ",
    discount: "-25%",
    image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf",
  },
  {
    id: 5,
    title: "Dế Mèn Phiêu Lưu Ký",
    author: "Tô Hoài",
    price: "60.000đ",
    discount: "-10%",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
  },
  {
    id: 6,
    title: "Lão Hạc",
    author: "Nam Cao",
    price: "55.000đ",
    discount: "-15%",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
];

export default function Gio3Challenge() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Sách bán chạy</Text>

        <View style={styles.grid}>
          {books.map((book) => (
            <View key={book.id} style={styles.card}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: book.image }} style={styles.image} />

                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{book.discount}</Text>
                </View>
              </View>

              <Text style={styles.title} numberOfLines={2}>
                {book.title}
              </Text>

              <Text style={styles.author}>{book.author}</Text>

              <Text style={styles.price}>{book.price}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.cart}>
        <Text style={styles.cartText}>Giỏ</Text>

        <View style={styles.quantity}>
          <Text style={styles.quantityText}>3</Text>
        </View>
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
    padding: 16,
    paddingBottom: 120,
  },

  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    marginBottom: 16,
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
    fontSize: 15,
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

  cart: {
    position: "absolute",
    bottom: 24,
    right: 20,
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#182035",
    justifyContent: "center",
    alignItems: "center",
  },

  cartText: {
    color: "white",
    fontWeight: "bold",
  },

  quantity: {
    position: "absolute",
    top: -4,
    right: -4,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },

  quantityText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
