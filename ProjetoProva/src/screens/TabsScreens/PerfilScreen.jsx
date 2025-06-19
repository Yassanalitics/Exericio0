import React, { useState, useEffect } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button, Title } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";

export default function PerfilScreen({ navigation }) {
  const [user, setUser] = useState({
    nome: "",
    DataNascimento: "",
    email: "",
    senha: "",
    nickname: "",
  });
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const carregandoDados = async () => {
    try {
      const dados = await AsyncStorage.getItem("@cinejornal_user");
      if (dados) {
        setUser(JSON.parse(dados));
      }
    } catch (error) {
      Alert.alert("Erro", "Não foi possível carregar os dados.");
    }
  };
  const validarCampos = () => {
    if (!user.nome.trim()) {
      Alert.alert("Erro", "Preencha seu nome completo.");
      return false;
    }

    if (!user.nickname.trim() || user.nickname.length < 3) {
      Alert.alert("Erro", "Nickname deve ter pelo menos 3 letras.");
      return false;
    }

    if (!user.DataNascimento.trim()) {
      Alert.alert("Erro", "Preencha a data de nascimento.");
      return false;
    }

    const emailValido = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(user.email);
    if (!user.email.trim() || !emailValido) {
      Alert.alert("Erro", "Digite um e-mail válido.");
      return false;
    }

    if (!user.senha || user.senha.length < 6) {
      Alert.alert("Erro", "A senha deve ter no mínimo 6 caracteres.");
      return false;
    }

    return true;
  };
  const salvarNovo = async () => {
    if (!validarCampos()) return;

    try {
      await AsyncStorage.setItem("@conejornal_user", JSON.stringify(user));
      Alert.alert("Sucesso", "Dados atualizados!");
    } catch (error) {
      Alert.alert("Erro", "Não foi possível salvar os dados.");
    }
  };
  const excluirCadastro = async () => {
    Alert.alert("Confirmação", "Deseja mesmo excluir seu cadastro?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Excluir",
        style: "destructive",
        onPress: async () => {
          try {
            await AsyncStorage.removeItem("@cinejornal_user");
            Alert.alert("Sucesso", "Cadastro excluído!");
            navigation.navigate("LoginScreen");
          } catch (error) {
            Alert.alert("Erro", "Não foi possível excluir.");
          }
        },
      },
    ]);
  };

  useEffect(() => {
    carregandoDados();
  }, []);

  return (
    <View style={styles.container}>
      <Title>Seu Perfil</Title>

      <TextInput
        label="Nome completo"
        value={user.nome}
        onChangeText={(text) => setUser({ ...user, nome: text })}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Nickname"
        value={user.nickName}
        onChangeText={(text) => setUser({ ...user, nickName: text })}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="Data de nascimento"
        value={user.DataNascimento}
        onChangeText={(text) => setUser({ ...user, DataNascimento: text })}
        style={styles.input}
        mode="outlined"
      />
      <TextInput
        label="E-mail"
        value={user.email}
        onChangeText={(text) => setUser({ ...user, email: text })}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        mode="outlined"
      />
      <TextInput
        label="Senha"
        value={user.senha}
        onChangeText={(text) => setUser({ ...user, senha: text })}
        style={styles.input}
        secureTextEntry={!mostrarSenha}
        mode="outlined"
        right={
                  <TextInput.Icon
                    icon={mostrarSenha ? 'eye-off' : 'eye'}
                    onPress={() => setMostrarSenha(!mostrarSenha)}
                  />
                }
      />

      <Button mode="contained" onPress={salvarNovo} style={styles.button}>
        Salvar Alterações
      </Button>
      <Button
        mode="outlined"
        onPress={excluirCadastro}
        style={styles.button}
        textColor="red"
      >
        Excluir Conta
      </Button>
      <Button mode="contained" style={styles.voltar} onPress={() => navigation.goBack()}>
        Voltar
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 12,
  },
});
