import React, { useEffect, useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function Bai2_UseEffect() {
  const [isConnected, setIsConnected] = useState(false);
  const [message, setMessage] = useState('Chưa kết nối');

  useEffect(() => {
    if (isConnected) {
      setMessage('Thiết bị đã kết nối');
    } else {
      setMessage('Thiết bị đã ngắt kết nối');
    }
  }, [isConnected]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bài 3.1.2: useEffect</Text>
      
      <Text style={[styles.message, { color: isConnected ? 'green' : 'red' }]}>
        {message}
      </Text>
      
      <Switch value={isConnected} onValueChange={setIsConnected} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 30 },
  message: { fontSize: 20, marginBottom: 20, fontWeight: 'bold' },
});