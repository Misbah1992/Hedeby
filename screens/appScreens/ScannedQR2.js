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
import { AntDesign } from "@expo/vector-icons";
import Flower from "../../assets/images/flower.png";
import logo2 from "../../assets/images/logoMod2.png";

const win = Dimensions.get("window");

function ScannedQR2({ setScreenToShow }) {
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
        <Text style={styles.heading}>Wallets</Text>
        <View style={{ width: win.width / 15 }}></View>
      </View>
      <View style={styles.balanceView}>
        <View style={styles.topCont}>
          <View style={styles.wrapinn}>
            <Image source={logo2} />
            <Text
              style={{
                color: "#FFC107",
                fontWeight: "bold",
                fontSize: win.height / 35,
                marginVertical: win.height / 30,
              }}
            >
              Signature is Authenticated
            </Text>
            <Text
              style={{
                fontSize: win.height / 30,
                marginVertical: win.height / 60,
              }}
            >
              Funds transferred to
            </Text>
            <Image
              source={Flower}
              style={{
                marginVertical: win.height / 50,
              }}
            />
            <Text
              style={{
                fontSize: win.width / 20,
                fontWeight: "bold",
              }}
            >
              Naz Israyelyan
            </Text>
            {/* <View style={styles.wrapinn}>
              <Image source={Flower} />
              <Text
                style={{
                  color: "#FFC107",
                  fontSize: win.height / 40,
                  marginVertical: win.height / 80,
                }}
              >
                Naz Israyelyan
              </Text>
            </View> */}
          </View>
        </View>
      </View>
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
  balanceView: {
    backgroundColor: "white",
    height: win.height / 2,
    marginTop: win.height / 6,
    paddingVertical: win.height / 20,
    borderRadius: win.width / 20,
    marginHorizontal: win.width / 20,
  },
  wrapinn: {
    alignItems: "center",
  },
  topCont: {
    justifyContent: "space-evenly",
    paddingHorizontal: win.width / 20,
  },
});

export default ScannedQR2;
