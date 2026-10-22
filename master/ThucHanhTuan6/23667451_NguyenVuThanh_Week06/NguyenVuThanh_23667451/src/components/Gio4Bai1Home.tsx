import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

const categories = ["Tất cả", "Tiểu thuyết", "Kinh tế", "Kỹ năng", "Thiếu nhi"];

const books = [
  {
    id: 1,
    title: "Nhà Giả Kim",
    author: "Paulo Coelho",
    price: "85.000đ",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
  },
  {
    id: 2,
    title: "Đắc Nhân Tâm",
    author: "Dale Carnegie",
    price: "90.000đ",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    id: 3,
    title: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
    author: "Rosie Nguyễn",
    price: "75.000đ",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
  },
  {
    id: 4,
    title: "Harry Potter",
    author: "J.K. Rowling",
    price: "120.000đ",
    image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf",
  },
];

export default function Gio4Bai1Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>BookStore</Text>

        <View style={styles.headerRight}>
          <Text style={styles.headerItem}>Tìm kiếm</Text>
          <Text style={styles.headerItem}>Giỏ hàng</Text>
        </View>
      </View>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Danh mục</Text>

        <View style={styles.chips}>
          {categories.map((category) => (
            <View key={category} style={styles.chip}>
              <Text style={styles.chipText}>{category}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.heading}>Sách nổi bật</Text>

        <View style={styles.grid}>
          {books.map((book) => (
            <View key={book.id} style={styles.card}>
              <Image source={{ uri: book.image }} style={styles.image} />

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

  header: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#182035",
  },

  logo: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  headerRight: {
    flexDirection: "row",
    gap: 16,
  },

  headerItem: {
    color: "white",
    fontSize: 14,
  },

  scroll: {
    flex: 1,
  },

  content: {
    padding: 16,
    paddingBottom: 120,
  },

  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    marginTop: 8,
  },

  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },

  chip: {
    paddingHorizontal: 14,
    paddingVertical: 9,
    borderWidth: 1,
    borderColor: "#182035",
    borderRadius: 20,
    backgroundColor: "white",
  },

  chipText: {
    color: "#182035",
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

  image: {
    width: "100%",
    aspectRatio: 3 / 4,
    borderRadius: 6,
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
