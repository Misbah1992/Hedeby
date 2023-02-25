import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import IntroStack from "./IntroStack";
import BottomStack from "./BottomStack";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";

export default function ContainerStack({ navigation }) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="intro-stack" component={IntroStack} />
      <Stack.Screen name="bottom-stack" component={BottomStack} />
      <Stack.Screen name="auth-stack" component={AuthStack} />
    </Stack.Navigator>
  );
}
