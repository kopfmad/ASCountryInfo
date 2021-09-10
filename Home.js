import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";

export default function Home(props) {
  let [country, setCountry] = useState("");

  return (
    <View style={styles.container}>
      <LottieView
        source={require("./assets/flag180.json")}
        autoPlay
        style={{ width: 200, height: 200, marginBottom: 30 }}
        loop={false}
        speed={0.5}
      />
      <Text style={styles.searchthecountry}>Search the country</Text>
      <TextInput
        placeholder="e.g. Portugal"
        style={styles.input}
        onChangeText={(value) => setCountry(value)}
        value={country}
      />
      <Text style={styles.press}>Press the animated icon to search</Text>
      <TouchableOpacity
        style={{ width: "100%", height: 100 }}
        onPress={() => {
          props.navigation.navigate("CountryPage", { country: country });
        }}
      >
        <View style={{ width: "100%", height: "100%" }}>
          <LottieView source={require("./assets/search.json")} autoPlay loop />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  searchthecountry: { fontSize: 30, marginVertical: 10, color: "black" },
  input: {
    borderColor: "gray",
    borderWidth: 2,
    padding: 10,
    width: "66%",
    textAlign: "center",
  },
  press: { color: "black", margin: 20 },
});
