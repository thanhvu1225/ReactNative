import AsyncStorage from '@react-native-async-storage/async-storage';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import AuthScreen from './src/screens/AuthScreen';
import BookDetailScreen from './src/screens/BookDetailScreen';
import CheckoutScreen from './src/screens/CheckoutScreen';
import HomeScreen from './src/screens/HomeScreen';
import { colors } from './src/components';
import { authService } from './src/services';
import { AuthSession, Screen } from './src/types';

const STORAGE_KEY = 'auth';

export default function App() {
  const [screen, setScreen] = useState<Screen>({ name: 'home' });
  const [session, setSession] = useState<AuthSession | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const autoLogin = async () => {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (!saved) return;

        const storedSession = JSON.parse(saved) as AuthSession;
        const valid = await authService.validateToken(storedSession.token);

        if (valid) {
          setSession(storedSession);
        } else {
          await AsyncStorage.removeItem(STORAGE_KEY);
        }
      } catch {
        await AsyncStorage.removeItem(STORAGE_KEY);
      } finally {
        setLoading(false);
      }
    };

    autoLogin();
  }, []);

  const finishAuth = async (nextSession: AuthSession, redirectTo: 'home' | 'checkout') => {
    setSession(nextSession);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(nextSession));
    setScreen(redirectTo === 'checkout' ? { name: 'checkout' } : { name: 'home' });
  };

  const logout = async () => {
    setSession(null);
    await AsyncStorage.removeItem(STORAGE_KEY);
    setScreen({ name: 'home' });
  };

  const openCheckout = () => {
    setScreen(session ? { name: 'checkout' } : { name: 'auth', redirectTo: 'checkout' });
  };

  const title = screen.name === 'auth'
    ? 'Tài khoản'
    : screen.name === 'checkout'
      ? 'Thanh toán'
      : 'Chi tiết sách';

  if (loading) {
    return (
      <View style={styles.loading}>
        <StatusBar style="dark" />
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.loadingText}>Đang kiểm tra đăng nhập...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.app}>
      <StatusBar style="dark" />
      {screen.name !== 'home' && (
        <View style={styles.header}>
          <Pressable style={styles.backButton} onPress={() => setScreen({ name: 'home' })}>
          <Text style={styles.backText}>←</Text>
          </Pressable>
          <Text numberOfLines={1} style={styles.headerTitle}>{title}</Text>
          <View style={styles.headerSpace} />
        </View>
      )}

      {screen.name === 'home' && (
        <HomeScreen
          user={session?.user ?? null}
          onLogin={() => setScreen({ name: 'auth', redirectTo: 'home' })}
          onLogout={logout}
          onCheckout={openCheckout}
          onOpenBook={(bookId) => setScreen({ name: 'bookDetail', bookId })}
        />
      )}

      {screen.name === 'auth' && (
        <AuthScreen redirectTo={screen.redirectTo} onAuthenticated={finishAuth} />
      )}

      {screen.name === 'checkout' && session && <CheckoutScreen user={session.user} />}

      {screen.name === 'bookDetail' && (
        <BookDetailScreen
          bookId={screen.bookId}
          user={session?.user ?? null}
          onLogin={() => setScreen({ name: 'auth', redirectTo: 'home' })}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: colors.background,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  loadingText: {
    color: colors.muted,
    fontSize: 14,
    marginTop: 12,
  },
  header: {
    minHeight: 56,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    paddingHorizontal: 12,
  },
  backButton: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backText: {
    color: colors.text,
    fontSize: 24,
    fontWeight: '700',
  },
  headerTitle: {
    flex: 1,
    minWidth: 0,
    color: colors.text,
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
  headerSpace: {
    width: 42,
  },
});
