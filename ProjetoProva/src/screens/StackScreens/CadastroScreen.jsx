import React, { useState } from "react";
import { View, StyleSheet, Alert, ScrollView } from "react-native";
import { Button, TextInput, Title, HelperText } from "react-native-paper";
import { TextInputMask } from 'react-native-masked-text';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CadastroScreen({ navigation, route }) {
  const [nome, setNome] = useState("");
  const [DataNascimento, setDataNascimento] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nickName, setNickname] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [errors, setErrors] = useState({});

  const validarCampos = () => {
    const novosErros = {};

    if (!nome.trim()) novosErros.nome = 'Preencha seu nome completo';

    if (!nickName.trim()) {
      novosErros.nickName = 'Nickname é obrigatório';
    } else if (nickName.length < 3) {
      novosErros.nickName = 'Use pelo menos 3 letras';
    }

    if (!DataNascimento.trim()) novosErros.DataNascimento = 'Data de nascimento obrigatória';

    if (!email.trim()) {
      novosErros.email = 'E-mail é obrigatório';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      novosErros.email = 'E-mail inválido';
    }

    if (!senha.trim()) {
      novosErros.senha = 'Senha é obrigatória';
    } else if (senha.length < 6) {
      novosErros.senha = 'Mínimo de 6 caracteres';
    }

    setErrors(novosErros);
    return Object.keys(novosErros).length === 0;
  };

  async function InfoCadastro() {
    if (!validarCampos()) return;

    const user = { nome, DataNascimento, email, senha, nickName };
    try {
      await AsyncStorage.setItem('@cinejornal_user', JSON.stringify(user));
      Alert.alert('Sucesso!', 'Cadastro realizado!');
      navigation.navigate('LoginScreen');
    } catch (error) {
      Alert.alert('Erro', 'Falha ao salvar usuário.');
    }
  }
  return (
    <ScrollView>
      <View style={styles.container}>
      <Title>Faça seu Cadastro!</Title>

   
     <TextInput
        mode="outlined"
        label="Nome completo"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
        maxLength={50}     
      />
      <HelperText type="error" visible={!!errors.nome}>
        {errors.nome}
      </HelperText>

      <TextInput
        mode="outlined"
        label="NickName"
        value={nickName}
        onChangeText={setNickname}
        style={styles.input}
        maxLength={20}
        right={<TextInput.Affix text={`${nickName.length}/20`} />}
      />
      <HelperText type="error" visible={!!errors.nickName}>
        {errors.nickName}
      </HelperText>

      <TextInput
        mode="outlined"
        label="Data de Nascimento"
        value={DataNascimento}
        onChangeText={setDataNascimento}
        style={styles.input}
        keyboardType='numeric'
        placeholder='01/01/2000'
        render={(props) => (
          <TextInputMask
            {...props}
            type={'datetime'}
            options={{ format: 'DD/MM/YYYY' }}
          />
        )}
      />
      <HelperText type="error" visible={!!errors.DataNascimento}>
        {errors.DataNascimento}
      </HelperText>

      <TextInput
        mode="outlined"
        label="E-mail"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType='email-address'
        autoCapitalize='none'
        placeholder='exemplo@email.com'
      />
      <HelperText type="error" visible={!!errors.email}>
        {errors.email}
      </HelperText>

      <TextInput
        mode="outlined"
        label="Senha"
        value={senha}
        onChangeText={setSenha}
        style={styles.input}
        secureTextEntry={!mostrarSenha}
        right={
          <TextInput.Icon
            icon={mostrarSenha ? 'eye-off' : 'eye'}
            onPress={() => setMostrarSenha(!mostrarSenha)}
          />
        }
        maxLength={16}
        placeholder='Mínimo de 6 caracteres'
      />
      <HelperText type="error" visible={!!errors.senha}>
        {errors.senha}
      </HelperText>

      <Button
        mode="contained"
        onPress={InfoCadastro}
        style={styles.button}
      >
        Salvar
      </Button>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
     padding: 20,
    backgroundColor: '#fff',
    paddingTop: '30%',
   },
  input: {
     marginBottom: 8,
     color: '#bdccdd',
    },
  button: {
     marginTop: 16 
    },
});
