import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { PaperProvider, Text } from 'react-native-paper';

export default function App() {
  const  ListadeFavs =[
    {
      nome:'Jojo Bizarre Adventure',
      imagem: 'https://i.pinimg.com/474x/a0/ea/c9/a0eac9c611f89cf008da6aceea28fc4a.jpg',
      descricao: "JoJos Bizarre Adventure é um anime e mangá que conta a história da família Joestar, que enfrenta inimigos sobrenaturais. Cada temporada tem um protagonista com o nome de JoJo",
      personagens: [
        {
          nome:'Jotaro kujo',
          imagem:'https://i.pinimg.com/474x/b6/c3/2b/b6c32bb46f99096c22b0e7af2e448ea7.jpg',
        },
        {
          nome:'Joseph Joestar',
          imagem:'https://i.pinimg.com/474x/51/c2/fa/51c2fa1b372c567c02ad0d7d3f998598.jpg',
        },
        {
          nome:'Josuke Higashikata ',
          imagem:'https://i.pinimg.com/474x/4d/55/a6/4d55a6f9cdffe2dab7c4440b0dc1d58c.jpg',
        },
        {
          nome:'Johnny Joestar',
          imagem:'https://i.pinimg.com/474x/45/cf/f7/45cff74536bba542441d555f9578b521.jpg',
        },
      ]
    },
    {
      nome:'Viland Saga',
      imagem: 'https://picsum.photos/700',
      descricao: 'Após o assassinato do pai, o jovem Thorfinn entra para o bando de mercenários comandado pelo assassino e tenta encontrar a chance perfeita de se vingar.',
      personagens: [
        {
          nome:'Thorfinn',
          imagem:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSytR_YLRpA9I7y6JTIO5B1guxDFCOnpqcLVYF_oqXEcVhVMG3kOGVJGYTIKdPMf597pWalWLqH0UJY9fxAw65g0aR97-mHhWb8NpVp5_aVPA',
        },
        {
          nome:' Askeladd',
          imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyul4Z9EOrC7HiMdMIwUCVS7qrGfAYE9Wb9NX3GrBWFZHkiMlzDXOdtvayX-Hb556C9LZfSM7d2KbUm8XrnOaHKATwB1ozrynuLDcuC6RuYg',
        },
        {
          nome:'Thorkell',
          imagem:' https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRqMaCV4eWQwc6djWcMLVDMFgz4EmX33wkTyGkoNUeeP6SVYWAOykO6vXIOeC80XIW-Kb55mWoNpYuGb7klQi5KvjE0ZKym_XOSFhFMbDVbZ',
        },
        {
          nome:'thors',
          imagem:'https://i.pinimg.com/236x/4a/e2/b8/4ae2b8d8d43e7ca17a64c1daaaa50f52.jpg',
        },
      ]
    },
    {
      nome:'kusuriya no hitorigoto',
      imagem: 'https://picsum.photos/700',
      descricao: 'Ambientada em um país fictício, baseado na China Imperial durante a Dinastia Tang, a série segue Maomao, uma jovem que trabalhava como apotecária em um distrito periférico, que é sequestrada e vendida ao Palácio Imperial como serva.',
      personagens: [
        {
          nome:'Maomao',
          imagem:'https://i.pinimg.com/236x/2b/92/73/2b92734e7831d2393df81a5931d39521.jpg',
        },
        {
          nome:'Jinshi',
          imagem:'https://i.pinimg.com/474x/fb/be/a4/fbbea44002c8d9d4a9d08f6bedd902ca.jpg',
        },
        {
          nome:'Ah-duo',
          imagem:'https://br.pinterest.com/pin/55239532922140201/',
        },
        {
          nome:'Gyokuyou',
          imagem:'https://i.pinimg.com/474x/9d/f5/97/9df597877c0926ee9f81ed95fa7af94e.jpg',
        },
      ]
    },
    {
      nome:'Kimetsu no yaiba',
      imagem: 'https://picsum.photos/700',
      descricao: ' A jornada de Tanjiro Kamado, um jovem que se torna um caçador de demônios para salvar sua irmã Nezuko, que foi transformada em um demônio. ',
      personagens: [
        {
          nome:'Tanjiro kamado',
          imagem:'https://i.pinimg.com/474x/b6/a0/64/b6a064006e8965bdd40128bbc8618a54.jpg',
        },
        {
          nome:'Nezuko kamado',
          imagem:'https://i.pinimg.com/474x/9e/51/3b/9e513b855ba34a211dd953eac194f314.jpg',
        },
        {
          nome:'Muzan Kibutsuji',
          imagem:'https://i.pinimg.com/474x/ae/08/57/ae08572a48e198a9508688529b08d3c9.jpg',
        },
        {
          nome:'Inosuke Hashibira',
          imagem:'https://i.pinimg.com/474x/51/42/c4/5142c47ee999474c841d8074f519d15a.jpg',
        },
      ]
    },

  ]
  return (
    <PaperProvider> 
   <View style={styles.container}>
      <StatusBar style="auto" />
      <Text variant='displaySmall'>Lista de Animes</Text>
      
      <FlatList
      data={ListadeFavs}
      renderItem={({item}) => (
        <Animes
        nome={item.nome}
        descricao={item.descricao}
        />
      )}
      />
    </View>
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9FB3DF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
});
