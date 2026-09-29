import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";

type Product = {
  id: number;
  name: string;
  price: number;
};

type User = {
  id: number;
  name: string;
  age: number;
};

// Generic function
function filterByName<T extends { name: string }>(
  data: T[],
  keyword: string
): T[] {
  return data.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );
}

const products: Product[] = [
  { id: 1, name: "iPhone 15", price: 999 },
  { id: 2, name: "Samsung Galaxy", price: 799 },
  { id: 3, name: "MacBook Pro", price: 1999 },
  { id: 4, name: "iPad", price: 699 },
];

export default function FilteredList() {
  const [keyword, setKeyword] = useState("");

  const filteredProducts = filterByName(products, keyword);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bài 13 - Filter Generic</Text>

      <TextInput
        style={styles.input}
        placeholder="Tìm sản phẩm..."
        value={keyword}
        onChangeText={setKeyword}
      />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Giá: ${item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },

  card: {
    padding: 15,
    backgroundColor: "#eee",
    marginBottom: 10,
    borderRadius: 8,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});