import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { Button, TextInput, Title } from "react-native-paper";


export default function LoginScreen({ navigation, route }) {
    const [email, setEmail] = useState ("");
    const [senha, setSenha] = useState("");

    async function infoLogin() {
        if(!email || !senha){
            Alert.alert('Erro', 'Preencha os dois campos!');
            return;
        }
        try{
            const userData = await AsyncStorage.getItem('@cinejornal_user');
            if (user && user.email && user.senha === senha){
                navigation.navigate('HomeScreen');
            }
            else{
                Alert.alert('Erro', 'Email ou senha inválidos.');
        
            } 
            
        }catch (error){
            Alert.alert('Erro', 'Email ou senha Erro ao acessar dos dados.');      
        }

    }
  return (
    <View style={styles.container}>
    <Title>Login</Title>

    <TextInput label="Email" value={email} onChangeText={setEmail} style={styles.input} />
    <TextInput label="Senha" value={senha} onChangeText={setSenha} secureTextEntry style={styles.input} />

    <Button mode="contained" onPress={infoLogin} style={styles.button}>Entrar</Button>
    <Button onPress={() => navigation.navigate('Cadastro')}>Não tem conta? Cadastre-se</Button>
  </View>
);
}

const styles = StyleSheet.create({
container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#fff' },
input: { marginBottom: 16 },
button: { marginTop: 16 },
});e