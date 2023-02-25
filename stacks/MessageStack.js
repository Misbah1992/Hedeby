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
import MessageScreen from "./../screens/appScreens/MessageScreen";
import NoMessageScreen from "./../screens/appScreens/NoMessageScreen";

const win = Dimensions.get("window");

function MessageStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="messagecreen" component={MessageScreen} /> */}
      {/*        <Stack.Screen name="nomessagecreen" component={NoMessageScreen} /> */}
      <Stack.Screen name="messagecreen" component={MessageScreen} />
    </Stack.Navigator>
  );
}

export default MessageStack;
