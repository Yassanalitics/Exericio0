import React, { useEffect, useState } from "react";
import {View, Text, FlatList, ActivityIndicator, Image, StyleSheet,
} from "react-native";
import axios from "axios";
import { TMDB_API_KEY } from "@env";
import { Card, TextInput, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";


export default function TelaInicial() {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [consulta, setConsulta] = useState("");
  const [carregandoPesquisa, setCarregandoPesquisa] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    buscarFilmesEmCartaz();
  }, []);

  async function buscarFilmesEmCartaz() {
    setCarregando(true);
    try {
      const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}&language=pt-BR&page=1`;
      const resposta = await axios.get(url);
      setFilmes(resposta.data.results);
    } catch (erro) {
      console.error(erro);
    }
    setCarregando(false);
  }

  async function buscarFilmes() {
    if (!consulta.trim()) return;
    setCarregandoPesquisa(true);
    try {
      const url = `https://api.themoviedb.org/3/search/multi?api_key=${TMDB_API_KEY}&language=pt-BR&page=1&query=${encodeURIComponent(
        consulta
      )}`;
      const resposta = await axios.get(url);
      setFilmes(resposta.data.results);
    } catch (erro) {
      console.error(erro);
    }
    setCarregandoPesquisa(false);
  }

  if (carregando) {
    return (
      <ActivityIndicator
        size="large"
        style={{ flex: 1, justifyContent: "center" }}
        color="#6200ee"
      />
    );
  }

  return (
    <View style={estilos.container}>
      <View style={estilos.containerPesquisa}>
        <TextInput
          label="Pesquisar filmes, séries..."
          mode="outlined"
          value={consulta}
          onChangeText={setConsulta}
          onSubmitEditing={buscarFilmes}
          returnKeyType="search"
          left={<TextInput.Icon name="magnify" />}
          style={estilos.campoPesquisa}
          autoCorrect={false}
          clearButtonMode="while-editing"
        />
        <Button
          mode="contained"
          onPress={buscarFilmes}
          loading={carregandoPesquisa}
          disabled={carregandoPesquisa}
          style={estilos.botaoBuscar}
        >
          Buscar
        </Button>
      </View>

      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }) => {
          if (
            !item.poster_path ||
            (item.media_type &&
              item.media_type !== "movie" &&
              item.media_type !== "tv")
          ) {
            return null;
          }
          return (
            <Card style={estilos.cartao} elevation={3}>
              <View style={estilos.cartaoFilme}>
                <Image
                  style={estilos.poster}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
                  }}
                />
                <View style={{ flexShrink: 1 }}>
                  <Text style={estilos.titulo}>{item.title || item.name}</Text>
                  <Text style={estilos.subtitulo}>
                    {item.release_date || item.first_air_date || ""}
                  </Text>
                  <Text style={estilos.tipoMidia}>
                    {item.media_type === "movie"
                      ? "Filme"
                      : item.media_type === "tv"
                      ? "Série"
                      : ""}
                  </Text>
                </View>
              </View>
              <Card.Actions>
                <Button
                  mode="contained"
                  onPress={() => navigation.navigate("DescricaoFilme", {
                      id: item.id,
                      tipo: "movie",
                    })
                  }
                >
                  Ver detalhes
                </Button>
              </Card.Actions>
            </Card>
          );
        }}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c245c",
    padding: 10,
  },
  cartaoFilme: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "center",
    marginHorizontal: 10,
  },
  poster: {
    width: 80,
    height: 120,
    borderRadius: 6,
    marginRight: 10,
  },
  titulo: {
    fontSize: 16,
    flexShrink: 1,
    color: "#000000",
    fontWeight: "bold",
  },
  subtitulo: {
    color: "#000000",
  },
  tipoMidia: {
    marginTop: 4,
    fontStyle: "italic",
    color: "#aaa",
  },
  cartao: {
    paddingTop: 15,
    marginBottom: 15,
  },
  containerPesquisa: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "center",
  },
  campoPesquisa: {
    flex: 1,
    marginRight: 10,
    backgroundColor: "#fff",
  },
  botaoBuscar: {
    justifyContent: "center",
  },
});
