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
import tick from "../../assets/images/tick-circleIcon.png";
import close from "../../assets/images/close-circleIcon.png";
import group from "../../assets/images/GrouIcon.png";
import info from "../../assets/images/info-circleIcon.png";
import handshake from "../../assets/images/handshakeIcon.png";
import scan from "../../assets/images/scan-barcodeIcon.png";
import { AntDesign } from "@expo/vector-icons";

import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const win = Dimensions.get("window");

// const DATA = [
//   {
//     activityText: "You accepted transaction request from Naz Israyelyan",
//     minutes: "10 min",
//     actImg: "",
//   },
//   {
//     activityText: "You accepted transaction request from Naz Israyelyan",
//     minutes: "2h",
//     actImg: "",
//   },
//   {
//     activityText: "Latin words, combined with a handful.",
//     minutes: "6d",
//     actImg: "",
//   },
//   {
//     activityText:
//       "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
//     minutes: "3w",
//     actImg: "",
//   },
//   {
//     activityText: "Latin words, combined with a handful.",
//     minutes: "6d",
//     actImg: "",
//   },
//   {
//     activityText:
//       "There are many variations of passages of Lorem Ipsum available",
//     minutes: "2h",
//     actImg: "",
//   },
// ];
function NotificationScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.activity}>Activity</Text>
      <GestureHandlerRootView>
        <Swipeable
          renderRightActions={() => (
            <View
              style={{
                width: 70,
                // backgroundColor: "#EA2626",
                // height: 70,
                marginVertical: win.height / 200,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="delete" size={win.height / 30} color="white" />
            </View>
          )}
        >
          <View style={styles.createWrap1}>
            <Image source={tick} style={styles.imgStyle} />
            <Text style={styles.createText}>
              You accepted transaction request from Naz Israyelyan
            </Text>
            <View></View>
          </View>
        </Swipeable>
      </GestureHandlerRootView>
      <GestureHandlerRootView>
        <Swipeable
          renderRightActions={() => (
            <View
              style={{
                width: 70,
                // backgroundColor: "#EA2626",
                // height: 70,
                marginVertical: win.height / 200,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="delete" size={win.height / 30} color="white" />
            </View>
          )}
        >
          <View style={styles.createWrap1}>
            <Image source={close} style={styles.imgStyle} />
            <Text style={styles.createText}>
              You rejected transaction request from Naz Israyelyan
            </Text>
            {/* <View></View> */}
          </View>
        </Swipeable>
      </GestureHandlerRootView>
      <GestureHandlerRootView>
        <Swipeable
          renderRightActions={() => (
            <View
              style={{
                width: 70,
                // backgroundColor: "#EA2626",
                // height: 70,
                marginVertical: win.height / 200,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="delete" size={win.height / 30} color="white" />
            </View>
          )}
        >
          <View style={styles.createWrap1}>
            <Image source={group} style={styles.imgStyle} />
            <Text style={styles.createText}>
              Latin words, combined with a handful.
            </Text>
            <View></View>
          </View>
        </Swipeable>
      </GestureHandlerRootView>
      <GestureHandlerRootView>
        <Swipeable
          renderRightActions={() => (
            <View
              style={{
                width: 70,
                // backgroundColor: "#EA2626",
                // height: 70,
                marginVertical: win.height / 200,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="delete" size={win.height / 30} color="white" />
            </View>
          )}
        >
          <View style={styles.createWrap1}>
            <Image source={info} style={styles.imgStyle} />
            <Text style={styles.createText}>
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested.
            </Text>
            {/* <View></View> */}
          </View>
        </Swipeable>
      </GestureHandlerRootView>
      <GestureHandlerRootView>
        <Swipeable
          renderRightActions={() => (
            <View
              style={{
                width: 70,
                // backgroundColor: "#EA2626",
                // height: 70,
                marginVertical: win.height / 200,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="delete" size={win.height / 30} color="white" />
            </View>
          )}
        >
          <View style={styles.createWrap1}>
            <Image source={handshake} style={styles.imgStyle} />
            <Text style={styles.createText}>
              Latin words, combined with a handful.
            </Text>
          </View>
        </Swipeable>
      </GestureHandlerRootView>
      <GestureHandlerRootView>
        <Swipeable
          renderRightActions={() => (
            <View
              style={{
                width: 70,
                // backgroundColor: "#EA2626",
                // height: 70,
                marginVertical: win.height / 200,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="delete" size={win.height / 30} color="white" />
            </View>
          )}
        >
          <View style={styles.createWrap1}>
            <Image source={scan} style={styles.imgStyle} />
            <Text style={styles.createText}>
              There are many variations of passages of Lorem Ipsum available.
            </Text>
            <View></View>
          </View>
        </Swipeable>
      </GestureHandlerRootView>
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
    paddingRight: win.width / 15,
    height: win.height / 12,
    left: 10,
    width: win.width / 1.1,
    // justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#5CE5D5",
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
    color: "#fff",
    fontSize: win.width / 28,
    paddingRight: win.width / 30,
  },
  imgStyle: {
    marginRight: win.width / 40,
  },
});

export default NotificationScreen;
