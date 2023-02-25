import React from "react";
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
import qr from "../../assets/images/qr.png";
import { AntDesign } from "@expo/vector-icons";

const win = Dimensions.get("window");

function ScanQR({ setScreenToShow }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <Pressable onPress={() => setScreenToShow("homescreen")}>
          <AntDesign
            name="left"
            size={win.width / 20}
            color="white"
            style={styles.arrow}
          />
        </Pressable>
        <Text style={styles.heading}>Transactions</Text>
        <View style={{ width: win.width / 15 }}></View>
      </View>
      <View style={styles.imgWrap}>
        <Image source={qr} />
      </View>
      <Pressable
        style={styles.textWrap}
        onPress={() => setScreenToShow("scannedqr")}
      >
        <Text style={{ color: "#5CE5D5", fontSize: win.height / 35 }}>
          Scan Transaction
        </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#001437",
    // height: win.height,
    width: win.width,
    flex: 1,
  },
  wrap: {
    flexDirection: "row",
    marginTop: win.height / 40,
    height: win.height / 10,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#FBFCFA40",
    justifyContent: "space-between",
  },
  arrow: {
    marginLeft: win.width / 40,
  },
  heading: {
    color: "#fff",
    fontSize: win.width / 18,
    fontWeight: "bold",
    //  marginLeft: win.width / 3,
  },
  imgWrap: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: win.height / 10,
  },
  textWrap: {
    borderWidth: 1,
    borderColor: "#5CE5D5",
    marginHorizontal: win.width / 6,
    paddingVertical: win.height / 50,
    borderRadius: 10,
    alignItems: "center",
  },
});
export default ScanQR;
