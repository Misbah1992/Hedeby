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
import intro101 from "./../../assets/images/intro101.png";
import intro102 from "./../../assets/images/intro102.png";

import slider1 from "./../../assets/images/slider1.png";

function IntroOne({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={intro101} style={styles.imageStyle} />
      <View style={styles.imgCont}>
        <Image source={intro102} style={styles.imageStyle2} />
      </View>

      <Text style={styles.heading}>Pay Ether for</Text>
      <Text style={styles.heading}>Anything, Anywhere</Text>
      <View style={styles.subheadingWrap}>
        <Text style={styles.subheading}>Make the Deal</Text>
        <Text style={styles.subheading}>Find the person in Hedeby</Text>
        <Text style={styles.subheading}>Create a Transaction</Text>
        <Text style={styles.subheading}>They approve</Text>
      </View>
      <View style={styles.sliderWrap}>
        <Image source={slider1} style={styles.slider} />
      </View>
      <View style={styles.btnWrap}>
        <Text style={styles.textLeft}>Skip</Text>
        <Pressable
          style={styles.textRight}
          onPress={() => navigation.navigate("intro-two")}
        >
          <Text style={{ color: "#fff" }}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(120, 152, 251, 1)",
    height: "100%",
    width: win.width,
  },
  imgCont: {
    alignItems: "center",
  },
  imageStyle: {
    width: win.width,
    height: win.height / 2.2,
  },
  imageStyle2: {
    marginTop: -win.width / 1.75,
    textAlign: "center",
  },
  heading: {
    textAlign: "center",
    color: "#fff",
    fontSize: win.width / 15,
    fontWeight: "bold",
  },
  subheading: {
    textAlign: "center",
    color: "#fff",
    paddingHorizontal: win.width / 10,
    fontSize: win.width / 22,
  },
  subheadingWrap: {
    marginTop: win.height / 20,
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
    color: "#fff",
    fontWeight: "bold",
    fontSize: win.width / 28,
  },
  textRight: {
    // marginRight: win.width / 25,
    backgroundColor: "#5CE5D5",
    color: "#fff",
    paddingHorizontal: win.width / 15,
    paddingVertical: win.width / 45,
    borderRadius: 20,
    fontWeight: "bold",
  },
});

export default IntroOne;
