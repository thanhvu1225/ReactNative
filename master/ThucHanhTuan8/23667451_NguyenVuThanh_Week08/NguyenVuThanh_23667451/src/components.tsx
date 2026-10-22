import { ActivityIndicator, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native';

export const colors = {
  primary: '#182035',
  background: '#F5F5F5',
  surface: '#FFFFFF',
  text: '#182035',
  muted: '#666666',
  border: '#DDDDDD',
  danger: '#D32F2F',
  star: '#F4A900',
};

type ButtonProps = {
  title: string;
  onPress: () => void;
  loading?: boolean;
};

export function PrimaryButton({ title, onPress, loading = false }: ButtonProps) {
  return (
    <Pressable
      disabled={loading}
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed, loading && styles.buttonDisabled]}
    >
      {loading ? <ActivityIndicator color="#FFFFFF" /> : <Text style={styles.buttonText}>{title}</Text>}
    </Pressable>
  );
}

type RatingStarsProps = {
  value: number;
  size?: number;
  onChange?: (value: number) => void;
};

export function RatingStars({ value, size = 20, onChange }: RatingStarsProps) {
  return (
    <View style={styles.stars}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Pressable key={star} disabled={!onChange} hitSlop={6} onPress={() => onChange?.(star)}>
          <Text style={{ color: star <= Math.round(value) ? colors.star : '#CCCCCC', fontSize: size }}>
            ★
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

type BookCoverProps = {
  color: string;
  title: string;
  style?: StyleProp<ViewStyle>;
};

export function BookCover({ color, title, style }: BookCoverProps) {
  return (
    <View style={[styles.cover, { backgroundColor: color }, style]}>
      <Text style={styles.coverLabel}>BOOK</Text>
      <Text numberOfLines={3} style={styles.coverTitle}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
    borderRadius: 8,
    backgroundColor: colors.primary,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  stars: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  cover: {
    width: '100%',
    height: 180,
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 6,
  },
  coverLabel: {
    color: 'rgba(255, 255, 255, 0.75)',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1,
  },
  coverTitle: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '800',
    textAlign: 'center',
  },
});
