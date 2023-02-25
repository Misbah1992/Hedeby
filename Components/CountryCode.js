import React, { useState, useRef } from "react";
import { View, Text, Alert, StyleSheet, Pressable } from "react-native";
import PhoneInput from "react-native-phone-number-input";

const CountryCode = () => {
  const [phoneNumber, setphoneNumber] = useState("");
  const phoneInput = useRef(null);
  const buttonPress = () => {
    Alert.alert(phoneNumber);
  };
  return (
    <View>
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        textInputStyle={{ color: "white" }}
        codeTextStyle={{ color: "white" }}
        defaultCode="CA"
        layout="first"
        withShadow
        autoFocus
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        onChangeFormattedText={(text) => {
          setphoneNumber(text);
        }}
      />
      {/* <Pressable style={styles.button} onPress={() => buttonPress()}>
                <Text style={styles.continueText}>Get Phone Number</Text>
            </Pressable> */}
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  // },
  phoneContainer: {
    // width: '75%',
    // height: 50,
    width: "80%",
    marginLeft: 30,
    marginTop: 20,
    backgroundColor: "transparent",
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#5CE5D5",
  },
  // button: {
  //     marginTop: 30,
  //     width: '75%',
  //     padding: 10,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     backgroundColor: 'green',
  // },
  textInput: {
    paddingVertical: 0,
    backgroundColor: "#transparent",
    color: "#fff",
  },
});

export default CountryCode;
