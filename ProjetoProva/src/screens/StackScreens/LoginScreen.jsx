import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Button, TextInput, Title } from "react-native-paper";

export default function LoginScreen({ navigation }) {
  const [nickName, setNickname] = useState("");
  const [senha, setSenha] = useState("");

  async function handleLogin() {
    if (!nickName || !senha) {
      Alert.alert("Erro", "Preencha os dois campos!");
      return;
    }

    try {
      const userData = await AsyncStorage.getItem("@cinejornal_user");

      if (userData) {
        const user = JSON.parse(userData);

        if (user.nickName === nickName && user.senha === senha) {
          navigation.navigate("AppDrawer", {
            screen: "HomeTabs",
            params: { screen: "Catálogo" },
          });
                  } else {
          Alert.alert("Erro", "Nickname ou senha inválidos.");
        }
      } else {
        Alert.alert("Erro", "Nenhum usuário cadastrado.");
      }
    } catch (error) {
      Alert.alert("Erro", "Erro ao acessar os dados.");
    }
  }

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Login</Title>

      <TextInput
        label="Nickname"
        value={nickName}
        onChangeText={setNickname}
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        label="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />

      <Button mode="contained" onPress={handleLogin} style={styles.button}>
        Entrar
      </Button>
      <Button onPress={() => navigation.navigate("CadastroScreen")}>
        Não tem conta? Cadastre-se
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#fff" },
  title: { textAlign: "center", fontSize: 24, marginBottom: 24 },
  input: { marginBottom: 16 },
  button: { marginTop: 16 },
});
