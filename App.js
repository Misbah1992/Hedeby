import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ContainerStack from "./stacks/ContainerStack";
import SettingScreen from "./screens/appScreens/SettingScreen";
import NoMessageScreen from "./screens/appScreens/NoMessageScreen";
import NoNotificationScreen from "./screens/appScreens/NoNotification";
import NoSearchResult from "./screens/appScreens/NoSearchResult";
import SearchBar from "./Components/SearchBar";
import MessagesScreen from "./screens/appScreens/MessagesScreen";
import LoginScreen from "./screens/authScreens/LoginScreen";
import ForgotPassword from "./screens/authScreens/ForgotPassword";
import OtpVerification from "./screens/authScreens/OtpVerification";
import ResetPassword from "./screens/authScreens/ResetPassword";
import RegisterScreen from "./screens/authScreens/RegisterScreen";
import TransactionScreen from "./screens/appScreens/TransactionScreen";
import WalletScreen from "./screens/appScreens/WalletScreen";
import CreateWalletScreen from "./screens/appScreens/CreateWallet";
import WalletScreen2 from "./screens/appScreens/WalletScreens2";
import TransactionFilled from "./screens/appScreens/TransactionFilled";
import CreateTransaction2 from "./screens/appScreens/CreateTransaction2";
import CreateTransaction3 from "./screens/appScreens/CreateTransaction3";
import TransactionDetail from "./screens/appScreens/TransactionDetail";
import ScanQR from "./screens/appScreens/ScanQR";
import ScannedQR from "./screens/appScreens/ScannedQR";
import ScannedQR2 from "./screens/appScreens/ScannedQR2";
import Drop from "./Components/drop";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="container-stack" component={ContainerStack} />
      </Stack.Navigator>
    </NavigationContainer>
    // <SettingScreen />
    // <NoMessageScreen />
    // <NoNotificationScreen />
    // <NoSearchResult />
    // <MessagesScreen />
    // <LoginScreen />
    // <ForgotPassword />
    // <OtpVerification />
    // <ResetPassword />
    // <RegisterScreen />
    // <TransactionScreen />
    // <CreateWalletScreen />
    // <WalletScreen2 />
    // <TransactionFilled />
    // <CreateTransaction2 />
    // <CreateTransaction3 />
    // <TransactionDetail />
    // <ScanQR />
    // <ScannedQR />
    // <ScannedQR2 />
    // <Drop/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
