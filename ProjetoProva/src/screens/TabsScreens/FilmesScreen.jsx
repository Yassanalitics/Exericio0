import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { TMDB_API_KEY } from "@env";
import { Card, Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function FilmesScreen() {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    buscarFilmesPopulares();
  }, []);

  async function buscarFilmesPopulares() {
    setCarregando(true);
    try {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=pt-BR&page=1`;
      const resposta = await axios.get(url);
      setFilmes(resposta.data.results);
    } catch (erro) {
      console.error(erro);
    }
    setCarregando(false);
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
      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }) => {
          if (!item.poster_path) return null;

          return (
            <Card style={estilos.cartao} elevation={3}>
              <View style={estilos.filmeCard}>
                <Image
                  style={estilos.poster}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
                  }}
                />
                <View style={{ flexShrink: 1 }}>
                  <Text style={estilos.titulo}>{item.title}</Text>
                  <Text style={estilos.subtitulo}>
                    {item.release_date || ""}
                  </Text>
                  <Text style={estilos.tipoMidia}>Filme</Text>
                </View>
              </View>
              <Card.Actions>
                <Button
                  mode="contained"
                  onPress={() =>
                    navigation.navigate("DescricaoFilme", { id: item.id, tipo: "movie" })
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
  filmeCard: {
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
    color: "#fff",
    fontWeight: "bold",
  },
  subtitulo: {
    color: "#ccc",
  },
  tipoMidia: {
    marginTop: 4,
    fontStyle: "italic",
    color: "#aaa",
  },
  cartao: {
    marginBottom: 15,
  },
});
