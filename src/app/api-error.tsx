import React from "react";
import { View, Text, Button, Alert, StyleSheet } from "react-native";

type CustomError = {
  message: string;
  status?: number;
};

export default function ApiErrorScreen() {
  const fetchErrorApi = async () => {
    try {
      // Cố tình dùng URL sai
      const response = await fetch(
        "https://dummyjson.com/api-sai"
      );

      if (!response.ok) {
        throw {
          message: "API không tồn tại",
          status: response.status,
        };
      }
    } catch (error) {
      const customError = error as CustomError;

      window.alert(
        "Lỗi API",
        
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bài 12 - API Error</Text>

      <Button
        title="Gọi API lỗi"
        onPress={fetchErrorApi}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
});