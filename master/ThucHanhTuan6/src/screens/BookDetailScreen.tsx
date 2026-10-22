import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { findBookById, formatPrice } from "../data/books";
import { useCart } from "../hooks/useCart";
import type { HomeStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<HomeStackParamList, "BookDetail">;

export default function BookDetailScreen({ route }: Props) {
  const { add } = useCart();
  const book = findBookById(route.params.bookId);

  if (!book) {
    return <Text style={styles.notFound}>Không tìm thấy sách.</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: book.image }} style={styles.image} />
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>Tác giả: {book.author}</Text>
      <Text style={styles.price}>{formatPrice(book.price)}</Text>
      <Text style={styles.heading}>Mô tả sách</Text>
      <Text style={styles.description}>{book.description}</Text>

      <TouchableOpacity style={styles.button} onPress={() => add(book.id)}>
        <Text style={styles.buttonText}>Thêm vào giỏ</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  image: {
    width: 200,
    height: 280,
    alignSelf: "center",
    borderRadius: 8,
  },
  title: {
    marginTop: 18,
    fontSize: 24,
    fontWeight: "bold",
    color: "#182035",
  },
  author: {
    marginTop: 8,
    color: "#666",
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: "#e53935",
    fontWeight: "bold",
  },
  heading: {
    marginTop: 22,
    marginBottom: 8,
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    lineHeight: 22,
  },
  button: {
    marginTop: 24,
    padding: 14,
    borderRadius: 8,
    backgroundColor: "#182035",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  notFound: {
    padding: 20,
  },
});
