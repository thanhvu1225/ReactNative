import React from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
  StyleProp,
  ViewStyle,
  TextStyle
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ButtonProps {
  title?: string;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: keyof typeof Ionicons.glyphMap;
}

/**
 * Exercise 4 - Press-state system
 * Demonstrating pressed, focused, disabled, and loading states.
 */

export const PrimaryButton: React.FC<ButtonProps> = ({
  title, onPress, disabled, loading, style
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.baseButton,
        styles.primaryButton,
        pressed && styles.primaryPressed,
        disabled && styles.disabledButton,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <Text style={[styles.baseText, styles.primaryText]}>{title}</Text>
      )}
    </Pressable>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({
  title, onPress, disabled, loading, style
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.baseButton,
        styles.secondaryButton,
        pressed && styles.secondaryPressed,
        disabled && styles.disabledButton,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color="#007AFF" />
      ) : (
        <Text style={[styles.baseText, styles.secondaryText]}>{title}</Text>
      )}
    </Pressable>
  );
};

export const IconButton: React.FC<ButtonProps> = ({
  icon, onPress, disabled, loading, style
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      hitSlop={10} // Ensure touch target >= 44x44
      style={({ pressed }) => [
        styles.iconButton,
        pressed && styles.iconPressed,
        disabled && styles.disabledIcon,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#007AFF" />
      ) : (
        <Ionicons name={icon} size={24} color={disabled ? "#C7C7CC" : "#007AFF"} />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  baseButton: {
    height: 48, // Minimum target size >= 44
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row',
  },
  baseText: {
    fontSize: 16,
    fontWeight: '600',
  },
  // Primary Styles
  primaryButton: {
    backgroundColor: '#007AFF',
  },
  primaryPressed: {
    backgroundColor: '#0051A8',
    opacity: 0.9,
  },
  primaryText: {
    color: '#FFFFFF',
  },
  // Secondary Styles
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  secondaryPressed: {
    backgroundColor: '#E5F1FF',
  },
  secondaryText: {
    color: '#007AFF',
  },
  // Icon Button Styles
  iconButton: {
    width: 44, // Minimum target size
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
  },
  iconPressed: {
    backgroundColor: '#E5E5EA',
    transform: [{ scale: 0.95 }], // Visual feedback without reducing touch target area
  },
  // Common States
  disabledButton: {
    backgroundColor: '#E5E5EA',
    borderColor: '#C7C7CC',
  },
  disabledIcon: {
    backgroundColor: '#F2F2F7',
    opacity: 0.5,
  },
});