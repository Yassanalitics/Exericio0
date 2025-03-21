import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import PrimeiroComponente from "./components/PrimeiroComponente";
import SegundoComponente from "./components/SegundoComponnte";
import JavasciptComponente from "./components/JavasciptComponente";
import Perfil from "./components/Perfil";

export default function App() {
  return (
    <View style={styles.container}>
      <PrimeiroComponente />
      <SegundoComponente />
      <JavasciptComponente />
      <Perfil nome="Yasmin" idade= {19} altura= {1.65}/>
      <Perfil nome="Yasmin" idade= {19} altura= {1.65}/>
      <Perfil nome="Yasmin" idade= {19} altura= {1.65}/>
      <Perfil nome="Yasmin" idade= {19} altura= {1.65}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBE8DB",
    alignItems: "center",
    justifyContent: "center",
  },
});
