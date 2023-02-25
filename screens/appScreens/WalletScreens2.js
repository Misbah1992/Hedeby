import React, { useEffect, useState } from "react";
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
import { Feather } from "@expo/vector-icons";
import AddWallet from "../../assets/images/wallet-add.png";
import Vector from "../../assets/images/earthVector.png";
import Transfer from "../../assets/images/send-sqau.png";
import Buy from "../../assets/images/buycrypto.png";
import Link from "../../assets/images/scan.png";
import { MaterialIcons } from "@expo/vector-icons";
import xIcon from "./../../assets/images/x_icon.png";
import { TextInput } from "react-native";

const win = Dimensions.get("window");

function WalletScreen2({ setScreenToShow }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [inpValue, setInpValue] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const deleteModal = () => {
    setModal(!modal);
  };

  return (
    <View style={styles.container}>
      {isModalVisible && (
        <View style={styles.modalStyle}>
          <View style={styles.modalStyleInner}>
            <View></View>
            <Pressable onPress={toggleModal}>
              <MaterialIcons
                name="cancel"
                size={win.width / 16}
                color="black"
              />
            </Pressable>
          </View>
          <Text style={styles.headText}>Edit wallet name</Text>
          <View>
            <TextInput
              placeholder="Wallet Name"
              style={styles.inputWrap}
              value={inpValue}
              onChange={setInpValue}
            />
          </View>
          <View style={styles.buttons}>
            <Pressable onPress={() => setModalVisible(!isModalVisible)}>
              <Text style={styles.cancelBtn}>Cancel</Text>
            </Pressable>
            <View style={styles.divider}></View>
            <Pressable>
              <Text style={styles.btnCreat}>Save</Text>
            </Pressable>
          </View>
        </View>
      )}
      {modal && (
        <View style={styles.modalStyle}>
          <View style={styles.modalStyleInner}>
            <View></View>
            <Pressable onPress={deleteModal}>
              <MaterialIcons
                name="cancel"
                size={win.width / 16}
                color="black"
              />
            </Pressable>
          </View>
          <Image source={xIcon} style={{ marginHorizontal: win.width / 3.6 }} />
          <Text style={styles.modalText}>
            Are you sure you want to delete this wallet?
          </Text>
          <View style={styles.buttons}>
            <Pressable onPress={() => setModal(!modal)}>
              <Text style={styles.cancelBtn}>Cancel</Text>
            </Pressable>
            <View style={styles.divider}></View>
            <Pressable>
              <Text style={styles.btnCreat}>Delete</Text>
            </Pressable>
          </View>
        </View>
      )}

      <View style={styles.wrap}>
        <Pressable onPress={() => setScreenToShow("homescreen")}>
          <Image source={logo} style={{ marginLeft: win.width / 25 }} />
        </Pressable>
        <Text style={styles.heading}>Wallet</Text>
        <Image source={AddWallet} style={{ marginRight: win.width / 25 }} />
      </View>

      <Pressable style={styles.textStyle}>
        <Pressable
          style={styles.dropDown}
          onPress={() => setShowDropDown(!showDropDown)}
        >
          <Text style={styles.dropText}>Naz Wallet 1</Text>
          <MaterialIcons
            name="arrow-drop-down"
            size={win.width / 15}
            color="white"
          />
        </Pressable>
      </Pressable>

      {showDropDown && (
        <Pressable style={styles.optionsSection}>
          <Pressable style={styles.options}>
            <Pressable style={styles.textIcon} onPress={toggleModal}>
              <AntDesign name="edit" size={win.height / 30} color="lightgray" />
              <Text style={styles.optionsText}>Edit</Text>
              <View></View>
            </Pressable>
          </Pressable>

          <Pressable style={styles.options}>
            <Pressable style={styles.textIcon} onPress={deleteModal}>
              <Feather
                name="trash-2"
                size={win.height / 30}
                color="lightgray"
              />
              <Text style={styles.optionsText}>Delete</Text>
              <View></View>
            </Pressable>
          </Pressable>
        </Pressable>
      )}

      {/* </Pressable> */}

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
            <Text style={{ color: "white", fontSize: win.width / 15 }}>
              ...
            </Text>
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
      <View style={styles.WrapOut}>
        <View style={styles.wrapIn}>
          <Image source={Transfer} />
          <Text style={styles.textSty}>Transfer</Text>
        </View>
        <View style={styles.wrapIn}>
          <Image source={Buy} />

          <Text style={styles.textSty}>Buy</Text>
        </View>
        <View style={styles.wrapIn}>
          <Image source={Link} />

          <Text style={styles.textSty}>Link</Text>
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
  headText: {
    fontSize: win.width / 20,
    textAlign: "center",
    color: "#7898FB",
  },
  inputWrap: {
    borderWidth: 1,
    borderColor: "#7898FB",
    marginHorizontal: win.width / 20,
    paddingVertical: win.height / 80,
    paddingHorizontal: win.height / 60,
    borderRadius: 15,
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
  dropDown: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: win.width / 2.8,
    paddingHorizontal: win.width / 30,
    alignItems: "center",
    // position: "relative",
  },
  optionsSection: {
    display: "flex",
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: win.width / 50,
    position: "absolute",
    right: 18,
    height: win.height / 10.0,
    top: win.height / 4.3,
    zIndex: 1000,
    backgroundColor: "white",
    color: "black",
    width: win.width / 2.3,
  },
  options: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: win.width / 2.8,
    paddingHorizontal: win.width / 30,
    paddingBottom: win.height / 50,
  },
  textIcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  optionsText: {
    color: "black",
    paddingLeft: win.width / 50,
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
    marginLeft: win.width / 1.69,
  },
  dropText: {
    color: "white",
  },
  heading: {
    color: "#fff",
    fontSize: win.width / 18,
    fontWeight: "bold",
    marginLeft: win.width / 3,
    marginRight: win.width / 3.2,
  },
  balanceView: {
    backgroundColor: "#14254a",
    height: win.height / 4.5,
    marginTop: win.height / 24,
    borderRadius: win.width / 20,
    marginHorizontal: win.width / 20,
  },
  topCont: {
    height: win.height / 6,
    justifyContent: "space-evenly",
    paddingHorizontal: win.width / 20,
  },
  imgSize: {
    height: win.height / 25,
    width: win.width / 25,
  },
  balanceText: {
    color: "gray",
    fontSize: win.width / 20,
    marginTop: win.height / 20,
  },
  currImg: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: win.height / 20,
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
  WrapOut: {
    flexDirection: "row",
    marginLeft: win.width / 10,
    marginTop: win.height / 20,
  },
  wrapIn: {
    width: win.width / 5,
    marginRight: win.width / 10,
    backgroundColor: "#7898FBA6",
    height: win.height / 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  textSty: {
    color: "white",
    fontSize: win.height / 45,
  },
  modalStyle: {
    width: win.width / 1.5,
    height: win.height / 3.5,
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
  },
  modalText2: {
    color: "#5CE5D5",
    fontSize: win.width / 25,
    paddingHorizontal: win.width / 20,
    textAlign: "center",
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
    color: "#7898FB",
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
export default WalletScreen2;
