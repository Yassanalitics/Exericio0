//imports dos componentes

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

//componente principal, retorna o que será renderizado na tela (tamplate feito com jsx)
export default function App() {
  //retono com jsx e tudo fica dentro da tag view  
  const nome = "Bruno "
  function Acess(){
    alert("Acesso bem sucedido")
  }
  return (
    <View style={styles.container}>
      {/* aaaae */}
      <Text> {2*2} </Text>
      <Text> {nome} </Text>
      <Text>aaaaaaaaaaa</Text>
      <StatusBar style="auto" />
      <Button title= 'Acessar' onPress={Acess}></Button>
      <Image source={{ uri: 'https://centric.com.br/wp-content/uploads/2021/10/50076_Centric_Artigo22_capablog.png'}} 
      style={{height: 300, width: 300}}>
      </Image>

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
