import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { colors, PrimaryButton } from "../components";
import { authService } from "../services";
import { AuthSession } from "../types";

type Props = {
  redirectTo: "home" | "checkout";
  onAuthenticated: (
    session: AuthSession,
    redirectTo: "home" | "checkout",
  ) => Promise<void>;
};

type Mode = "login" | "register";
type FormField = "name" | "email" | "password";
type Errors = Partial<Record<FormField | "form", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function AuthScreen({ redirectTo, onAuthenticated }: Props) {
  const [mode, setMode] = useState<Mode>("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  const validate = (field: FormField, value: string) => {
    if (field === "name" && mode === "register" && !value.trim())
      return "Vui lòng nhập họ tên";
    if (field === "email" && !value.trim()) return "Vui lòng nhập email";
    if (field === "email" && !emailPattern.test(value.trim()))
      return "Email không đúng định dạng";
    if (field === "password" && !value) return "Vui lòng nhập mật khẩu";
    if (field === "password" && value.length < 6)
      return "Mật khẩu phải có ít nhất 6 ký tự";
    return undefined;
  };

  const changeMode = (nextMode: Mode) => {
    setMode(nextMode);
    setErrors({});
  };

  const submit = async () => {
    const nextErrors: Errors = {
      name: mode === "register" ? validate("name", name) : undefined,
      email: validate("email", email),
      password: validate("password", password),
    };

    setErrors(nextErrors);
    if (nextErrors.name || nextErrors.email || nextErrors.password) return;

    setLoading(true);
    try {
      const session =
        mode === "login"
          ? await authService.login(email, password)
          : await authService.register(name, email, password);
      await onAuthenticated(session, redirectTo);
    } catch (error) {
      setErrors((current) => ({
        ...current,
        form:
          error instanceof Error
            ? error.message
            : "Có lỗi xảy ra, vui lòng thử lại",
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.content}
      >
        <Text style={styles.title}>
          {mode === "login" ? "Đăng nhập" : "Đăng ký"}
        </Text>

        <View style={styles.tabs}>
          <Pressable
            style={[styles.tab, mode === "login" && styles.activeTab]}
            onPress={() => changeMode("login")}
          >
            <Text
              style={[styles.tabText, mode === "login" && styles.activeTabText]}
            >
              Đăng nhập
            </Text>
          </Pressable>
          <Pressable
            style={[styles.tab, mode === "register" && styles.activeTab]}
            onPress={() => changeMode("register")}
          >
            <Text
              style={[
                styles.tabText,
                mode === "register" && styles.activeTabText,
              ]}
            >
              Đăng ký
            </Text>
          </Pressable>
        </View>

        {mode === "register" && (
          <Field
            label="Họ và tên"
            value={name}
            placeholder="NguyenVuThanh_23667451"
            error={errors.name}
            onChangeText={(value) => {
              setName(value);
              setErrors((current) => ({
                ...current,
                name: validate("name", value),
                form: undefined,
              }));
            }}
          />
        )}

        <Field
          label="Email"
          value={email}
          placeholder="23667451.thanh@student.iuh.edu.vn"
          error={errors.email}
          onChangeText={(value) => {
            setEmail(value);
            setErrors((current) => ({
              ...current,
              email: validate("email", value),
              form: undefined,
            }));
          }}
          email
        />

        <Field
          label="Mật khẩu"
          value={password}
          placeholder="Tối thiểu 6 ký tự"
          error={errors.password}
          onChangeText={(value) => {
            setPassword(value);
            setErrors((current) => ({
              ...current,
              password: validate("password", value),
              form: undefined,
            }));
          }}
          password
        />

        {errors.form && <Text style={styles.formError}>{errors.form}</Text>}
        <PrimaryButton
          title={mode === "login" ? "Đăng nhập" : "Tạo tài khoản"}
          onPress={submit}
          loading={loading}
        />

        {mode === "login" && (
          <Text style={styles.demoText}>
            Tài khoản thử: 23667451.thanh@student.iuh.edu.vn / 123456
          </Text>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

type FieldProps = {
  label: string;
  value: string;
  placeholder: string;
  error?: string;
  onChangeText: (value: string) => void;
  email?: boolean;
  password?: boolean;
};

function Field({
  label,
  value,
  placeholder,
  error,
  onChangeText,
  email,
  password,
}: FieldProps) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999999"
        keyboardType={email ? "email-address" : "default"}
        autoCapitalize={email ? "none" : "sentences"}
        autoCorrect={!email}
        secureTextEntry={password}
        style={[styles.input, error && styles.inputError]}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
    width: "100%",
    maxWidth: 440,
    alignSelf: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: colors.text,
    fontSize: 26,
    fontWeight: "700",
  },
  subtitle: {
    color: colors.muted,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 6,
    marginBottom: 20,
  },
  tabs: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
    marginBottom: 20,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 11,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  tabText: {
    color: colors.muted,
    fontSize: 14,
    fontWeight: "600",
  },
  activeTabText: {
    color: colors.primary,
  },
  field: {
    marginBottom: 15,
  },
  label: {
    color: colors.text,
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 7,
  },
  input: {
    minHeight: 48,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    color: colors.text,
    fontSize: 15,
    backgroundColor: colors.surface,
  },
  inputError: {
    borderColor: colors.danger,
  },
  errorText: {
    color: colors.danger,
    fontSize: 12,
    marginTop: 5,
  },
  formError: {
    color: colors.danger,
    fontSize: 13,
    marginBottom: 12,
  },
  demoText: {
    color: colors.muted,
    fontSize: 13,
    textAlign: "center",
    marginTop: 14,
  },
});
