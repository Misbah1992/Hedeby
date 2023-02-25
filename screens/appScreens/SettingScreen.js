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
import { AntDesign } from "@expo/vector-icons";
import currency from "../../assets/images/buy-crypto.png";
import security from "../../assets/images/security-safe.png";
import about from "../../assets/images/global-search.png";
import Terms from "../../assets/images/clipboard-text.png";
import Privacy from "../../assets/images/shield-tick.png";
import logout from "../../assets/images/logout.png";

const win = Dimensions.get("window");

function SettingScreen({ navigation, setScreenToShow }) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.wrapTop}
        onPress={() => setScreenToShow("profilescreen")}
      >
        <AntDesign
          name="left"
          size={win.width / 20}
          color="white"
          style={styles.arrow}
        />
        <Text style={styles.heading}>Settings</Text>
      </Pressable>
      <View style={styles.wrap}>
        <Image source={currency} style={styles.img} />
        <Text style={styles.Text}>Currency</Text>
      </View>
      <View style={styles.wrap}>
        <Image source={security} style={styles.img} />
        <Text style={styles.Text}>Security</Text>
      </View>
      <View style={styles.wrap}>
        <Image source={about} style={styles.img} />
        <Text style={styles.Text}>About us</Text>
      </View>
      <View style={styles.wrap}>
        <Image source={Terms} style={styles.img} />
        <Text style={styles.Text}>Terms of use</Text>
      </View>
      <View style={styles.wrap}>
        <Image source={Privacy} style={styles.img} />
        <Text style={styles.Text}>Privacy and policy</Text>
      </View>
      <View style={styles.wrap}>
        <Image source={logout} style={styles.img} />
        <Text style={styles.Text}>Log out</Text>
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
  wrapTop: {
    flexDirection: "row",
    marginTop: win.height / 15,
    alignItems: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    paddingBottom: win.height / 30,
  },
  wrap: {
    flexDirection: "row",
    // marginTop: win.height / 35,
    borderBottomWidth: 1,
    height: win.width / 5.5,
    borderBottomColor: "grey",
    alignItems: "center",
  },
  img: {
    height: win.width / 16,
    width: win.width / 16,
    marginLeft: win.width / 40,
  },
  heading: {
    color: "#fff",
    fontSize: win.width / 18,
    fontWeight: "bold",
    marginLeft: win.width / 30,
  },
  arrow: {
    marginLeft: win.width / 40,
    marginRight: win.width / 40,
  },
  Text: {
    color: "#fff",
    fontSize: win.width / 20,
    marginLeft: win.width / 30,
  },
});
export default SettingScreen;
