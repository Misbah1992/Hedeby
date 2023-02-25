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
import LoginScreen from "../screens/authScreens/LoginScreen";
import RegisterScreen from "../screens/authScreens/RegisterScreen";
import ForgotPassword from "../screens/authScreens/ForgotPassword";
import OtpVerification from "../screens/authScreens/OtpVerification";
import ResetPassword from "../screens/authScreens/ResetPassword";

const Stack = createNativeStackNavigator();
const win = Dimensions.get("window");

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="loginscreen" component={LoginScreen} />
      <Stack.Screen name="registerscreen" component={RegisterScreen} />
      <Stack.Screen name="forgotpassword" component={ForgotPassword} />
      <Stack.Screen name="otpverification" component={OtpVerification} />
      <Stack.Screen name="resetpassword" component={ResetPassword} />
    </Stack.Navigator>
  );
}

export default AuthStack;
