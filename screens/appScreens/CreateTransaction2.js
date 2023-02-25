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
import logo from "../../assets/images/smallLogo.png";
import { AntDesign } from "@expo/vector-icons";
import AddWallet from "../../assets/images/wallet-add.png";
import Vector from "../../assets/images/earthVector.png";
import Transfer from "../../assets/images/send-sqau.png";
import Buy from "../../assets/images/buy-crypto.png";
import Link from "../../assets/images/scan.png";
import { MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import Flower from "../../assets/images/flower.png";

const win = Dimensions.get("window");

function CreateTransaction2({ setScreenToShow }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <Pressable onPress={() => setScreenToShow("createtransaction")}>
          <Image source={logo} style={{ marginLeft: win.width / 25 }} />
        </Pressable>
        <Text style={styles.heading}>Create Transaction</Text>
        <View></View>
      </View>
      <View>
        <Text style={styles.headingText}>Enter transaction detail</Text>
      </View>
      <View style={styles.balanceView}>
        <View style={styles.topCont}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: win.height / 20,
            }}
          >
            <Text style={{ color: "#FFC107", fontSize: win.width / 20 }}>
              Naz wallet 1
            </Text>
            <MaterialIcons
              name="arrow-drop-down"
              size={win.width / 15}
              color="white"
            />
          </View>
          <View style={styles.balanceHeading}>
            <Text style={styles.balanceText}>Balance</Text>
          </View>
          <Text style={styles.balanceCurrent}>$ 0.00</Text>
          <View style={styles.currImg}>
            <Image source={Vector} style={styles.imgSize} />
            <Text style={styles.currText}> 0</Text>
          </View>
        </View>
      </View>
      <View style={styles.balanceView2}>
        <View style={styles.topCont2}>
          <View style={{ justifyContent: "space-evenly" }}>
            <Text style={{ color: "#FBFCFAB2" }}>
              Add recipient’s email or phone for searching user
            </Text>
            <TextInput
              placeholder="Email address or phone number*"
              style={styles.inputField}
              placeholderTextColor="#FBFCFA99"
            />
            <Pressable style={styles.Findbtn}>
              <Text
                style={{
                  color: "#FFFFFF99",
                  fontSize: win.height / 35,
                }}
              >
                Find
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.balanceView3}>
        <View style={styles.topCont3}>
          <View style={styles.wrapinn}>
            <Image source={Flower} />
            <Text
              style={{
                color: "#FFC107",
                fontSize: win.height / 40,
                marginTop: win.height / 50,
              }}
            >
              Naz Israyelyan
            </Text>
          </View>
        </View>
      </View>
      <Pressable
        style={styles.nextbtn}
        onPress={() => setScreenToShow("createtransaction3")}
      >
        <Text style={{ color: "#FFFFFF", fontSize: win.height / 40 }}>
          Next
        </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#001437",
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
  textStyle: {
    borderWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: win.width / 30,
    borderRadius: win.width / 50,
    width: win.width / 2.8,
    justifyContent: "space-between",
    marginTop: win.height / 20,
    marginLeft: win.width / 1.6,
  },
  heading: {
    color: "#fff",
    fontSize: win.width / 18,
    fontWeight: "bold",
  },
  headingText: {
    color: "#FFC107",
    fontSize: win.width / 20,
    textAlign: "center",
    marginTop: win.height / 40,
  },
  balanceView: {
    backgroundColor: "#14254a",
    height: win.height / 4.9,
    marginTop: win.height / 40,
    borderRadius: win.width / 20,
    marginHorizontal: win.width / 20,
  },
  topCont: {
    height: win.height / 6,
    justifyContent: "space-evenly",
    paddingHorizontal: win.width / 20,
  },
  balanceView2: {
    backgroundColor: "#14254a",
    // height: win.height / 3.5,
    marginTop: win.height / 40,
    borderRadius: win.width / 20,
    marginHorizontal: win.width / 20,
  },
  topCont2: {
    marginHorizontal: win.width / 20,
    paddingVertical: win.height / 40,
    paddingHorizontal: win.width / 20,
  },
  balanceView3: {
    backgroundColor: "#14254a",
    height: win.height / 8,
    marginTop: win.height / 50,
    borderRadius: win.width / 20,
    marginHorizontal: win.width / 20,
  },
  topCont3: {
    // height: win.height / 6,
    justifyContent: "space-evenly",
    paddingHorizontal: win.width / 20,
  },
  inputField: {
    backgroundColor: " rgba(251, 252, 250, 0.12)",
    borderWidth: 1,
    color: "white",
    height: win.height / 15,
    borderColor: "#FFC107",
    marginVertical: win.height / 25,
    // marginTop: win.height / 30,
    borderRadius: 8,
    paddingHorizontal: win.width / 40,
  },
  imgSize: {
    height: win.height / 25,
    width: win.width / 25,
  },
  wrapinn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: win.height / 40,
  },
  balanceText: {
    color: "gray",
    fontSize: win.width / 20,
    marginTop: win.height / 20,
  },
  currImg: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: win.height / 28,
  },
  currText: {
    color: "#FFC107",
    fontSize: win.width / 24,
    marginLeft: win.width / 40,
  },
  balanceCurrent: {
    color: "white",
    fontSize: win.width / 22,
    marginTop: win.height / 30,
  },
  nextbtn: {
    backgroundColor: "#FFC107",
    marginHorizontal: win.width / 3,
    height: win.height / 20,
    marginTop: win.height / 70,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  Findbtn: {
    backgroundColor: "#FBFCFA1A",
    marginHorizontal: win.width / 5,
    height: win.height / 20,
    // marginTop: win.height / 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
});
export default CreateTransaction2;
