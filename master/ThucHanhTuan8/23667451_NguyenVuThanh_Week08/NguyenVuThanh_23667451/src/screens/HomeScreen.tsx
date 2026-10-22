import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { BookCover, colors } from "../components";
import { books, formatPrice } from "../data";
import { User } from "../types";

type Props = {
  user: User | null;
  onLogin: () => void;
  onLogout: () => void;
  onCheckout: () => void;
  onOpenBook: (bookId: string) => void;
};

export default function HomeScreen({
  user,
  onLogin,
  onLogout,
  onCheckout,
  onOpenBook,
}: Props) {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.logo}>BookStore</Text>
        <Pressable onPress={user ? onLogout : onLogin}>
          <Text style={styles.accountAction}>
            {user ? "Đăng xuất" : "Đăng nhập"}
          </Text>
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Pressable style={styles.checkoutButton} onPress={onCheckout}>
          <Text style={styles.checkoutButtonText}>Đi đến thanh toán</Text>
        </Pressable>

        <Text style={styles.sectionTitle}>Sách nổi bật</Text>
        <View style={styles.grid}>
          {books.map((book) => (
            <Pressable
              key={book.id}
              style={styles.bookCard}
              onPress={() => onOpenBook(book.id)}
            >
              <BookCover color={book.color} title={book.title} />
              <Text numberOfLines={2} style={styles.bookTitle}>
                {book.title}
              </Text>
              <Text numberOfLines={1} style={styles.author}>
                {book.author}
              </Text>
              <Text style={styles.price}>{formatPrice(book.price)}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    minHeight: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    backgroundColor: colors.primary,
  },
  logo: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },
  accountAction: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  content: {
    width: "100%",
    maxWidth: 680,
    alignSelf: "center",
    padding: 16,
    paddingBottom: 32,
  },
  welcome: {
    padding: 14,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    backgroundColor: colors.surface,
  },
  welcomeTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "700",
  },
  welcomeText: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 5,
  },
  checkoutButton: {
    minHeight: 46,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: colors.primary,
    marginTop: 12,
  },
  checkoutButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "700",
    marginTop: 24,
    marginBottom: 12,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  bookCard: {
    width: "48%",
    padding: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    backgroundColor: colors.surface,
  },
  bookTitle: {
    minHeight: 40,
    color: colors.text,
    fontSize: 15,
    lineHeight: 20,
    fontWeight: "700",
    marginTop: 8,
  },
  author: {
    color: colors.muted,
    fontSize: 12,
    marginTop: 3,
  },
  price: {
    color: colors.danger,
    fontSize: 14,
    fontWeight: "700",
    marginTop: 6,
  },
});
