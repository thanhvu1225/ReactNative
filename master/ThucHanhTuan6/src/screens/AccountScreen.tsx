import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useAuth } from "../hooks/useAuth";

export default function AccountScreen() {
  const { user, token, isLoggedIn, login, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tài khoản</Text>

      {isLoggedIn && user ? (
        <>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.text}>{user.email}</Text>
          <Text style={styles.text}>Token: {token}</Text>
          <TouchableOpacity style={styles.button} onPress={logout}>
            <Text style={styles.buttonText}>Đăng xuất</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.text}>Bạn chưa đăng nhập.</Text>
          <TouchableOpacity style={styles.button} onPress={login}>
            <Text style={styles.buttonText}>Đăng nhập bằng dữ liệu giả</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    marginBottom: 20,
    fontSize: 22,
    fontWeight: "bold",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    marginTop: 8,
    color: "#555",
  },
  button: {
    marginTop: 24,
    padding: 14,
    borderRadius: 8,
    backgroundColor: "#182035",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
});
