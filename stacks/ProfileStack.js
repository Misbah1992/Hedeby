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

const Stack = createNativeStackNavigator();
import ProfileScreen from "../screens/appScreens/ProfileScreen";
import SettingScreen from "../screens/appScreens/SettingScreen";

const win = Dimensions.get("window");

function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="profilescreen" component={ProfileScreen} />
      <Stack.Screen name="settingscreen" component={SettingScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
