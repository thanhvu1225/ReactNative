import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useMemo,
  useCallback,
  createContext,
} from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Alert,
} from "react-native";

const ThemeContext = createContext<any>(null);

const todoReducer = (state: any, action: any) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now().toString(), title: action.payload, completed: false },
      ];
    case "TOGGLE_TODO":
      return state.map((todo: any) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    case "DELETE_TODO":
      return state.filter((todo: any) => todo.id !== action.payload);
    default:
      return state;
  }
};

function TodoAppContent() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [taskInput, setTaskInput] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    console.log(`[Hệ thống] Danh sách hiện có ${todos.length} công việc`);
  }, [todos.length]);

  const filteredTodos = useMemo(() => {
    return todos.filter((todo: any) =>
      todo.title.toLowerCase().includes(searchKeyword.toLowerCase()),
    );
  }, [todos, searchKeyword]);

  const incompleteCount = useMemo(() => {
    return todos.filter((todo: any) => !todo.completed).length;
  }, [todos]);

  const handleAdd = useCallback(() => {
    if (taskInput.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: taskInput });
    setTaskInput("");
  }, [taskInput]);

  const handleToggle = useCallback((id: string) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  }, []);

  const handleDelete = useCallback((id: string) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  }, []);

  const themeStyles = isDarkMode ? styles.darkTheme : styles.lightTheme;
  const textStyles = isDarkMode ? styles.darkText : styles.lightText;

  return (
    <View style={[styles.appContainer, themeStyles]}>
      <View style={styles.headerRow}>
        <Text style={[styles.title, textStyles]}>Quản lý công việc</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>

      <Text style={textStyles}>
        Chưa hoàn thành: {incompleteCount} công việc
      </Text>

      <TextInput
        style={[
          styles.input,
          textStyles,
          { borderColor: isDarkMode ? "#555" : "#ccc" },
        ]}
        placeholder="Tìm kiếm công việc..."
        placeholderTextColor={isDarkMode ? "#aaa" : "#666"}
        value={searchKeyword}
        onChangeText={setSearchKeyword}
      />

      <View style={styles.addRow}>
        <TextInput
          style={[
            styles.input,
            styles.flex1,
            textStyles,
            { borderColor: isDarkMode ? "#555" : "#ccc", marginBottom: 0 },
          ]}
          placeholder="Thêm công việc mới..."
          placeholderTextColor={isDarkMode ? "#aaa" : "#666"}
          value={taskInput}
          onChangeText={setTaskInput}
        />
        <Button title="Thêm" onPress={handleAdd} />
      </View>

      <FlatList
        data={filteredTodos}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 20 }}
        renderItem={({ item }) => (
          <View
            style={[
              styles.todoItem,
              { backgroundColor: isDarkMode ? "#333" : "#f9f9f9" },
            ]}
          >
            <TouchableOpacity
              onPress={() => handleToggle(item.id)}
              style={styles.flex1}
            >
              <Text
                style={[textStyles, item.completed && styles.completedText]}
              >
                {item.title}
              </Text>
            </TouchableOpacity>
            <Button
              title="Xóa"
              color="red"
              onPress={() => handleDelete(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
}

export default function Bai6_TodoApp() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <TodoAppContent />
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  appContainer: { flex: 1, padding: 20 },
  lightTheme: { backgroundColor: "#fff" },
  darkTheme: { backgroundColor: "#222" },
  lightText: { color: "#000" },
  darkText: { color: "#fff" },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  title: { fontSize: 24, fontWeight: "bold" },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
    marginBottom: 10,
  },
  addRow: { flexDirection: "row", gap: 10, alignItems: "center" },
  flex1: { flex: 1 },
  todoItem: {
    flexDirection: "row",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: "center",
  },
  completedText: { textDecorationLine: "line-through", color: "gray" },
});
