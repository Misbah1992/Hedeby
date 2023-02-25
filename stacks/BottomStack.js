import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Tab = createBottomTabNavigator();
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { useEffect, useState } from "react";
import HomeScreen from "../screens/appScreens/HomeScreen";
import NoNotification from "../screens/appScreens/NoNotification";
import NoMessageScreen from "../screens/appScreens/NoMessageScreen";
import MessageScreen from "../screens/appScreens/MessageScreen";
import NotificationStack from "./NotificationStack";
import MessageStack from "./MessageStack";
import ProfileScreen from "../screens/appScreens/ProfileScreen";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable } from "react-native";
import TransactionScreen from "../screens/appScreens/TransactionScreen";
import SettingScreen from "../screens/appScreens/SettingScreen";
import WalletScreen from "../screens/appScreens/WalletScreen";
import CreateWallet from "../screens/appScreens/CreateWallet";
import TransactionFilled from "../screens/appScreens/TransactionFilled";
import EditInformation from "../screens/appScreens/EditInformation";
import TransactionDetail from "../screens/appScreens/TransactionDetail";
import CreateTransaction from "../screens/appScreens/CreateTransaction";
import CreateTransaction2 from "../screens/appScreens/CreateTransaction2";
import CreateTransaction3 from "../screens/appScreens/CreateTransaction3";
import ScanQR from "../screens/appScreens/ScanQR";
import ScannnedQR from "../screens/appScreens/ScannedQR";
import ScannnedQR2 from "../screens/appScreens/ScannedQR2";
import WalletScreen2 from "../screens/appScreens/WalletScreens2";
import MessagesScreen from "../screens/appScreens/MessagesScreen";

const win = Dimensions.get("window");

