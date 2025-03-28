import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Filme from './componentes/Filme';
import Series from './componentes/Series';
export default function App() 
{
  const listaFilmes = [
    {
    "nome": "A Doce Vida",
    "ano": 1960,
    "diretor": "Federico Fellini",
    "tipo": "Drama",
    "capa": "https://i.pinimg.com/236x/17/0d/3a/170d3aa231830a778956e35b87ad1846.jpg"
    },
    { 
    "nome": "Psicose",
    "ano": 1960,
    "diretor": "Alfred Hitchcock",
    "tipo": "Terror",
    "capa": "https://i.pinimg.com/236x/e4/84/72/e484729535437d2e79882c359111db56.jpg"
     },
    { 
    "nome": "O Beijo da Mulher Aranha",
    "ano": 1985,
    "diretor": "Hector Babenco",
    "tipo": "Drama",
    "capa": "https://i.pinimg.com/236x/be/e3/b1/bee3b19202304a918277484f2ac22d0f.jpg"
    },
    {
    "nome": "Poltergeist - O Fenômeno",
    "ano": 1982,
    "diretor": "Tobe Hooper",
    "tipo": "Terror",
    "capa": "https://i.pinimg.com/236x/e9/93/a7/e993a7d3b8991176e91f007321262c27.jpg"
    }
  ]

    const listaSeries = [
      {
      "nome": "Buffy, a Caça-Vampiros",
      "ano": 1997,
      "diretor": "Joss Whedon",
      "temporadas": 7,
      "capa": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Buffy_the_vampire_slayer.svg/250px-Buffy_the_vampire_slayer.svg.png"
      },
      {
      "nome": "Desperate Housewives",
      "ano": 2004,
      "diretor": "Marc Cherry",
      "temporadas": 8,
      "capa": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Desperate_Housewives_Logo.svg/250px-Desperate_Housewives_Logo.svg.png"
      },
      {
      "nome": "Sons of Anarchy",
      "ano": 2008,
      "diretor": "Kurt Sutter",
      "temporadas": 7,
      "capa": "https://upload.wikimedia.org/wikipedia/pt/7/7b/SOATitlecard.jpg"
      }
      ]

  return (
    <ScrollView>
    <View style={styles.container}>
      <StatusBar style="auto" />

   {
    listaFilmes.map((filme)=>{
          return(
            <Filme
            nome={filme.nome}
              ano={filme.ano}
              diretor={filme.diretor}
              tipo={filme.tipo}
              capa={filme.capa}
            />
          )
        }
      )
    },
    {
      listaSeries.map((series)=>{
            return(
              <Series
              nome={series.nome}
              ano={series.ano}
              diretor={series.diretor}
              temopradas={series.temporadas}
              capa={series.capa}
              />
            )
          }
        
      )
    }
     
    </View>
    </ScrollView>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },
});
