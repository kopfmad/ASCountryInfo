import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./Home";
import CountryPage from "./CountryPage";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ASCountryInfo">
        <Stack.Screen
          name="ASCountryInfo"
          component={Home}
          options={{
            headerStyle: { backgroundColor: "#739af0" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="CountryPage"
          component={CountryPage}
          options={{
            headerTitle: "Learn about the country!!!",
            headerStyle: { backgroundColor: "#739af0" },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
