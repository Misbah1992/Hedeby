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
import { AntDesign } from "@expo/vector-icons";
import currency from "../../assets/images/buy-crypto.png";
import security from "../../assets/images/security-safe.png";
import about from "../../assets/images/global-search.png";
import Terms from "../../assets/images/clipboard-text.png";
import Privacy from "../../assets/images/shield-tick.png";
import logout from "../../assets/images/logout.png";
import uploadImgPic from "./../../assets/images/uploadImgPic.png";
import CountryCode from "../../Components/CountryCode";

const win = Dimensions.get("window");

function EditInformation({ navigation, setScreenToShow }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrapTop}>
        <Pressable
          style={styles.innerTop}
          onPress={() => setScreenToShow("profilescreen")}
        >
          <Pressable onPress={() => setScreenToShow("profilescreen")}>
            <AntDesign
              name="left"
              size={win.width / 20}
              color="white"
              style={styles.arrow}
            />
          </Pressable>
          <Text style={styles.heading}>Edit information</Text>
        </Pressable>
        <AntDesign name="check" size={win.width / 18} color="white" />
      </View>
      <View style={styles.imgCont}>
        <Image style={styles.imgStyle} source={uploadImgPic} />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.cardWrap}>
          <TextInput
            placeholder="Full name"
            placeholderTextColor="#FFFFFF"
            color="white"
          />
        </View>

        <View style={styles.cardWrap}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#FFFFFF"
            color="white"
          />
        </View>
        <View>
          <CountryCode foredit={"foredit"} />
        </View>
        <View style={styles.cardWrap}>
          <TextInput
            placeholder="New password"
            placeholderTextColor="#FFFFFF"
            color="white"
          />
        </View>
        <View style={styles.cardWrap}>
          <TextInput
            placeholder="Confirm password"
            placeholderTextColor="#FFFFFF"
            color="white"
            secureTextEntry={true}
          />
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
    paddingBottom: win.height / 10,
  },
  wrapTop: {
    flexDirection: "row",
    marginTop: win.height / 15,
    alignItems: "center",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    paddingBottom: win.height / 30,
    justifyContent: "space-between",
    paddingHorizontal: win.width / 20,
  },

  heading: {
    color: "#fff",
    fontSize: win.width / 18,
    fontWeight: "bold",
    marginLeft: win.width / 30,
  },
  innerTop: {
    flexDirection: "row",
    alignItems: "center",
  },
  imgCont: {
    alignItems: "center",
    marginVertical: win.width / 60,
  },
  formContainer: {
    // borderWidth: 1,
    marginHorizontal: win.width / 20,
  },
  cardWrap: {
    backgroundColor: "#0E2e40",
    height: win.height / 16,
    justifyContent: "center",
    marginVertical: win.width / 30,
    borderRadius: win.width / 50,
    paddingLeft: win.width / 40,
  },
});
export default EditInformation;
