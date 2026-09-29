import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function Bai1Challenge() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>BookStore</Text>

        <View style={styles.right}>
          <Text style={styles.headerText}>Tìm kiếm</Text>
          <Text style={styles.headerText}>Giỏ hàng</Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <BookCard
          title="Nhà Giả Kim"
          author="Paulo Coelho"
          price="85.000đ"
          image="https://images.unsplash.com/photo-1544947950-fa07a98d237f"
        />

        <BookCard
          title="Đắc Nhân Tâm"
          author="Dale Carnegie"
          price="95.000đ"
          image="https://images.unsplash.com/photo-1543002588-bfa74002ed7e"
        />

        <BookCard
          title="Tuổi Trẻ Đáng Giá Bao Nhiêu"
          author="Rosie Nguyễn"
          price="90.000đ"
          image="https://images.unsplash.com/photo-1512820790803-83ca734da794"
        />

        <BookCard
          title="Dế Mèn Phiêu Lưu Ký"
          author="Tô Hoài"
          price="70.000đ"
          image="https://images.unsplash.com/photo-1511108690759-009324a90311"
        />

        <BookCard
          title="Harry Potter"
          author="J.K. Rowling"
          price="120.000đ"
          image="https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

function BookCard({
  title,
  author,
  price,
  image,
}: {
  title: string;
  author: string;
  price: string;
  image: string;
}) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <Text style={styles.author}>{author}</Text>

        <Text style={styles.price}>{price}</Text>
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

  headerText: {
    color: "white",
    fontSize: 16,
  },

  content: {
    flex: 1,
  },

  card: {
    flexDirection: "row",
    alignItems: "flex-start",

    padding: 12,
    margin: 12,

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
