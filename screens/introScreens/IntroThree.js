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
import slider3 from "./../../assets/images/slider3.png";
import introPic3 from "./../../assets/images/introPic3.png";
import whitelogo2 from "./../../assets/images/whitelogo2.png";
import introMap from "./../../assets/images/introMap.png";

function IntroThree({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoWrap}>
        <Image source={whitelogo2} style={styles.logoStyle} />
      </View>
      <View style={styles.topWrap}>
        <Image source={introMap} style={styles.imgStyle} />
      </View>
      <Text style={styles.heading}>Anything, Anywhere</Text>
      <View style={styles.subheadingWrap}>
        <Text style={styles.subheading}>You are now ready to trade</Text>
        <Text style={styles.subheading}>with the world</Text>
      </View>
      <View style={styles.sliderWrap}>
        <Image source={slider3} style={styles.slider} />
      </View>
      <View style={styles.btnWrap}>
        <Text style={styles.textLeft}>Skip</Text>
        {/* <Pressable onPress={() => navigation.navigate("bottom-stack")}> */}
        <Pressable
          style={styles.textRight}
          onPress={() => navigation.navigate("auth-stack")}
        >
          <Text style={{ color: "#fff" }}>Start</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5CE5D5",
    height: "100%",
    width: "100%",
  },
  topWrap: {
    backgroundColor: "rgba(120, 152, 251, 0.8)",
    height: win.height / 1.9,
    alignItems: "center",
    justifyContent: "center",
  },
  logoWrap: {
    alignItems: "center",
    position: "absolute",
    zIndex: 1000,
    width: win.width,
    top: win.height / 15,
  },
  heading: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: win.width / 13,
    textAlign: "center",
    marginTop: win.height / 25,
  },
  subheadingWrap: {
    marginTop: win.height / 16,
  },
  subheading: {
    color: "#fff",

    fontSize: win.width / 20,
    textAlign: "center",
  },

  imgStyle: {
    width: "95%",
    marginTop: win.height / 6,
  },

  sliderWrap: {
    position: "absolute",
    bottom: win.height / 8,
    width: win.width,
    alignItems: "center",
  },
  btnWrap: {
    position: "absolute",
    bottom: win.height / 35,
    flexDirection: "row",
    justifyContent: "space-between",
    width: win.width,
    paddingHorizontal: win.width / 20,
    alignItems: "center",
  },
  textLeft: {
    color: "#5CE5D5",
    fontWeight: "bold",
    fontSize: win.width / 28,
  },
  textRight: {
    // marginRight: win.width / 25,
    backgroundColor: "rgba(120, 152, 251, 0.8)",
    color: "#fff",
    paddingHorizontal: win.width / 15,
    paddingVertical: win.width / 45,
    borderRadius: 20,
    fontWeight: "bold",
  },
});

export default IntroThree;
