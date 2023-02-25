import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionScreen from "../screens/appScreens/TransactionScreen";
const Stack = createNativeStackNavigator();
import HomeScreen from "../screens/appScreens/HomeScreen";
import WalletScreen from "../screens/appScreens/WalletScreen";
import CreateWallet from "../screens/appScreens/CreateWallet";

const win = Dimensions.get("window");

function HomeStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="homescreen" component={HomeScreen} />
      <Stack.Screen name="transactionscreen" component={TransactionScreen} />
      <Stack.Screen name="walletscreen" component={WalletScreen} />
      <Stack.Screen name="createwallet" component={CreateWallet} />
    </Stack.Navigator>
  );
}

export default HomeStack;
