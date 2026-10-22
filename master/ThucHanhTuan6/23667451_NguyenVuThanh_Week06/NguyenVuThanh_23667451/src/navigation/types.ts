import type { NavigatorScreenParams } from "@react-navigation/native";

export type HomeStackParamList = {
  Home: undefined;
  BookDetail: { bookId: string };
};

export type MainTabParamList = {
  HomeTab: undefined;
  Categories: undefined;
  Cart: undefined;
  Account: undefined;
};

export type RootStackParamList = {
  MainTabs: NavigatorScreenParams<MainTabParamList> | undefined;
  Checkout: { total: number };
};
