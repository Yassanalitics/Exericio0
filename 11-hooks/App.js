import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Name from './src/componentes/Name';
import Volume from './src/componentes/Volume';
import NumeroAleatorio from './src/componentes/NumeroAleatorio';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
<Name />
<Volume/>
<NumeroAleatorio/>
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
});
