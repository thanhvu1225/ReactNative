import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

type Product = {
  id: number;
  title: string;
  price: number;
};

// Generic Interface
interface ApiResponse<T> {
  data: T[];
  total: number;
  page: number;
}

const fetchProducts = async (
  page: number,
  limit: number
): Promise<ApiResponse<Product>> => {
  const skip = (page - 1) * limit;

  const response = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
  );

  const result = await response.json();

  return {
    data: result.products as Product[],
    total: result.total,
    page: page,
  };
};

export default function PaginationScreen() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);

  const limit = 5;

  const loadProducts = async () => {
    const result = await fetchProducts(page, limit);

    setProducts(result.data);
  };

  useEffect(() => {
    loadProducts();
  }, [page]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bài 14 - Pagination</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.title}</Text>
            <Text>Giá: ${item.price}</Text>
          </View>
        )}
      />

      <View style={styles.pagination}>
        <TouchableOpacity
          style={styles.button}
          disabled={page === 1}
          onPress={() => setPage(page - 1)}
        >
          <Text style={styles.buttonText}>Trang trước</Text>
        </TouchableOpacity>

        <Text style={styles.page}>Trang {page}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setPage(page + 1)}
        >
          <Text style={styles.buttonText}>Trang sau</Text>
        </TouchableOpacity>
      </View>
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

  card: {
    backgroundColor: "#eee",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },

  name: {
    fontSize: 17,
    fontWeight: "bold",
  },

  pagination: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
  },

  button: {
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 8,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  page: {
    fontSize: 16,
    fontWeight: "bold",
  },
});