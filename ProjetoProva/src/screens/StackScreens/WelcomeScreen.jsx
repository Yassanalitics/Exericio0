import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import * as Animatable from 'react-native-animatable';
import { Button } from 'react-native-paper';


export default function WelcomeScreen() {
  const navigation = useNavigation(); 

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Animatable.Image
          animation="zoomIn"
          duration={2000}
          source={require("../../assets/Logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Registre. Descubra. Reviva memórias com o CineJornal.
        </Text>
      </View>

      <Button


        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles.button}
        labelStyle={styles.buttonText}
      >
        Acessar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    width: "200%",
    alignItems: "center",
  },
  logo: {
    width: 300,
    height: 300,
  },
  textContainer: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#1c245c',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 40,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
