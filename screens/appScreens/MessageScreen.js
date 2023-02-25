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
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function MessageScreen({ setScreenToShow }) {
  return (
    <View style={styles.container}>
      <Text style={styles.activity}>Messages</Text>
      <View style={styles.inpWrap}>
        <EvilIcons name="search" size={win.width / 16} color="gray" />
        <Text style={styles.inpText}>Search by name</Text>
      </View>

      <Pressable
        style={styles.createWrap1}
        onPress={() => setScreenToShow("messages-screen")}
      >
        <View style={styles.inner}>
          <Image source={group} style={styles.imgStyle} />
          <View>
            <Text style={styles.createText}>NAZ</Text>
            <Text style={styles.text2}>Hey, how are you?</Text>
          </View>
        </View>
        <Text style={styles.time}>10 min</Text>
      </Pressable>
      <Pressable
        style={styles.createWrap2}
        onPress={() => setScreenToShow("messages-screen")}
      >
        <View style={styles.inner}>
          <Image source={msgIcon3} style={styles.imgStyle} />
          <View>
            <Text style={styles.createText}>Leo</Text>
            <Text style={styles.text2Light}>
              What’s up? Are you available for short...
            </Text>
          </View>
        </View>
        <Text style={styles.time2}>2 d</Text>
      </Pressable>
      <Pressable
        style={styles.createWrap2}
        onPress={() => setScreenToShow("messages-screen")}
      >
        <View style={styles.inner}>
          <Image source={msgIcon2} style={styles.imgStyle} />
          <View>
            <Text style={styles.createText}>Polly</Text>
            <Text style={styles.text2Light}>Just write me, thanks.</Text>
          </View>
        </View>
        <Text style={styles.time2}>2 d</Text>
      </Pressable>
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
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: win.height / 75,
    paddingHorizontal: win.width / 30,
    paddingVertical: win.height / 60,
    height: win.height / 12,
    left: 10,
    width: win.width / 1.1,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#5CE5D5",
  },
  createWrap2: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: win.height / 75,
    paddingHorizontal: win.width / 30,
    paddingVertical: win.height / 60,
    height: win.height / 12,
    left: 10,
    width: win.width / 1.1,
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "lightgray",
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
    color: "#5CE5D5",
    fontSize: win.width / 28,
    paddingRight: win.width / 30,
    fontWeight: "bold",
  },
  createText: {
    color: "#FFF",
    fontSize: win.width / 28,
    paddingRight: win.width / 30,
    fontWeight: "bold",
  },
  imgStyle: {
    marginRight: win.width / 40,
  },
  inner: {
    flexDirection: "row",
    alignItems: "center",
  },
  time: {
    color: "#5CE5D5",
    fontSize: win.width / 30,
  },
  time2: {
    color: "#FFF",
    fontSize: win.width / 30,
  },
  text2: {
    color: "#5CE5D5",
    fontSize: win.width / 30,
  },
  text2Light: {
    color: "white",
    fontSize: win.width / 30,
  },
  inpWrap: {
    flexDirection: "row",
    backgroundColor: "rgba(251, 252, 250, 0.13);",
    marginHorizontal: win.width / 6,
    padding: win.width / 30,
    borderRadius: win.width / 16,
    marginBottom: win.height / 40,
    marginTop: win.height / 50,
  },
  inpText: {
    color: "gray",
    marginLeft: win.width / 40,
  },
});

export default MessageScreen;
