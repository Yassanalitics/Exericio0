import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Animatable.Image
                animation="bounceIn"
                duration={1500}        
          source={require('../../src/assets/Logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Registre. Descubra. Reviva memórias com o CineJornal.
        </Text>
      </View>

      <View>
      <Button
      style={{margin: 10}}
      mode='contained'
      onPress={() => navigation.navigate('loginScreen')}
      >
     Acessar
      </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    width: '200%',
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 300,
  },
  textContainer: {
    marginTop: 24,
    paddingHorizontal: 20,
    borderRadius:15
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
  },
});
