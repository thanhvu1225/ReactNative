import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AccountScreen from "../screens/AccountScreen";
import BookDetailScreen from "../screens/BookDetailScreen";
import CartScreen from "../screens/CartScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import HomeScreen from "../screens/HomeScreen";
import CustomTabBar from "./CustomTabBar";
import type {
  HomeStackParamList,
  MainTabParamList,
  RootStackParamList,
} from "./types";

const RootStack = createNativeStackNavigator<RootStackParamList>();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

type Props = {
  initialTab?: keyof MainTabParamList;
};

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="BookDetail"
        component={BookDetailScreen}
        options={{ title: "Chi tiết sách" }}
      />
    </HomeStack.Navigator>
  );
}

function MainTabs({ initialTab = "HomeTab" }: Props) {
  return (
    <Tab.Navigator
      initialRouteName={initialTab}
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

export default function BookStoreNavigator({ initialTab = "HomeTab" }: Props) {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="MainTabs"
          options={{ headerShown: false }}
        >
          {() => <MainTabs initialTab={initialTab} />}
        </RootStack.Screen>
        <RootStack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{ title: "Thanh toán" }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
