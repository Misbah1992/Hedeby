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

const win = Dimensions.get("window");

function ForgotPassword({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.wrapTop}
        onPress={() => navigation.navigate("loginscreen")}
      >
        <AntDesign
          name="left"
          size={win.width / 20}
          color="white"
          style={styles.arrow}
        />
        <Text style={styles.head}>Reset Password</Text>
      </Pressable>
      <View style={styles.Logo}>
        <Image source={ship} style={styles.Logo} />
      </View>
      <View style={styles.formWrap}>
        <View style={styles.formContainer}>
          <View style={styles.cardWrap}>
            <Text style={styles.headTxt}>
              Enter your email for the verification process
            </Text>
            <Text style={styles.formtxt}>
              We will send 6 digits code to your email
            </Text>
            <View style={styles.TxtInput}>
              <TextInput
                placeholder="Email address"
                style={styles.input}
                placeholderTextColor="grey"
              />
            </View>
          </View>
          <View style={styles.btnWrap}>
            <Pressable
              style={styles.btn}
              onPress={() => navigation.navigate("otpverification")}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  fontSize: win.width / 18,
                }}
              >
                Send
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
  head: {
    color: "#fff",
    fontSize: win.width / 18,
    fontWeight: "bold",
    marginLeft: win.width / 30,
  },
  formWrap: {
    alignItems: "center",
    marginTop: win.height / 20,
  },
  heading: {
    color: "#fff",
    fontSize: win.width / 18,
    fontWeight: "bold",
    marginLeft: win.width / 30,
  },
  formContainer: {
    backgroundColor: "rgba(251, 252, 250, 0.12)",
    // borderWidth: 1,
    // height: win.height / 1.8,
    width: win.width / 1.2,
    borderRadius: win.width / 10,
    flexDirection: "column",
    // justifyContent: "space-evenly",
  },
  cardWrap: {
    width: "90%",
    marginLeft: win.width / 22,
    borderWidth: 0,
    marginTop: win.height / 25,
  },
  wrapTop: {
    flexDirection: "row",
    paddingBottom: win.height / 30,
    alignItems: "center",
    marginTop: win.height / 16,
    marginLeft: win.width / 16,
  },
  TxtInput: {
    margin: win.height / 28,
  },
  headTxt: {
    color: "#5CE5D5",
    fontSize: win.width / 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: win.height / 30,
  },
  formtxt: {
    color: "#fff",
    textAlign: "center",
    fontSize: win.width / 22,
    marginBottom: win.height / 30,
    paddingHorizontal: win.width / 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#5CE5D5",
    borderRadius: 9,
    height: win.height / 17,
    paddingLeft: win.width / 40,
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
  },
  btnWrap: {
    alignItems: "center",
    marginBottom: win.height / 25,
  },
});

export default ForgotPassword;
