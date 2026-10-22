import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Gio3Bai2FloatingCart() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tên App</Text>

      <View style={styles.cart}>
        <Text style={styles.cartText}>Giỏ hàng</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>3</Text>
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

  title: {
    margin: 20,
    fontSize: 24,
    fontWeight: "bold",
  },

  cart: {
    position: "absolute",
    bottom: 24,
    right: 20,

    width: 70,
    height: 70,
    borderRadius: 35,

    backgroundColor: "#182035",

    justifyContent: "center",
    alignItems: "center",
  },

  cartText: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
  },

  badge: {
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

  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});
