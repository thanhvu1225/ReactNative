import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

type ProductResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

// Hàm fetch sản phẩm
const fetchProducts = async (
  keyword: string,
  limit: number
): Promise<Product[]> => {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${keyword}&limit=${limit}`
  );

  const data = await response.json();

  return data.products as Product[];
};

export default function ProductSearch() {
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  const handleSearch = async () => {
    try {
      const result = await fetchProducts(keyword, 10);
      setProducts(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bài 11 - Product Search</Text>

      <TextInput
        style={styles.input}
        placeholder="Nhập tên sản phẩm..."
        value={keyword}
        onChangeText={setKeyword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Tìm kiếm</Text>
      </TouchableOpacity>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.productName}>{item.title}</Text>
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
    backgroundColor: "#f5f5f5",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "white",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },

  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});