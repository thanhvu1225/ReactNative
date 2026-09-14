import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function HomeScreen() {
  const goTo = (path: string) => {
    router.push(path as any);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TUẦN 4</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => goTo("/news")}
      >
        <Text style={styles.text}>Bài 9 - News Feed</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => goTo("/user-detail")}
      >
        <Text style={styles.text}>Bài 10 - User Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => goTo("/product-search")}
      >
        <Text style={styles.text}>Bài 11 - Product Search</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => goTo("/api-error")}
      >
        <Text style={styles.text}>Bài 12 - API Error</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => goTo("/filtered-list")}
      >
        <Text style={styles.text}>Bài 13 - Filtered List</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => goTo("/pagination")}
      >
        <Text style={styles.text}>Bài 14 - Pagination</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => goTo("/refresh")}
      >
        <Text style={styles.text}>Bài 15 - Pull to Refresh</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
