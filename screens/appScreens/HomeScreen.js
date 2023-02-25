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
const win = Dimensions.get("window");
import HedebyLogo from "./../../assets/images/HedebyLogo.png";
import boxAdd from "./../../assets/images/box-add.png";
import sendSquare from "./../../assets/images/send-sqaure-2.png";
import transactionImg from "./../../assets/images/transactionImg.png";
import walletImg from "./../../assets/images/walletImg.png";
import { MaterialIcons } from "@expo/vector-icons";
import VectorEth from "./../../assets/images/VectorEth.png";
import ScanQR from "./ScanQR";
import Flower from "../../assets/images/flower.png";
import logoMod from "./../../assets/images/logoMod.png";
import { Directions } from "react-native-gesture-handler";

function HomeScreen({
  navigation,
  setScreenToShow,
  transactionReq,
  setTransactionReq,
}) {
  console.log(transactionReq);
  const [showWallet, setShowWallet] = useState("Wallet HB 2");
  const [transactionSuccess, setTransactionSuccess] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  // const [isModalVisible, setModalVisible] = useState(false);
  // const [isModalVisible2, setModalVisible2] = useState(false);
  // const [transactionReq, setTransactionReq] = useState(false);
  // const [transactionSuccess, setTransactionSuccess] = useState(false);

  // const toggleModal = () => {
  //   setModalVisible2(!isModalVisible2);
  // };

  const handleModal = () => {
    setTransactionReq(false);
    setTransactionSuccess(false);
  };
  return (
    <View style={styles.container}>
      {transactionReq && (
        <View style={styles.modalStyle}>
          <View style={styles.modalStyleInner}>
            <View></View>
            <Pressable onPress={() => setTransactionReq(false)}>
              <MaterialIcons
                name="cancel"
                size={win.width / 16}
                color="black"
              />
            </Pressable>
          </View>
          <Image
            source={logoMod}
            style={{ marginHorizontal: win.width / 3.2 }}
          />
          <Text style={styles.modalText}>
            You have a transaction request from
          </Text>
          <Image source={Flower} style={styles.flowerImage} />
          <Text style={styles.modalText3}>Naz Israyelyan</Text>
          <Text style={styles.modalText2}>3.4756 Eth</Text>
          <View style={styles.buttons}>
            <Pressable>
              <Text style={styles.cancelBtn}>Reject</Text>
            </Pressable>
            <View style={styles.divider}></View>
            <Pressable onPress={() => setTransactionSuccess(true)}>
              <Text style={styles.btnCreat}>Accept</Text>
            </Pressable>
          </View>
        </View>
      )}
      {transactionSuccess && (
        <View style={styles.modalStyle2}>
          <View style={styles.modalStyleInner2}>
            <View></View>
            <Pressable onPress={() => handleModal()}>
              <MaterialIcons
                name="cancel"
                size={win.width / 16}
                color="black"
              />
            </Pressable>
          </View>
          <Image
            source={logoMod}
            style={{ marginHorizontal: win.width / 3.2 }}
          />
          <Text style={styles.modalText3}>The recipient approved</Text>
          <Text style={styles.modalText2}>Start secure send?</Text>
          <Image source={Flower} style={styles.flowerImage} />
          <Text style={styles.modalText}>Naz Israyelyan</Text>
          <View style={styles.txtfield}>
            <Text style={{ color: "#00000066" }}>
              Price:{" "}
              <Text style={{ color: "#FFC107", fontWeight: "bold" }}>
                3.4576{" "}
              </Text>
              <Text style={{ color: "#000000", fontWeight: "bold" }}>
                Ether
              </Text>{" "}
            </Text>
            <Text style={{ color: "#00000066", marginTop: win.height / 40 }}>
              Estimated Gas:{" "}
              <Text style={{ color: "#FFC107", fontWeight: "bold" }}>
                1234{" "}
              </Text>
            </Text>
            <Text style={{ color: "#00000066", marginTop: win.height / 40 }}>
              Deposit{" "}
              <Text style={{ color: "#000000" }}>
                (This amount will be returned once you scan the transaction
                signature):{" "}
              </Text>
              <Text style={{ color: "#FFC107", fontWeight: "bold" }}>25% </Text>
              <Text style={{ color: "#000000", fontWeight: "bold" }}>
                of Price
              </Text>{" "}
            </Text>
            <Text style={{ color: "#00000066", marginTop: win.height / 40 }}>
              Transaction Fee:{" "}
              <Text style={{ color: "#FFC107", fontWeight: "bold" }}>10% </Text>
              <Text style={{ color: "#000000", fontWeight: "bold" }}>
                of deposit
              </Text>{" "}
            </Text>
          </View>
          <View style={styles.buttons}>
            <Pressable onPress={() => setModalVisible(!isModalVisible)}>
              <Text style={styles.cancelBtn}>Cancel</Text>
            </Pressable>
            <View style={styles.divider}></View>
            <Pressable>
              <Text style={styles.btnCreat}>Start</Text>
            </Pressable>
          </View>
        </View>
      )}

      <Image source={HedebyLogo} style={styles.logoImg} />
      <View style={styles.balanceView}>
        <View style={styles.topCont}>
          <View style={styles.balanceHeading}>
            <Text style={styles.balanceText}>Balance</Text>

            <Pressable style={styles.walletDropDowm}>
              <Pressable style={styles.textStyle}>
                <Pressable
                  style={styles.dropDown}
                  onPress={() => setShowDropDown(!showDropDown)}
                >
                  <Text style={styles.dropText}>Wallet HB 2</Text>
                  <MaterialIcons
                    name="arrow-drop-down"
                    size={win.width / 15}
                    color="white"
                  />
                </Pressable>
              </Pressable>

              {showDropDown && (
                <Pressable style={styles.optionsSection}>
                  <Pressable style={styles.options1}>
                    <Text style={styles.optionsText}>Wallet HB 2</Text>
                    <View></View>
                  </Pressable>
                  <Pressable style={styles.options}>
                    <Text style={styles.optionsText}>Naz Wallet last</Text>
                    <View></View>
                  </Pressable>
                  <Pressable style={styles.options}>
                    <Text style={styles.optionsText}>Green w.22</Text>
                    <View></View>
                  </Pressable>
                </Pressable>
              )}
            </Pressable>
          </View>
          <Text style={styles.balanceCurrent}>$ 12.400.00</Text>
          <View style={styles.currImg}>
            <Image source={VectorEth} />
            <Text style={styles.currText}>11.5</Text>
          </View>
        </View>
      </View>
      <View style={styles.viewWrap}>
        <Pressable
          style={styles.walletView}
          onPress={() => setScreenToShow("walletscreen")}
        >
          <Image source={walletImg} />
          <Text style={styles.walletText}>Wallets</Text>
        </Pressable>
        <Pressable
          style={styles.walletView}
          onPress={() => setScreenToShow("transactionscreen")}
        >
          <Image source={transactionImg} />
          <Text style={styles.walletText}>Transactions</Text>
        </Pressable>
      </View>
      {/* <Pressable onPress={() => navigation.navigate("transactionscreen")}> */}
      <Pressable
        style={styles.createWrap1}
        onPress={() => setScreenToShow("createtransaction")}
      >
        <Image source={boxAdd} />
        <Text style={styles.createText}>Create transaction</Text>
        <View></View>
      </Pressable>
      {/* </Pressable> */}
      <Pressable
        style={styles.createWrap2}
        onPress={() => setScreenToShow("scanqr")}
      >
        <Image source={sendSquare} />
        <Text style={styles.createText}>Scan handshake</Text>
        <View></View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#001437",
    height: win.height,
    width: win.width,
    paddingHorizontal: win.width / 30,
  },
  logoImg: {
    // width: win.width / 30,
    // borderWidth: 1,
    marginTop: win.height / 16,
  },
  balanceView: {
    backgroundColor: "#14254a",
    height: win.height / 6,
    marginTop: win.height / 24,
    borderRadius: win.width / 20,
  },
  viewWrap: {
    flexDirection: "row",

    justifyContent: "space-between",
    marginTop: win.height / 24,
  },
  walletDropDowm: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
  },
  dropDown: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: win.width / 2.8,
    paddingHorizontal: win.width / 30,
    alignItems: "center",
    position: "relative",
  },
  optionsSection: {
    display: "flex",
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: win.width / 50,
    position: "relative",
    top: win.height / 90,
    height: win.height / 8.0,
  },
  options1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: win.width / 2.8,
    paddingHorizontal: win.width / 30,
    paddingBottom: win.height / 100,
    backgroundColor: "#7898FB",
    borderRadius: win.width / 70,
    paddingRight: win.height / 30,
  },
  options: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: win.width / 2.8,
    paddingHorizontal: win.width / 30,
    paddingBottom: win.height / 50,
    // backgroundColor: "#7898FB",
  },
  optionsText: {
    color: "white",
    // backgroundColor: "#7898FB",
  },
  walletView: {
    height: win.height / 6,
    width: win.width / 2.3,
    backgroundColor: "#0E2e40",
    borderRadius: win.width / 20,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  walletText: {
    fontSize: win.width / 24,
    color: "#FFFFFF",
  },
  createWrap1: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    marginTop: win.height / 28,
    paddingVertical: win.height / 60,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#BBFB3C",
    paddingHorizontal: win.width / 20,
    borderRadius: win.width / 20,
  },
  createWrap2: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    marginTop: win.height / 28,
    paddingVertical: win.height / 60,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#FFC107",
    paddingHorizontal: win.width / 20,
    borderRadius: win.width / 20,
  },
  createText: {
    color: "#fff",
    fontSize: win.width / 20,
  },
  balanceHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  balanceText: {
    color: "gray",
    fontSize: win.width / 20,
  },
  textStyle: {
    borderWidth: 1,
    borderColor: "gray",
    // flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: win.width / 30,
    borderRadius: win.width / 50,
    width: win.width / 2.8,
    justifyContent: "space-between",
  },
  textStyle2: {
    borderWidth: 1,
    borderColor: "gray",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: win.width / 30,
    borderRadius: win.width / 50,
    width: win.width / 2.8,
    justifyContent: "space-between",
  },
  dropText: {
    color: "white",
  },
  currImg: {
    flexDirection: "row",
    alignItems: "center",
  },
  currText: {
    color: "#FFC107",
    fontSize: win.width / 24,
    marginLeft: win.width / 40,
  },
  topCont: {
    height: win.height / 6,
    justifyContent: "space-evenly",
    paddingHorizontal: win.width / 20,
  },
  balanceCurrent: {
    color: "white",
    fontSize: win.width / 22,
  },
  modalStyle: {
    width: win.width / 1.52,
    height: win.height / 2.1,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 1000,
    borderRadius: win.width / 20,
    // alignItems: "center",
    justifyContent: "space-evenly",
    right: win.width / 6,
    top: win.width / 1.3,
  },
  modalText: {
    color: "black",
    fontSize: win.width / 25,
    paddingHorizontal: win.width / 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  modalText2: {
    color: "#5CE5D5",
    fontSize: win.width / 25,
    paddingHorizontal: win.width / 20,
    textAlign: "center",
  },
  modalText3: {
    color: "#FFC107",
    fontSize: win.width / 25,
    paddingHorizontal: win.width / 20,
    textAlign: "center",
  },
  flowerImage: {
    marginHorizontal: win.width / 3.5,
  },
  modalStyleInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: win.width / 16,
  },
  buttons: {
    flexDirection: "row",
    // marginTop: win.height / 15,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    justifyContent: "space-evenly",
    paddingVertical: win.height / 90,
  },
  btnCreat: {
    borderColor: "#00000026",
    color: "#5CE5D5",
    fontSize: win.width / 25,
    fontWeight: "bold",
  },
  cancelBtn: {
    fontSize: win.width / 25,
    color: "gray",
  },
  divider: {
    width: 1,
    height: "100%",
    backgroundColor: "lightgray",
  },

  modalStyle2: {
    width: win.width / 1.52,
    height: win.height / 1.5,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 1000,
    borderRadius: win.width / 20,
    // alignItems: "center",
    justifyContent: "space-evenly",
    right: win.width / 6,
    top: win.width / 3,
  },
  modalTexts: {
    color: "black",
    fontSize: win.width / 25,
    paddingHorizontal: win.width / 20,
    textAlign: "center",
  },
  modalTexts2: {
    color: "#5CE5D5",
    fontSize: win.width / 25,
    paddingHorizontal: win.width / 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  modalTexts3: {
    color: "#FFC107",
    fontSize: win.width / 25,
    paddingHorizontal: win.width / 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  txtfield: {
    marginHorizontal: win.width / 20,
    justifyContent: "space-evenly",
  },
  flowerImage: {
    marginHorizontal: win.width / 3.5,
  },
  modalStyleInner2: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: win.width / 19,
  },
  buttons: {
    flexDirection: "row",
    // marginTop: win.height / 15,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "lightgray",
    justifyContent: "space-evenly",
    paddingVertical: win.height / 90,
  },
  btnCreat: {
    borderColor: "#00000026",
    color: "#5CE5D5",
    fontSize: win.width / 25,
    fontWeight: "bold",
  },
  cancelBtn: {
    fontSize: win.width / 25,
    color: "gray",
  },
  divider: {
    width: 1,
    height: "100%",
    backgroundColor: "lightgray",
  },
});

export default HomeScreen;
