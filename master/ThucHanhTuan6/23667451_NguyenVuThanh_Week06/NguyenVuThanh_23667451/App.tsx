import React from "react";
import { Provider } from "react-redux";

import BookStoreNavigator from "./src/navigation/BookStoreNavigator";
import AccountScreen from "./src/screens/AccountScreen";
import { CartContent } from "./src/screens/CartScreen";
import { store } from "./src/store/store";

function AppContent() {
  return <BookStoreNavigator />;
  // return <BookStoreNavigator initialTab="Cart" />;
  // return <CartContent />;
  // return <AccountScreen />;
}

export default function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}
