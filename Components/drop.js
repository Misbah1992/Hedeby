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
  TextInput,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
const win = Dimensions.get("window");

function drop() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [wallet, setWallet] = useState([
    { label: "Naz wallet last", value: "wallet" },
    { label: "Green w.22", value: "GWallet" },
  ]);
  return (
    <DropDownPicker
      placeholder="Naz wallet 1"
      open={open}
      value={value}
      items={wallet}
      setOpen={setOpen}
      setValue={setValue}
      setWallet={setWallet}
      style={styles.drop}
    />
  );
}
const styles = StyleSheet.create({
  drop: {
    backgroundColor: "blue",
    width: window.width / 30,
  },
});
export default drop;
