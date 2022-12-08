import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import { useFonts } from "expo-font";
import { BebasNeue_400Regular } from "@expo-google-fonts/bebas-neue";
import { InriaSans_300Light } from "@expo-google-fonts/inria-sans";
import Text from "./components/Text";
import Title from "./components/Title";
import Button from "./components/Button";
import TextInput from "./components/TextInput";
import { AntDesign } from "@expo/vector-icons";

export default function App() {
  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
    InriaSans_300Light,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Title style={{ fontSize: 40 }}>Neubrutalism</Title>
      <Text style={{ fontSize: 20 }}>Ingresa con tu correo y contraseña</Text>
      <TextInput placeholder="Correo" style={styles.input} />
      <TextInput placeholder="Contraseña" style={styles.input} />
      <Button style={styles.input}>Ingresa ahora!</Button>
      <Button style={{ ...styles.input, backgroundColor: "#ccff03" }}>
        Crea una cuenta!
      </Button>
      <View
        style={{
          flexDirection: "row",
          marginTop: 40,
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Button
          style={{
            backgroundColor: "#3b5998",
          }}
        >
          <AntDesign name="facebook-square" size={24} color="#fff" />
        </Button>
        <Button
          style={{
            backgroundColor: "#1da1f2",
          }}
        >
          <AntDesign name="twitter" size={24} color="#fff" />
        </Button>
        <Button
          style={{
            backgroundColor: "#db3236",
          }}
        >
          <AntDesign name="google" size={24} color="#fff" />
        </Button>
      </View>
      <StatusBar style="auto" />
      <Image
        source={require("./assets/shapes/shape1.png")}
        resizeMode="contain"
        style={{
          position: "absolute",
          bottom: -40,
          right: -60,
          height: 200,
          width: 200,
        }}
      />
      <Image
        source={require("./assets/shapes/shape2.png")}
        resizeMode="contain"
        style={{
          position: "absolute",
          top: -260,
          right: -60,
          height: 500,
          width: 500,
        }}
      />
      <Image
        source={require("./assets/shapes/shape3.png")}
        resizeMode="contain"
        style={{
          position: "absolute",
          bottom: 0,
          left: 20,
          height: 200,
          width: 200,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFDCA8",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  input: {
    width: "100%",
    marginTop: 20,
  },
});
