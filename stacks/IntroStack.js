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
import IntroOne from "./../screens/introScreens/IntroOne";
import IntroTwo from "./../screens/introScreens/IntroTwo";

import IntroThree from "./../screens/introScreens/IntroThree";

const win = Dimensions.get("window");

function IntroStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="intro-one" component={IntroOne} />
      <Stack.Screen name="intro-two" component={IntroTwo} />
      <Stack.Screen name="intro-three" component={IntroThree} />
    </Stack.Navigator>
  );
}

export default IntroStack;
