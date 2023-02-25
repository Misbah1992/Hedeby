import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Button,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { CheckBox } from "react-native-elements";
import CountryCode from "../../Components/CountryCode";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons, Entypo } from "@expo/vector-icons";
import ship from "../../assets/images/whitelogo2.png";

const win = Dimensions.get("window");

function RegisterScreen({ navigation }) {
  const [selectedButton, setSelectedButton] = useState("register");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(selectedButton);
  useEffect(() => {
    if (selectedButton === "signin") {
      navigation.navigate("loginscreen");
    }
  }, [selectedButton]);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#7898FB", "#001437"]}
        style={styles.background}
      />
      <Image source={ship} style={styles.Logo} />
      <Text
        style={{ color: "white", fontSize: win.width / 12, marginBottom: 15 }}
      >
        Create an Account
      </Text>
      <View style={styles.formContainer}>
        <View style={styles.cardWrap}>
          <TextInput
            placeholder="Full name*"
            placeholderTextColor="lightgray"
            color="white"
          />
        </View>
        <View style={styles.cardWrap}>
          <TextInput
            placeholder="Enter Email Address*"
            placeholderTextColor="lightgray"
            color="white"
          />
        </View>
        <CountryCode />
        <View style={styles.cardWrap}>
          {showPassword ? (
            <>
              <TextInput
                onChangeText={setPassword}
                placeholder="Password"
                value={password}
                style={styles.input}
              />
              <TouchableOpacity onPress={() => setShowPassword(false)}>
                <Entypo
                  name="eye-with-line"
                  size={win.width / 18}
                  color="#FFFFFFBF"
                />
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TextInput
                onChangeText={setPassword}
                placeholder="Password"
                value={password}
                style={styles.input}
                placeholderTextColor="lightgrey"
                secureTextEntry={true}
              />
              <TouchableOpacity onPress={() => setShowPassword(true)}>
                <Entypo name="eye" size={win.width / 18} color="#FFFFFFBF" />
              </TouchableOpacity>
            </>
          )}
        </View>
        <View style={styles.textWrap}>
          <CheckBox title="" size={win.height / 40} />
          <Text style={styles.text}>
            I agree to the
            <Text style={styles.textLink}> Terms and services </Text>and
            <Text style={styles.textLink}> Privacy Policy</Text>
          </Text>
        </View>
        <Pressable
          style={{
            backgroundColor: "#7898FB",
            width: "30%",
            height: "10%",
            borderRadius: 25,
            justifyContent: "center",
            marginLeft: win.width / 3.5,
            marginBottom: 30,
          }}
          onPress={() => navigation.navigate("bottom-stack")}
        >
          <Text style={{ color: "white", textAlign: "center" }}> Sign up</Text>
        </Pressable>
      </View>
      <View style={styles.Authbtn}>
        <Pressable
          onPress={() => navigation.navigate("loginscreen")}
          style={
            selectedButton === "signin" ? styles.LoginBtn : styles.LoginBtn2
          }
        >
          <Text style={styles.btnText2}>Sign in</Text>
        </Pressable>
        <Pressable
          onPress={() => setSelectedButton("register")}
          style={
            selectedButton === "register"
              ? styles.RegisterBtn2
              : styles.RegisterBtn
          }
        >
          <Text style={styles.btnText}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#7898FB",
    height: "100%",
    width: win.width,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: win.height / 1.2,
  },
  Logo: {
    height: "10%",
    // color: "#fff",
    // fontSize: win.width / 16.5,
    // marginVertical: win.height / 90,

    textAlign: "center",
  },
  input: {
    width: "90%",
    fontSize: win.height / 50,
    color: "white",
  },
  formContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.32);",
    // borderWidth: 1,
    height: win.height / 1.8,
    width: win.width / 1.2,
    borderRadius: 50,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  cardWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginLeft: 30,
    marginTop: 50,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#5CE5D5",
  },
  textWrap: {
    flexDirection: "row",
    marginVertical: win.width / 20,
    marginHorizontal: win.width / 45,
    alignItems: "center",
    width: win.width / 1.55,
    // height: win.width / 6,
    // borderWidth: "1px",
  },
  text: {
    color: "white",
    fontSize: win.width / 35,
  },
  textLink: {
    color: "#5CE5D5",
  },
  Authbtn: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: win.width / 30,
  },
  LoginBtn: {
    backgroundColor: "#5CE5D5",
    color: "white",
    fontSize: win.width / 20,
    paddingVertical: win.width / 40,
    paddingHorizontal: win.width / 10,
    marginTop: win.height / 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: "hidden",
  },
  RegisterBtn: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    color: "white",
    fontSize: win.width / 20,
    paddingVertical: win.width / 40,
    paddingHorizontal: win.width / 10,
    marginTop: win.height / 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    overflow: "hidden",
  },
  RegisterBtn2: {
    backgroundColor: "#5CE5D5",
    color: "white",
    fontSize: win.width / 20,
    paddingVertical: win.width / 40,
    paddingHorizontal: win.width / 10,
    marginTop: win.height / 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    overflow: "hidden",
  },
  LoginBtn2: {
    backgroundColor: "rgba(255, 255, 255, 0.2);",
    color: "white",
    fontSize: win.width / 20,
    paddingVertical: win.width / 40,
    paddingHorizontal: win.width / 10,
    marginTop: win.height / 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    overflow: "hidden",
  },
  btnText: {
    color: "white",
    fontSize: win.width / 25,
  },
  btnText2: {
    color: "lightgray",
    fontSize: win.width / 25,
  },
});
export default RegisterScreen;
