import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function CountryPage(props) {
  const countryData = props.route.params.country;

  let [capital, setCapital] = useState("");
  let [language, setLanguage] = useState("");
  let [callingCode, setCallingCode] = useState("");
  let [currency, setCurrency] = useState("");
  let [population, setPopulation] = useState("");

  useEffect(() => {
    async function fetchData() {
      let res1 = await fetch(
        `https://restcountries.eu/rest/v2/name/${countryData}`
      );
      let res2 = await res1.json();
      let infoCountry = res2[0];
      console.log(infoCountry);
      setCapital(infoCountry.capital);
      setLanguage(infoCountry.languages[0].name);
      setCallingCode(infoCountry.callingCodes);
      setCurrency(infoCountry.currencies[0].name);
      setPopulation(infoCountry.population);
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.countrynamebar}>
        <Text style={styles.countryName}>{countryData}</Text>
      </View>
      <View>
        <Image
          source={{
            uri: `https://source.unsplash.com/1600x900/?${countryData}`,
          }}
          style={styles.image}
        />
      </View>
      <ScrollView>
        <View style={styles.informationpair}>
          <Text style={styles.boldtext}>Capital</Text>
          <Text>{capital}</Text>
        </View>
        <View style={styles.informationpair}>
          <Text style={styles.boldtext}>Language</Text>
          <Text>{language}</Text>
        </View>
        <View style={styles.informationpair}>
          <Text style={styles.boldtext}>Calling code</Text>
          <Text>{callingCode}</Text>
        </View>
        <View style={styles.informationpair}>
          <Text style={styles.boldtext}>Currency</Text>
          <Text>{currency}</Text>
        </View>
        <View style={styles.informationpair}>
          <Text style={styles.boldtext}>Population</Text>
          <Text>{population}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
  },
  countrynamebar: {
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    elevation: 10,
  },
  countryName: { fontSize: 40 },
  image: { width: "100%", height: 250 },
  informationpair: { width: "100%", padding: 15 },
  boldtext: { fontWeight: "bold" },
});
