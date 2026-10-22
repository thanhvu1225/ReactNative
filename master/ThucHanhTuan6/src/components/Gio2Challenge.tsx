import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Gio2Challenge() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Sách nổi bật</Text>

      <View style={styles.grid}>
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

        <BookCard
          title="Lập Trình React Native"
          author="Nguyễn Văn A"
          price="150.000đ"
          image="https://images.unsplash.com/photo-1532012197267-da84d127e765"
        />
      </View>
    </View>
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

      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>

      <Text style={styles.author}>{author}</Text>

      <Text style={styles.price}>{price}</Text>
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

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },

  card: {
    width: "31%",
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
    fontSize: 12,
    color: "#666",
  },

  price: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: "bold",
    color: "#e53935",
  },
});
