import React from "react";
import {
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from "react-native";
import ship from "../../assets/images/whitelogo2.png";
import { AntDesign } from "@expo/vector-icons";
import OtpComp from "../../Components/OTPComp";

const win = Dimensions.get("window");

function OtpVerification({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.wrapTop}
        onPress={() => navigation.navigate("forgotpassword")}
      >
        <AntDesign
          name="left"
          size={win.width / 20}
          color="white"
          style={styles.arrow}
        />
        <Text style={styles.heading}>Reset Password</Text>
      </Pressable>
      <View style={styles.Logo}>
        <Image source={ship} />
      </View>
      <View style={styles.form}>
        <View style={styles.formContainer}>
          <View style={styles.cardWrap}>
            <Text style={styles.headTxt}> Enter your verification code</Text>
            <Text style={styles.formtxt}>
              We have sent a verification code to your registered email
            </Text>
          </View>
          <OtpComp />
          <View style={styles.btnWrap}>
            <Pressable
              style={styles.btn}
              onPress={() => navigation.navigate("resetpassword")}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: win.width / 18,
                }}
              >
                Next
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#001437",
    height: "100%",
    width: win.width,
    // alignItems: "center",
    // justifyContent: "center",
  },
  Logo: {
    alignItems: "center",
  },
  heading: {
    color: "#fff",
    fontSize: win.width / 18,
    fontWeight: "bold",
    marginLeft: win.width / 30,
  },
  form: {
    alignItems: "center",
    marginTop: win.height / 20,
  },
  formContainer: {
    backgroundColor: "rgba(251, 252, 250, 0.12)",
    // borderWidth: 1,
    // height: win.height / 1.9,
    width: win.width / 1.2,
    borderRadius: win.width / 10,
    // flexDirection: "column",
    // justifyContent: "space-evenly",
  },
  cardWrap: {
    marginLeft: win.width / 50,
    borderWidth: 0,
    marginTop: win.height / 35,
  },
  wrapTop: {
    flexDirection: "row",
    paddingBottom: win.height / 30,
    alignItems: "center",
    marginTop: win.height / 16,
    marginLeft: win.width / 16,
  },
  headTxt: {
    color: "#5CE5D5",
    fontSize: win.width / 18,
    textAlign: "center",
    marginBottom: win.height / 30,
  },
  formtxt: {
    color: "#fff",
    textAlign: "center",
    marginBottom: win.height / 30,
    fontSize: win.width / 22,
    paddingHorizontal: win.width / 16,
  },
  btn: {
    backgroundColor: "#7898FB",
    // width: "30%",
    // height: "10%",
    borderRadius: 25,
    justifyContent: "center",
    paddingHorizontal: win.width / 7,
    paddingVertical: win.width / 60,
    marginTop: win.height / 25,

    marginTop: win.height / 15,
  },
  btnWrap: {
    alignItems: "center",
    marginBottom: win.height / 25,
  },
});
export default OtpVerification;
