import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import logo from "../../assets/images/smallLogo.png";
import { AntDesign } from "@expo/vector-icons";
import { BottomSheet } from "react-native-btr";
import { SocialIcon } from "react-native-elements";
import DateTimePickerModal from "react-native-modal-datetime-picker";
// import DatePicker from "react-native-date-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNDateTimePicker from "@react-native-community/datetimepicker";
const win = Dimensions.get("window");

const TransactionFilled = ({ setScreenToShow }) => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setmode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
  };
  const showMode = (currentMode) => {
    setShow(true);
    setmode(currentMode);
  };

  const [open, setOpen] = useState(false);
  const toggleBottomNavigationView = () => {
    setVisible(!visible);
    setDate(new Date(true));
  };
  const toggleBottomNavigationView2 = () => {
    setVisible2(!visible2);
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <Pressable onPress={() => setScreenToShow("transactionscreen")}>
          <Image source={logo} />
        </Pressable>
        <Text style={styles.heading}>Transactions</Text>
      </View>
      <View style={styles.wrapcont}>
        <View style={styles.wrapInner}>
          <Pressable style={styles.date} onPress={() => showMode("date")}>
            <Text style={{ color: "#5CE5D5" }}>10.04.2022</Text>
            <AntDesign name="caretright" size={10} color="white" />
          </Pressable>
          <Pressable style={styles.date} onPress={() => showMode("date")}>
            <Text style={{ color: "#FFFFFF" }}>End Date</Text>
            <AntDesign name="caretright" size={10} color="white" />
          </Pressable>
        </View>
        <View style={styles.wrapInner}>
          <Pressable style={styles.date} onPress={toggleBottomNavigationView2}>
            <Text style={{ color: "#FFFFFF" }}>Last week</Text>
            <AntDesign name="caretright" size={10} color="white" />
          </Pressable>
          <View></View>
        </View>
      </View>
      {/* <BottomSheet
                visible={visible}
                containerStyle={{
                    backgroundColor: "gba(251, 252, 250, 0.1)",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: 30,
                }}
                onBackButtonPress={toggleBottomNavigationView}
                onBackdropPress={toggleBottomNavigationView}
            > */}

      {show && (
        <RNDateTimePicker
          testID="dateTimePicker"
          style={styles.datePicker}
          mode={mode}
          value={date}
          display="spinner"
          onChange={onChange}
        />
      )}

      {/* <BottomSheet
                visible={visible}
                containerStyle={{
                    backgroundColor: "gba(251, 252, 250, 0.1)",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                    borderRadius: 30,
                }}
                onBackButtonPress={toggleBottomNavigationView}
                onBackdropPress={toggleBottomNavigationView}
            >

                <View style={styles.bottomNavigationView}>
                    <View
                        style={{
                            flex: 1,
                            flexDirection: "column",
                            justifyContent: "space-between",
                        }}
                    >

                        <RNDateTimePicker style={styles.datePicker} mode="date" value={date} display="spinner" />

                        <View style={styles.buttons}>
                            <Pressable onPress={() => setVisible(!visible)}>
                                <Text style={styles.cancelBtn}>Cancel</Text>
                            </Pressable>
                            <View style={styles.divider}></View>
                            <Pressable>
                                <Text style={styles.btnCreat}>Set</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </BottomSheet > */}
      <BottomSheet
        visible={visible2}
        containerStyle={{
          backgroundColor: "gba(251, 252, 250, 0.1)",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: 30,
        }}
        onBackButtonPress={toggleBottomNavigationView2}
        onBackdropPress={toggleBottomNavigationView2}
      >
        <View style={styles.toggleBottomNavigationView2}>
          <View
            style={{
              height: win.height / 17,
              backgroundColor: "#FBFCFA40",
              width: 5,
              transform: [{ rotate: "90deg" }],
              marginTop: win.height / 60,
              marginLeft: win.height / 4.2,
            }}
          ></View>

          <Text
            style={{
              fontSize: win.height / 40,
              color: "white",
              marginHorizontal: win.width / 10,
              marginVertical: win.height / 250,
            }}
          >
            None
          </Text>
          <Text
            style={{
              fontSize: win.height / 40,
              color: "#5CE5D5",
              marginHorizontal: win.width / 10,
              marginVertical: win.height / 40,
            }}
          >
            Last week
          </Text>
          <Text
            style={{
              fontSize: win.height / 40,
              color: "white",
              marginHorizontal: win.width / 10,
            }}
          >
            Last Month
          </Text>
          <Text
            style={{
              fontSize: win.height / 40,
              color: "white",
              marginHorizontal: win.width / 10,
              marginVertical: win.height / 40,
            }}
          >
            6 month
          </Text>
          <Text
            style={{
              fontSize: win.height / 40,
              color: "white",
              marginHorizontal: win.width / 10,
              marginVertical: win.height / 250,
            }}
          >
            1 year
          </Text>
          <Text
            style={{
              fontSize: win.height / 40,
              color: "white",
              marginHorizontal: win.width / 10,
              marginVertical: win.height / 40,
            }}
          >
            All
          </Text>
          <View style={styles.buttonsLastWeek}>
            <Pressable onPress={() => setVisible(!visible)}>
              <Text style={styles.cancelBtn}>Cancel</Text>
            </Pressable>
            <View style={styles.divider}></View>
            <Pressable>
              <Text style={styles.btnCreat}>Choose</Text>
            </Pressable>
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

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
    marginLeft: win.width / 25,
  },
  heading: {
    color: "#fff",
    fontSize: win.width / 18,
    fontWeight: "bold",
    marginLeft: win.width / 5,
  },
  wrapcont: {
    // flexDirection: "row",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#FBFCFA40",
    height: win.height / 4,
    // alignItems: "center",
    paddingVertical: win.height / 40,
    justifyContent: "space-between",
    paddingHorizontal: win.width / 15,
  },
  wrapInner: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: {
    flexDirection: "row",
    borderWidth: 1,
    height: win.height / 15,
    width: win.width / 3,
    borderColor: "#FBFCFA42",
    justifyContent: "space-evenly",
    borderRadius: 5,
    alignItems: "center",
    // marginBottom: win.height / 30,
  },
  textcont: {
    height: win.height / 15,
    width: win.width / 1.1,
    backgroundColor: "#FBFCFA1A",
    flexDirection: "row",
    marginLeft: win.width / 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: win.height / 20,
    padding: win.width / 40,
  },
  bottomNavigationView: {
    backgroundColor: "#FBFCFA1A",
    width: "100%",
    height: 250,
    justifyContent: "center",
    // alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: "absolute",
  },
  toggleBottomNavigationView2: {
    backgroundColor: "#FBFCFA1A",
    width: "100%",
    height: win.height / 1.88,
    justifyContent: "center",
    // alignItems: "center",
    borderColor: "#FBFCFA80",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  datePicker: {
    position: "absolute",
    top: 0,
    paddingVertical: win.height / 10,
    backgroundColor: "red",
  },
  buttons: {
    flexDirection: "row",
    // marginTop: win.height / 15,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#FBFCFA40",
    justifyContent: "space-evenly",
    paddingVertical: win.height / 30,
    position: "relative",
    bottom: 0,
    top: win.height / 4,
  },
  buttonsLastWeek: {
    top: win.height / 150,
    flexDirection: "row",
    // marginTop: win.height / 15,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#FBFCFA40",
    justifyContent: "space-evenly",
    paddingVertical: win.height / 30,
    position: "relative",
    bottom: 0,
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
  // topDivider: {
  //     width: 5,
  //     height: win.height / 35,
  //     backgroundColor: "#FBFCFA40",
  //     transform: rotate(- 0.25)
  // },
  divider: {
    width: 1,
    height: win.height / 35,
    backgroundColor: "#FBFCFA40",
  },
});
export default TransactionFilled;
