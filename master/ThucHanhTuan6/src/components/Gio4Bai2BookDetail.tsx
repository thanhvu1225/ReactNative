import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

export default function Gio4Bai2BookDetail() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
          }}
          style={styles.image}
        />

        <Text style={styles.title}>Nhà Giả Kim</Text>

        <Text style={styles.author}>Tác giả: Paulo Coelho</Text>

        <Text style={styles.price}>85.000đ</Text>

        <Text style={styles.heading}>Mô tả sách</Text>

        <Text style={styles.description}>
          Nhà Giả Kim là một trong những cuốn sách nổi tiếng của Paulo Coelho.
          Câu chuyện kể về hành trình theo đuổi ước mơ và khám phá ý nghĩa cuộc
          sống của nhân vật chính.
        </Text>

        <Text style={styles.description}>
          Cuốn sách mang đến nhiều bài học về ước mơ, sự lựa chọn, lòng tin và
          hành trình tìm kiếm điều mình thực sự mong muốn.
        </Text>

        <Text style={styles.description}>
          Đây là một tác phẩm phù hợp với những người yêu thích sách truyền cảm
          hứng và những câu chuyện về hành trình trưởng thành.
        </Text>
      </ScrollView>

      <View style={styles.bottomBar}>
        <Text style={styles.bottomPrice}>85.000đ</Text>

        <View style={styles.button}>
          <Text style={styles.buttonText}>Thêm vào giỏ</Text>
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

  scroll: {
    flex: 1,
  },

  content: {
    padding: 16,
    paddingBottom: 110,
  },

  image: {
    width: 220,
    height: 300,
    alignSelf: "center",
    borderRadius: 8,
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#182035",
  },

  author: {
    marginTop: 8,
    fontSize: 16,
    color: "#666",
  },

  price: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: "bold",
    color: "#e53935",
  },

  heading: {
    marginTop: 24,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },

  description: {
    marginBottom: 16,
    fontSize: 16,
    lineHeight: 26,
    color: "#444",
  },

  bottomBar: {
    height: 70,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },

  bottomPrice: {
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
});