function BottomStack({ navigation }) {
  const themeColor = "blue";
  const [screenToShow, setScreenToShow] = useState("homescreen");
  const [transactionReq, setTransactionReq] = useState(false);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  return (
    <>
      <View style={{ backgroundColor: "#001437", height: win.height }}>
        {screenToShow === "walletscreen" && (
          <WalletScreen setScreenToShow={setScreenToShow} />
        )}
        {screenToShow === "walletscreen2" && (
          <WalletScreen2 setScreenToShow={setScreenToShow} />
        )}
        {screenToShow === "createwallet" && (
          <CreateWallet setScreenToShow={setScreenToShow} />
        )}
        {screenToShow === "homescreen" && (
          <HomeScreen
            setScreenToShow={setScreenToShow}
            transactionReq={transactionReq}
            setTransactionReq={setTransactionReq}
            setPaymentSuccessful={setPaymentSuccessful}
          />
        )}
        {screenToShow === "nonotification" && <NoNotification />}
        {screenToShow === "nomessagescreen" && <NoMessageScreen />}
        {screenToShow === "profilescreen" && (
          <ProfileScreen setScreenToShow={setScreenToShow} />
        )}
        {screenToShow === "transactionscreen" && (
          <TransactionScreen setScreenToShow={setScreenToShow} />
        )}
        {screenToShow === "transactionfilledscreen" && (
          <TransactionFilled setScreenToShow={setScreenToShow} />
        )}
        {screenToShow === "settingscreen" && (
          <SettingScreen setScreenToShow={setScreenToShow} />
        )}
        {screenToShow === "editinformation" && (
          <EditInformation setScreenToShow={setScreenToShow} />
        )}
        {screenToShow === "messagescreen" && (
          <MessageScreen setScreenToShow={setScreenToShow} />
        )}

        {screenToShow === "transactiondetail" && (
          <TransactionDetail setScreenToShow={setScreenToShow} />
        )}
        {screenToShow === "createtransaction" && (
          <CreateTransaction setScreenToShow={setScreenToShow} />
        )}
        {screenToShow === "createtransaction2" && (
          <CreateTransaction2 setScreenToShow={setScreenToShow} />
        )}
        {screenToShow === "messages-screen" && (
          <MessagesScreen setScreenToShow={setScreenToShow} />
        )}
        {screenToShow === "createtransaction3" && (
          <CreateTransaction3
            setScreenToShow={setScreenToShow}
            transactionReq={transactionReq}
            paymentSuccessful={paymentSuccessful}
            setTransactionReq={setTransactionReq}
            setPaymentSuccessful={setPaymentSuccessful}
          />
        )}
        {screenToShow === "scanqr" && (
          <ScanQR setScreenToShow={setScreenToShow} />
        )}
        {screenToShow === "scannedqr" && (
          <ScannnedQR setScreenToShow={setScreenToShow} />
        )}
        {screenToShow === "scannedqr2" && (
          <ScannnedQR2 setScreenToShow={setScreenToShow} />
        )}
      </View>

      {screenToShow !== "settingscreen" &&
        screenToShow !== "walletscreen" &&
        screenToShow !== "walletscreen2" &&
        screenToShow !== "transactionscreen" &&
        screenToShow !== "transactionfilledscreen" &&
        screenToShow !== "createwallet" &&
        screenToShow !== "editinformation" &&
        screenToShow !== "scanqr" &&
        screenToShow !== "scannedqr" &&
        screenToShow !== "scannedqr2" &&
        screenToShow !== "messages-screen" &&
        screenToShow !== "createtransaction" &&
        screenToShow !== "createtransaction2" &&
        screenToShow !== "createtransaction3" && (
          <View
            style={{
              width: win.width,
              height: win.width / 5.5,
              position: "absolute",
              bottom: 0,
            }}
          >
            <LinearGradient
              colors={[
                "rgba(14, 46, 64, 1)",
                "rgba(14, 46, 64, 1)",
                "rgba(0, 20, 55, 1)",
              ]}
              style={styles.background}
            >
              <View style={styles.bottomWrap}>
                <Pressable onPress={() => setScreenToShow("homescreen")}>
                  <Ionicons
                    name="ios-bar-chart-outline"
                    size={win.width / 16}
                    color="#5CE5D5"
                  />
                </Pressable>
                <Pressable onPress={() => setScreenToShow("nonotification")}>
                  <Ionicons
                    name="notifications"
                    size={win.width / 16}
                    color="#5CE5D5"
                  />
                </Pressable>
                {screenToShow === "messages-screen" && (
                  <MessagesScreen setScreenToShow={setScreenToShow} />
                )}
                {/* <Pressable onPress={() => setScreenToShow("nomessagescreen")}> */}
                <Pressable onPress={() => setScreenToShow("messagescreen")}>
                  <FontAwesome
                    name="send-o"
                    size={win.width / 16}
                    color="#5CE5D5"
                  />
                </Pressable>
                <Pressable onPress={() => setScreenToShow("profilescreen")}>
                  <FontAwesome
                    name="user-o"
                    size={win.width / 16}
                    color="#5CE5D5"
                  />
                </Pressable>
              </View>
            </LinearGradient>
          </View>
        )}
    </>
    // <Tab.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //     tabBarStyle: { backgroundColor: "#181818" },
    //   }}
    // >
    //   <Tab.Screen
    //     options={{
    //       headerStyle: {
    //         backgroundColor: "#FFF",
    //       },

    //       tabBarIcon: ({ focused, color, size }) => (
    //         <Ionicons
    //           name="ios-bar-chart-outline"
    //           size={win.width / 17}
    //           color={focused ? "#5CE5D5" : "#FFF"}
    //         />
    //       ),
    //       tabBarLabel: ({ focused, color, size }) => (
    //         <Text
    //           style={{
    //             color: focused ? "#5CE5D5" : color,
    //             fontSize: win.width / 42,
    //             paddingBottom: win.height / 200,
    //           }}
    //         >
    //           Home
    //         </Text>
    //       ),
    //     }}
    //     name="homestack"
    //     component={HomeStack}
    //   />
    //   <Tab.Screen
    //     options={{
    //       headerStyle: {
    //         backgroundColor: "#FFF",
    //       },

    //       tabBarIcon: ({ focused, color, size }) => (
    //         <Ionicons
    //           name="notifications"
    //           size={win.width / 17}
    //           color={focused ? "#5CE5D5" : "#FFF"}
    //         />
    //       ),
    //       tabBarLabel: ({ focused, color, size }) => (
    //         <Text
    //           style={{
    //             color: focused ? "#5CE5D5" : color,
    //             fontSize: win.width / 42,
    //             paddingBottom: win.height / 200,
    //           }}
    //         >
    //           Notification
    //         </Text>
    //       ),
    //     }}
    //     name="notificationstack"
    //     component={NotificationStack}
    //   />

    //   <Tab.Screen
    //     options={{
    //       headerStyle: {
    //         backgroundColor: "#FFF",
    //       },

    //       tabBarIcon: ({ focused, color, size }) => (
    //         <FontAwesome
    //           name="send-o"
    //           size={win.width / 17}
    //           color={focused ? "#5CE5D5" : "#FFF"}
    //         />
    //       ),
    //       tabBarLabel: ({ focused, color, size }) => (
    //         <Text
    //           style={{
    //             color: focused ? "#5CE5D5" : color,
    //             fontSize: win.width / 42,
    //             paddingBottom: win.height / 200,
    //           }}
    //         >
    //           Message
    //         </Text>
    //       ),
    //     }}
    //     name="messagestack"
    //     component={MessageStack}
    //   />
    //   <Tab.Screen
    //     options={{
    //       headerStyle: {
    //         backgroundColor: "#FFF",
    //       },

    //       tabBarIcon: ({ focused, color, size }) => (
    //         <FontAwesome
    //           name="user-o"
    //           size={win.width / 17}
    //           color={focused ? "#5CE5D5" : "#FFF"}
    //         />
    //       ),
    //       tabBarLabel: ({ focused, color, size }) => (
    //         <Text
    //           style={{
    //             color: focused ? "#5CE5D5" : color,
    //             fontSize: win.width / 42,
    //             paddingBottom: win.height / 200,
    //           }}
    //         >
    //           Profile
    //         </Text>
    //       ),
    //     }}
    //     name="profilestack"
    //     component={ProfileStack}
    //   />
    // </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  bottomWrap: {
    width: win.width,
    height: win.width / 5.5,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});

export default BottomStack;
