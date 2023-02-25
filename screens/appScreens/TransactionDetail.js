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
  TextInput,
} from "react-native";
import logo from "../../assets/images/smallLogo.png";
import Flower from "../../assets/images/flower.png";
import { AntDesign } from "@expo/vector-icons";

const win = Dimensions.get("window");

function TransactionsDetail({ setScreenToShow }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <Pressable onPress={() => setScreenToShow("transactionscreen")}>
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
      <View style={styles.balanceView}>
        <View style={styles.topCont}>
          <View>
            <View style={styles.wrapinn}>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: win.height / 40,
                  marginVertical: win.height / 80,
                }}
              >
                Best bicycle for me
              </Text>
            </View>
            <View
              style={{
                paddingVertical: win.height / 40,
              }}
            >
              <Text
                style={{ color: "#FFFFFF66", marginVertical: win.height / 50 }}
              >
                Price: <Text style={{ color: "#FFC107" }}> 3.4576 </Text>
                <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                  Ether
                </Text>
              </Text>
              <Text
                style={{ color: "#FFFFFF66", marginVertical: win.height / 50 }}
              >
                Estimated Gas: <Text style={{ color: "#FFC107" }}>1234</Text>
              </Text>
              <Text
                style={{
                  color: "#FFFFFF66",
                  marginVertical: win.height / 50,
                  width: win.width / 1.6,
                }}
              >
                Deposit{" "}
                <Text style={{ color: "#FFFFFF" }}>
                  (This amount will be returned once you scan the transaction
                  signature):
                </Text>
                <Text style={{ color: "#FFC107" }}> 25% </Text>
                <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                  of Price
                </Text>
              </Text>
              <Text
                style={{
                  color: "#FFFFFF66",
                  marginVertical: win.height / 50,
                  width: win.width / 2,
                }}
              >
                Transaction Fee: <Text style={{ color: "#FFC107" }}>10% </Text>
                <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                  of deposit
                </Text>
              </Text>
              <Text
                style={{
                  color: "#FFFFFF66",
                  textAlign: "center",
                }}
              >
                19.07.2022 11:04
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#001437",
    width: win.width,
    flex: 1,
  },
  arrow: {
    marginLeft: win.width / 40,
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
    height: win.height / 1.9,
    marginVertical: win.height / 10,
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
export default TransactionsDetail;
