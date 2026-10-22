import React from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { books, formatPrice } from "../data/books";
import { useCart } from "../hooks/useCart";
import type { HomeStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<HomeStackParamList, "Home">;

const categories = ["Tất cả", "Tiểu thuyết", "Kỹ năng", "Thiếu nhi"];

export default function HomeScreen({ navigation }: Props) {
  const { totalQuantity } = useCart();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>BookStore</Text>
        <Text style={styles.headerText}>Tìm kiếm</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.heading}>Danh mục</Text>
        <View style={styles.chips}>
          {categories.map((category) => (
            <View key={category} style={styles.chip}>
              <Text>{category}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.heading}>Sách nổi bật</Text>
        <View style={styles.grid}>
          {books.map((book) => (
            <Pressable
              key={book.id}
              style={styles.card}
              onPress={() =>
                navigation.navigate("BookDetail", { bookId: book.id })
              }
            >
              <Image source={{ uri: book.image }} style={styles.image} />
              <Text style={styles.bookTitle} numberOfLines={2}>
                {book.title}
              </Text>
              <Text style={styles.author}>{book.author}</Text>
              <Text style={styles.price}>{formatPrice(book.price)}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>

      <View style={styles.floatingCart}>
        <Text style={styles.cartText}>Giỏ</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{totalQuantity}</Text>
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
  headerText: {
    color: "white",
  },
  content: {
    padding: 16,
    paddingBottom: 100,
  },
  heading: {
    marginBottom: 12,
    fontSize: 20,
    fontWeight: "bold",
  },
  chips: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 20,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#182035",
    borderRadius: 18,
    backgroundColor: "white",
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
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 4,
    borderRadius: 6,
  },
  bookTitle: {
    marginTop: 8,
    fontWeight: "bold",
  },
  author: {
    marginTop: 4,
    color: "#666",
  },
  price: {
    marginTop: 6,
    color: "#e53935",
    fontWeight: "bold",
  },
  floatingCart: {
    position: "absolute",
    right: 18,
    bottom: 18,
    width: 58,
    height: 58,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 29,
    backgroundColor: "#182035",
  },
  cartText: {
    color: "white",
    fontWeight: "bold",
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "red",
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
