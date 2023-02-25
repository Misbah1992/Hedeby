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
const win = Dimensions.get("window");
import tick from "../../assets/images/tick-circleIcon.png";
import close from "../../assets/images/close-circleIcon.png";
import group from "../../assets/images/GrouIcon.png";
import info from "../../assets/images/info-circleIcon.png";
import handshake from "../../assets/images/handshakeIcon.png";
import scan from "../../assets/images/scan-barcodeIcon.png";
import msgIcon2 from "../../assets/images/msgIocn2.png";
import msgIcon3 from "../../assets/images/msgIcon3.png";
import { EvilIcons } from "@expo/vector-icons";
import verify from "./../../assets/images/verify.png";
import { AntDesign } from "@expo/vector-icons";
import userSquare from "./../../assets/images/user-square.png";
import verifyColor from "./../../assets/images/verifyColor.png";
import settingIcon from "./../../assets/images/setting-2.png";
import messageQuestion from "./../../assets/images/message-question.png";

function ProfileScreen({ navigation, setScreenToShow }) {
  return (
    <View style={styles.container}>
      <Text style={styles.activity}>User Profile</Text>

      <View style={styles.createWrap1}>
        <View style={styles.inner}>
          <Image source={group} style={styles.imgStyle} />
          <View>
            <Text style={styles.createText}>Nazik Israyelyan</Text>
          </View>
        </View>
        <Image source={verify} />
      </View>
      <View style={styles.wrapContainer}>
        <Pressable
          style={styles.createWrap2}
          onPress={() => setScreenToShow("editinformation")}
        >
          <View style={styles.innerWrap}>
            <View style={styles.inner}>
              <Image source={userSquare} style={styles.imgStyle} />
              <View>
                <Text style={styles.createText}>Edit information</Text>
              </View>
            </View>
          </View>
          <AntDesign name="right" size={win.width / 20} color="white" />
        </Pressable>
      </View>
      <View style={styles.wrapContainer}>
        <View style={styles.createWrap2}>
          <View style={styles.innerWrap}>
            <View style={styles.inner}>
              <Image source={verifyColor} style={styles.imgStyle} />
              <View>
                <Text style={styles.createText}>Verify account</Text>
              </View>
            </View>
          </View>
          <AntDesign name="right" size={win.width / 20} color="white" />
        </View>
      </View>
      <View style={styles.wrapContainer}>
        <Pressable
          style={styles.createWrap2}
          onPress={() => setScreenToShow("settingscreen")}
        >
          <View style={styles.innerWrap}>
            <View style={styles.inner}>
              <Image source={settingIcon} style={styles.imgStyle} />
              <View>
                <Text style={styles.createText}>Settings</Text>
              </View>
            </View>
          </View>
          <AntDesign name="right" size={win.width / 20} color="white" />
        </Pressable>
      </View>
      <View style={styles.wrapContainer}>
        <View style={styles.createWrap2}>
          <View style={styles.innerWrap}>
            <View style={styles.inner}>
              <Image source={messageQuestion} style={styles.imgStyle} />
              <View>
                <Text style={styles.createText}>Help and support</Text>
              </View>
            </View>
          </View>
          <AntDesign name="right" size={win.width / 20} color="lightgray" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#001437",
    height: win.height,
    width: win.width,
    flex: 1,
  },
  activity: {
    // flex: 1,
    color: "#fff",
    fontSize: win.width / 18,
    fontWeight: "bold",
    marginTop: win.height / 16,
    marginLeft: win.width / 30,
    marginBottom: win.height / 50,
  },

  createWrap1: {
    flexDirection: "row",
    alignItems: "center",

    marginVertical: win.height / 75,
    paddingHorizontal: win.width / 30,
    paddingVertical: win.height / 60,
    height: win.height / 12,

    width: win.width,
    justifyContent: "space-between",
    borderWidth: 0.25,
    borderColor: "gray",
  },
  createWrap2: {
    flexDirection: "row",
    alignItems: "center",

    borderRadius: 10,
    marginVertical: win.height / 75,

    paddingHorizontal: win.width / 30,
    paddingVertical: win.height / 60,
    height: win.height / 13,
    // left: 10,
    width: win.width / 1.1,
    justifyContent: "space-between",
    // borderWidth: 0.5,
    // borderColor: "lightgray",
    backgroundColor: "#0E2e40",
  },
  wrapContainer: {
    alignItems: "center",
  },
  // createWrap2: {
  //     flexDirection: "row",
  //     alignItems: "center",
  //     borderWidth: 1,
  //     marginTop: win.height / 24,
  //     paddingVertical: win.height / 60,
  //     justifyContent: "space-between",
  //     borderWidth: 1,
  //     borderColor: "grey",
  //     borderRadius: 10,
  // },
  createText: {
    color: "lightgray",
    fontSize: win.width / 20,
    paddingRight: win.width / 30,
  },

  imgStyle: {
    marginRight: win.width / 40,
    width: win.width / 15,
    height: win.width / 15,
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
  },

  text2: {
    color: "#5CE5D5",
    fontSize: win.width / 30,
  },
  text2Light: {
    color: "white",
    fontSize: win.width / 30,
  },
  innerWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default ProfileScreen;
