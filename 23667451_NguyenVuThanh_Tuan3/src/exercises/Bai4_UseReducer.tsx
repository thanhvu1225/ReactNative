import React, { useReducer } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const initialState = { email: '', password: '', error: '' };

function formReducer(state: any, action: any) {
  switch (action.type) {
    case 'SET_EMAIL': return { ...state, email: action.payload, error: '' };
    case 'SET_PASSWORD': return { ...state, password: action.payload, error: '' };
    case 'SET_ERROR': return { ...state, error: action.payload };
    case 'RESET': return initialState;
    default: return state;
  }
}

export default function Bai4_UseReducer() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleLogin = () => {
    if (!state.email || !state.password) {
      dispatch({ type: 'SET_ERROR', payload: 'Vui lòng nhập đầy đủ thông tin' });
      return;
    }
    dispatch({ type: 'SET_ERROR', payload: '' });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bài 3.1.4: useReducer</Text>
      
      <TextInput
        style={styles.input}
        value={state.email}
        onChangeText={text => dispatch({ type: 'SET_EMAIL', payload: text })}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        value={state.password}
        onChangeText={text => dispatch({ type: 'SET_PASSWORD', payload: text })}
        placeholder="Mật khẩu"
        secureTextEntry
      />

      {state.error ? <Text style={styles.error}>{state.error}</Text> : null}

      <View style={styles.buttonGroup}>
        <Button title="Đăng nhập" onPress={handleLogin} />
        <View style={{ height: 10 }} />
        <Button title="Đặt lại" color="red" onPress={() => dispatch({ type: 'RESET' })} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  error: { color: 'red', marginBottom: 10, textAlign: 'center', fontWeight: 'bold' },
  buttonGroup: { marginTop: 10 }
});