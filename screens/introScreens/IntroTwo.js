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
import slider2 from "./../../assets/images/slider2.png";
import introPic2 from "./../../assets/images/introPic2.png";

function IntroTwo({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.textWrap1}>
        <Text style={styles.textStyle}>● Receive the QR Handshake</Text>
        <Text style={styles.textStyle}>
          ● Send the product to the buyer with QR handshake
        </Text>
        <Text style={styles.textStyle}>
          ● Once they scan it, you will receive your Ether
        </Text>
      </View>
      <View style={styles.imgWrap}>
        <Image source={introPic2} style={styles.imgStyle} />
      </View>
      <View style={styles.textWrap2}>
        <Text style={styles.textStyle}>
          ● When your purchase arrives, scan the QR Handshake with the Hedeby
          App
        </Text>
        <Text style={styles.textStyle}>
          ● This will authenticate that you received your purchase
        </Text>
        <Text style={styles.textStyle}>
          ● The Ether is then transferred to the seller
        </Text>
      </View>

      <View style={styles.sliderWrap}>
        <Image source={slider2} style={styles.slider} />
      </View>
      <View style={styles.btnWrap}>
        <Text style={styles.textLeft}>Skip</Text>
        <Pressable
          style={styles.textRight}
          onPress={() => navigation.navigate("intro-three")}
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
  imgWrap: {
    // borderWidth: 1,
    alignItems: "center",
    marginTop: win.height / 20,
  },
  textWrap1: {
    paddingHorizontal: win.width / 20,
    marginTop: win.height / 15,
  },
  textWrap2: {
    paddingHorizontal: win.width / 20,
    marginTop: win.height / 20,
  },
  textStyle: {
    color: "#fff",
    fontSize: win.width / 30,
    marginTop: win.height / 45,
    paddingRight: win.width / 8,
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
    backgroundColor: "#5CE5D5",
    color: "#fff",
    paddingHorizontal: win.width / 15,
    paddingVertical: win.width / 45,
    borderRadius: 20,
    fontWeight: "bold",
  },
});

export default IntroTwo;
