import React from "react";
import { StyleSheet, Text, View } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { formatPrice } from "../data/books";
import type { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Checkout">;

export default function CheckoutScreen({ route }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Tổng tiền cần thanh toán</Text>
      <Text style={styles.total}>{formatPrice(route.params.total)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  label: {
    color: "#666",
  },
  total: {
    marginTop: 10,
    fontSize: 28,
    fontWeight: "bold",
    color: "#e53935",
  },
});
