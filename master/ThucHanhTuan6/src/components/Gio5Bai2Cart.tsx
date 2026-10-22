import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

const books = [
  {
    id: 1,
    title: "Nhà Giả Kim",
    price: "85.000đ",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
  },
  {
    id: 2,
    title: "Đắc Nhân Tâm",
    price: "90.000đ",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    id: 3,
    title: "Tuổi Trẻ Đáng Giá Bao Nhiêu",
    price: "75.000đ",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e",
  },
  {
    id: 4,
    title: "Harry Potter",
    price: "120.000đ",
    image: "https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf",
  },
];

const tabs = ["Trang chủ", "Danh mục", "Giỏ hàng", "Tài khoản"];

export default function Gio5Bai2Cart() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Giỏ hàng</Text>

      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        {books.map((book) => (
          <View key={book.id} style={styles.item}>
            <Image source={{ uri: book.image }} style={styles.image} />

            <View style={styles.info}>
              <Text style={styles.title}>{book.title}</Text>
              <Text style={styles.price}>{book.price}</Text>
              <Text style={styles.quantity}>Số lượng: 1</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.checkout}>
        <View>
          <Text style={styles.totalLabel}>Tổng tiền</Text>
          <Text style={styles.total}>370.000đ</Text>
        </View>

        <View style={styles.button}>
          <Text style={styles.buttonText}>Thanh toán</Text>
        </View>
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

  heading: {
    padding: 16,
    fontSize: 22,
    fontWeight: "bold",
    color: "#182035",
  },

  scroll: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  item: {
    flexDirection: "row",
    padding: 12,
    marginBottom: 12,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
  },

  image: {
    width: 70,
    height: 90,
    borderRadius: 6,
  },

  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "space-between",
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
  },

  price: {
    color: "#e53935",
    fontWeight: "bold",
  },

  quantity: {
    color: "#666",
  },

  checkout: {
    height: 80,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },

  totalLabel: {
    color: "#666",
  },

  total: {
    marginTop: 4,
    fontSize: 18,
    fontWeight: "bold",
    color: "#e53935",
  },

  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#182035",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
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
