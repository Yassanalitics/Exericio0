import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Button, TextInput, Title } from "react-native-paper";
import { TextInputMask } from 'react-native-masked-text'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CadastroScreen({ navigation, route }){
    const [nome, setNome] = useState ("");
    const [DataNascimento, setDataNascimento] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function InfoCadastro(){
        if (!nome || !DataNascimento || !email || !senha){
            Alert.alert('Erro', 'preencha todos os dados!');
            return;
        }
        const user = {nome, DataNascimento, email, senha};
        try{
            await AsyncStorage.setItem('@cinejornal_user', JSON.stringify(user));
            Alert.alert ('Sucesso!', 'Cadastro realizado!')
            navigation.navigate('LoginScreen')
        } catch (error){
            Alert.alert('Falha ao salvar usuário.');
                }
    }
    return(
        <View style={styles.container}>
            <Title>Faça seu Cadastro!</Title>
            <TextInput 
            mode="outlined"
            label="Nome" 
            value={nome} 
            onChangeText={setNome} 
            style={styles.input}/>

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
            options={{
              format: 'DD/MM/YYYY'
            }}
          />
        )}
         />
             
            <TextInput
              mode="outlined"
              label="E-mail"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              keyboardType='email-address'
            />
            <TextInput
            mode="outlined"
            label="Senha"
            value={senha}
            onChangeText={setSenha}
            style={styles.input}
            
            />
            <Button 
            mode="contained"
            onPress={InfoCadastro}
            style={styles.button}
            >
            Salvar 
            </Button>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
    input: { marginBottom: 16 },
    button: { marginTop: 16 },
  });