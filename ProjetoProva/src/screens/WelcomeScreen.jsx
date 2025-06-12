import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
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
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    fontWeight:'bold',
    
   
  },
  button:{
   // position:"absolute",
    backgroundColor: '#1c245c',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
   //  bottom:'20%',
    alignItems:'center',
    justifyContent:'center',
    marginTop:'5%'
  },
  buttonText:{
    fontSize: 18,
    color: '#fff',
    fontWeight:'bold',
  }
});

