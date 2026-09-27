import React, { useState, useMemo, useCallback } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";

const products = [
  { id: "1", name: "Áo thun", price: 200000 },
  { id: "2", name: "Quần jean", price: 450000 },
  { id: "3", name: "Giày thể thao", price: 800000 },
];

export default function Bai5_UseMemo() {
  const [keyword, setKeyword] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(keyword.toLowerCase()),
    );
  }, [keyword]);

  const totalPrice = useMemo(() => {
    return filteredProducts.reduce(
      (total, product) => total + product.price,
      0,
    );
  }, [filteredProducts]);

  const handleSelect = useCallback((product: any) => {
    alert(`Đã chọn: ${product.name}`);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bài 3.1.5: useMemo & useCallback</Text>

      <TextInput
        style={styles.input}
        value={keyword}
        onChangeText={setKeyword}
        placeholder="Tìm tên sản phẩm..."
      />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={{ flex: 1 }}>
              {item.name} - {item.price.toLocaleString("vi-VN")}đ
            </Text>
            <Button title="Chọn" onPress={() => handleSelect(item)} />
          </View>
        )}
      />

      <Text style={styles.total}>
        Tổng giá: {totalPrice.toLocaleString("vi-VN")}đ
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 50 },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
  },
  total: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: "center",
    color: "blue",
  },
});
