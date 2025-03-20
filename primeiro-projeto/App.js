//imports dos componentes

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

//componente principal, retorna o que será renderizado na tela (tamplate feito com jsx)
export default function App() {
  function Acess(){
    alert("Você é lindo(a) como um girassol!!!!")
  }
    //retono com jsx e tudo fica dentro da tag view  
    //duas chaves para caso queira editar detro da celula
  return (
    <ScrollView>
    <View style={styles.container}>
      {/* aaaae */}
      <Text style={styles.txtoGrande}>FLORES</Text>
      <Text style={styles.txtonormal}>//////////❀///////////</Text>
      <Text style={styles.txto}>Girassóis</Text>
      <Image  source={require('./imagem/image2.png')}
        style={{height: 200, width: 500}}>
      </Image>
      <Text style={styles.txtonormal}>O girassol é uma flor que simboliza felicidade, vitalidade, lealdade, alegria, energia positiva, renovação, resiliência e vida eterna. Receber também significa isso.</Text>
      <Image  source={require('./imagem/3.png')}
        style={{height: 400, width: 500}}>
      </Image>
     
     <Text style={styles.txtonormal}>Uma referência ao girassol pode ser encontrada em Isaías 60:1-3, onde o girassol é usado como uma metáfora para a glória de Deus. O texto diz: "Levanta-te, resplandece, porque já vem a tua luz, e a glória do Senhor vai nascendo sobre ti.</Text>      
     <Image  source={require('./imagem/4.png')}
        style={{height: 500, width: 400}}>
      </Image>
    <Text style={styles.txtonormal}>Os girassóis são amplamente conhecidos por suas grandes flores amarelas que lembram o sol. Representam a busca pela luz e a felicidade, refletindo a maneira como essas flores seguem o sol ao longo do dia, e são ideais para celebrações e ocasiões que exigem um toque de alegria e luz.</Text>
    <Image  source={require('./imagem/6.png')}
        style={{height: 300, width: 400}}>
      </Image>
      <Text style={styles.txt}>Ganhar Girassóis é um ato de amor </Text>
      <Image  source={require('./imagem/5.png')}
        style={{height: 300, width: 400}}>
      </Image>
      <StatusBar style="auto" />
      <Button title= 'CLIQUE' onPress={Acess}></Button>
    
    </View>
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F1DE',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60,
    paddingLeft: 10,
  },
  txtoGrande: {
    fontSize: 50,
    fontWeight: 900,
    fontStyle: 'italic',
  },

  txtonormal: {
    fontSize: 30,
    fontWeight: 100,
    fontStyle: 'Helvetica',
  },
  txto:{
    fontSize: 60,
    fontWeight: 100,
    fontStyle: 'Helvetica ',
  },
  txt:{
    fontSize: 30,
    fontWeight: 100,
    fontStyle: ' Bebas Neue ',
  }
});