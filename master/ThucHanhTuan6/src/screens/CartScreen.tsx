import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { formatPrice } from "../data/books";
import { useCart } from "../hooks/useCart";
import type { MainTabParamList, RootStackParamList } from "../navigation/types";

type ScreenProps = BottomTabScreenProps<MainTabParamList, "Cart">;

export default function CartScreen({ navigation }: ScreenProps) {
  const rootNavigation =
    navigation.getParent<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <CartContent
      onCheckout={(total) => rootNavigation?.navigate("Checkout", { total })}
    />
  );
}

export function CartContent({
  onCheckout,
}: {
  onCheckout?: (total: number) => void;
}) {
  const { items, totalPrice, add, remove, setQuantity } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Giỏ hàng</Text>

      <ScrollView contentContainerStyle={styles.content}>
        {items.length === 0 && (
          <Text style={styles.empty}>Giỏ hàng đang trống.</Text>
        )}

        {items.map(({ bookId, quantity, book }) => (
          <View key={bookId} style={styles.item}>
            <Image source={{ uri: book.image }} style={styles.image} />
            <View style={styles.info}>
              <Text style={styles.title}>{book.title}</Text>
              <Text style={styles.price}>{formatPrice(book.price)}</Text>

              <View style={styles.actions}>
                <TouchableOpacity
                  style={styles.smallButton}
                  onPress={() => setQuantity(bookId, quantity - 1)}
                >
                  <Text>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity
                  style={styles.smallButton}
                  onPress={() => add(bookId)}
                >
                  <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => remove(bookId)}>
                  <Text style={styles.remove}>Xóa</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.checkout}>
        <View>
          <Text style={styles.totalLabel}>Tổng tiền</Text>
          <Text style={styles.total}>{formatPrice(totalPrice)}</Text>
        </View>
        <TouchableOpacity
          disabled={items.length === 0 || !onCheckout}
          style={[
            styles.checkoutButton,
            (items.length === 0 || !onCheckout) && styles.disabled,
          ]}
          onPress={() => onCheckout?.(totalPrice)}
        >
          <Text style={styles.checkoutText}>Thanh toán</Text>
        </TouchableOpacity>
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
  content: {
    paddingHorizontal: 16,
  },
  empty: {
    marginTop: 20,
    textAlign: "center",
    color: "#666",
  },
  item: {
    flexDirection: "row",
    marginBottom: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "white",
  },
  image: {
    width: 70,
    height: 90,
    borderRadius: 6,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontWeight: "bold",
  },
  price: {
    marginTop: 6,
    color: "#e53935",
    fontWeight: "bold",
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 12,
  },
  smallButton: {
    width: 28,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 4,
  },
  quantity: {
    minWidth: 18,
    textAlign: "center",
  },
  remove: {
    marginLeft: 8,
    color: "#d32f2f",
  },
  checkout: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "white",
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
  checkoutButton: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 8,
    backgroundColor: "#182035",
  },
  checkoutText: {
    color: "white",
    fontWeight: "bold",
  },
  disabled: {
    opacity: 0.4,
  },
});
