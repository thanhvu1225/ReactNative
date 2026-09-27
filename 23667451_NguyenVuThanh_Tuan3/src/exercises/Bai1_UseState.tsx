import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default function Bai1_UseState() {
  const [fullName, setFullName] = useState('');
  const [age, setAge] = useState('');

  const handleClear = () => {
    setFullName('');
    setAge('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bài 3.1.1: useState</Text>
      
      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
        placeholder="Nhập họ tên"
      />
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={setAge}
        placeholder="Nhập tuổi"
        keyboardType="numeric"
      />

      <Text style={styles.greeting}>
        {fullName ? `Xin chào, ${fullName}!` : 'Vui lòng nhập họ tên'}
      </Text>

      {age !== '' && parseInt(age) < 18 && (
        <Text style={styles.warning}>Cảnh báo: Bạn chưa đủ 18 tuổi!</Text>
      )}

      <Button title="Xóa dữ liệu" onPress={handleClear} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 15, borderRadius: 5 },
  greeting: { marginBottom: 10, fontSize: 18, color: 'green' },
  warning: { color: 'red', marginBottom: 15, fontWeight: 'bold' }
});