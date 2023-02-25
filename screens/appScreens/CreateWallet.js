import React, { useState } from "react";
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
import { TextInput } from "react-native";

const win = Dimensions.get("window");

function CreateWallet({ setScreenToShow }) {
  const [inpValue, setInpValue] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <Pressable onPress={() => setScreenToShow("walletscreen")}>
          <Image source={logo} style={{ marginLeft: win.width / 25 }} />
        </Pressable>
        <Text style={styles.heading}>Wallet</Text>
      </View>
      <View style={styles.WrapContainer}>
        <Text style={styles.headText}>Create Wallet</Text>
        <View>
          <TextInput
            placeholder="Wallet Name"
            style={styles.inputWrap}
            value={inpValue}
            onChange={setInpValue}
          />
        </View>
        <View style={styles.buttons}>
          <Pressable onPress={() => setScreenToShow("walletscreen")}>
            <Text style={styles.cancelBtn}>Cancel</Text>
          </Pressable>
          <View style={styles.divider}></View>
          <Pressable onPress={() => setScreenToShow("walletscreen2")}>
            <Text style={inpValue === "" ? styles.btnCreat : styles.btnCreat2}>
              Create
            </Text>
          </Pressable>
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
    // alignItems:""
  },
  wrap: {
    flexDirection: "row",
    marginTop: win.height / 40,
    height: win.height / 10,
    alignItems: "center",

    borderBottomWidth: 1,
    borderColor: "#FBFCFA40",
  },
  heading: {
    color: "#fff",
    fontSize: win.width / 18,
    fontWeight: "bold",
    marginLeft: win.width / 3,
  },
  WrapContainer: {
    backgroundColor: "white",
    // height: win.height / 2.6,
    // alignItems: "center",
    // justifyContent: "space-evenly",
    width: win.width / 1.2,
    marginLeft: win.width / 12,
    marginTop: win.height / 5,
    borderRadius: 25,
  },
  headText: {
    fontSize: win.width / 20,
    textAlign: "center",
    color: "#7898FB",
    marginTop: win.height / 30,
  },
  inputWrap: {
    marginTop: win.height / 20,
    borderWidth: 1,
    borderColor: "#7898FB",
    // width: win.width / 1.4,
    marginHorizontal: win.width / 20,
    paddingVertical: win.height / 80,
    paddingHorizontal: win.height / 60,
    borderRadius: 15,
  },
  buttons: {
    flexDirection: "row",
    marginTop: win.height / 15,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    justifyContent: "space-evenly",
    paddingVertical: win.height / 60,
  },
  btnCreat: {
    borderColor: "#00000026",

    color: "#7898FB6B",
    fontSize: win.width / 28,
  },
  btnCreat2: {
    borderColor: "#00000026",

    color: "#7898FB",
    fontSize: win.width / 28,
  },
  cancelBtn: {
    fontSize: win.width / 28,
    color: "gray",
  },
  divider: {
    width: 1,
    height: "100%",
    backgroundColor: "lightgray",
  },
});
export default CreateWallet;
