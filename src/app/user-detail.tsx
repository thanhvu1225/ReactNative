import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );

      const data = await response.json();

      setUser(data as User);
    } catch (error) {
      console.error("Lỗi khi lấy user:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // Chưa có dữ liệu → màn hình trống
  if (!user) {
    return <View style={styles.container}></View>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Profile</Text>

      <View style={styles.card}>
        <Text style={styles.label}>ID:</Text>
        <Text>{user?.id}</Text>

        <Text style={styles.label}>Name:</Text>
        <Text>{user?.name}</Text>

        <Text style={styles.label}>Username:</Text>
        <Text>{user?.username}</Text>

        <Text style={styles.label}>Email:</Text>
        <Text>{user?.email}</Text>

        <Text style={styles.label}>Phone:</Text>
        <Text>{user?.phone}</Text>

        <Text style={styles.label}>Website:</Text>
        <Text>{user?.website}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
});
