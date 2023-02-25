import * as React from "react";
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
import SearchResult from "../../assets/images/search.png";
import SearchBar from "../../Components/SearchBar";
import { AntDesign } from "@expo/vector-icons";

const win = Dimensions.get("window");

function NoSearchResult() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Messages</Text>
      <View style={styles.search}>
        <Text style={styles.SearchText}>Naz</Text>
        <AntDesign
          name="close"
          size={20}
          color="white"
          style={{ marginRight: win.width / 25 }}
        />
      </View>
      <View style={styles.wrap}>
        <Image source={SearchResult} />
        <Text style={styles.head}>No Search Result</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(251, 252, 250, 0.13)",
    height: win.height,
    width: win.width,
    flex: 1,
  },
  wrap: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: win.height / 5,
  },
  img: {
    height: win.height / 10,
    width: win.width / 8,
  },
  head: {
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
  },
  heading: {
    // flex: 1,
    color: "#fff",
    fontSize: win.width / 18,
    fontWeight: "bold",
    marginTop: win.height / 16,
    marginLeft: win.width / 30,
    marginBottom: win.height / 50,
  },
  search: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#191c1b",
    height: win.height / 15,
    width: win.width / 1.5,
    marginLeft: win.width / 6,
    alignItems: "center",
    borderRadius: 20,
  },
  SearchText: {
    color: "white",
    marginLeft: win.width / 20,
  },
});
export default NoSearchResult;
