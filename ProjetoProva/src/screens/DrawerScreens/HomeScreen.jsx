import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, ActivityIndicator, Image} from "react-native";
import api from "../../api";
import { Card, TextInput, Button, IconButton, List } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function TelaInicial() {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [consulta, setConsulta] = useState("");
  const [carregandoPesquisa, setCarregandoPesquisa] = useState(false);
  const [favoritosIds, setFavoritosIds] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    buscarFilmesEmCartaz();
    carregarFavoritos();
  }, []);

  async function buscarFilmesEmCartaz() {
    setCarregando(true);
    try {
      const resposta = await api.get(
        "/movie/now_playing?language=pt-BR&page=1"
      );
      setFilmes(resposta.data.results);
    } catch (erro) {
      console.error("Erro ao buscar filmes em cartaz:", erro.message);
    }
    setCarregando(false);
  }

  async function buscarFilmes() {
    if (!consulta.trim()) return;
    setCarregandoPesquisa(true);
    try {
      const resposta = await api.get(
        `/search/multi?language=pt-BR&page=1&query=${encodeURIComponent(
          consulta
        )}`
      );
      setFilmes(resposta.data.results);
    } catch (erro) {
      console.error("Erro ao buscar filmes:", erro.message);
    }
    setCarregandoPesquisa(false);
  }

  async function carregarFavoritos() {
    try {
      const favs = await AsyncStorage.getItem("@favoritos");
      if (favs) {
        setFavoritosIds(JSON.parse(favs).map((f) => f.id));
      }
    } catch (error) {
      console.error("Erro ao carregar favoritos", error);
    }
  }

  async function toggleFavorito(item) {
    try {
      const favs = await AsyncStorage.getItem("@favoritos");
      let favoritos = favs ? JSON.parse(favs) : [];

      const existe = favoritos.find((fav) => fav.id === item.id);

      if (existe) {
        favoritos = favoritos.filter((fav) => fav.id !== item.id);
      } else {
        favoritos.push(item);
      }
      await AsyncStorage.setItem("@favoritos", JSON.stringify(favoritos));
      setFavoritosIds(favoritos.map((f) => f.id));
    } catch (error) {
      console.error("Erro ao alterar favoritos", error);
    }
  }
  if (carregando) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#6200ee" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.searchArea}>
        <TextInput
          label="Pesquisar filmes, séries..."
          mode="outlined"
          value={consulta}
          onChangeText={setConsulta}
          onSubmitEditing={buscarFilmes}
          returnKeyType="search"
          left={<TextInput.Icon icon="magnify" />}
          style={styles.input}
        />
        <Button
          mode="contained"
          onPress={buscarFilmes}
          loading={carregandoPesquisa}
          disabled={carregandoPesquisa}
          style={styles.botaoBuscar}
        >
          Buscar
        </Button>
      </View>
      <FlatList
        data={filmes}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }) => {
          if (!item.poster_path) return null;

          const isFavorito = favoritosIds.includes(item.id);
          const tipo =
            item.media_type === "tv"
              ? "Série"
              : item.media_type === "movie"
              ? "Filme"
              : "Filme";
          return (
            <Card style={styles.card} elevation={3}>
              <List.Item
                title={item.title || item.name}
                description={`${item.release_date || item.first_air_date || ""} • ${tipo}`}
                titleStyle={{ color: "white" }}
                descriptionStyle={{ color: "white" }}
                left={() => (
                  <View style={styles.posterContainer}>
                    <Image
                      source={{
                        uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
                      }}
                      style={styles.poster}
                      resizeMode="cover"
                    />
                  </View>
                )}
                right={() => (
                  <IconButton
                    icon={isFavorito ? "heart" : "heart-outline"}
                    iconColor={isFavorito ? "red" : "white"}
                    onPress={() => toggleFavorito(item)}
                  />
                )}
              />
              <Card.Actions style={{ justifyContent: "flex-end" }}>
                <Button
                  mode="contained"
                  onPress={() =>
                    navigation.navigate("DescricaoFilme", {
                      id: item.id,
                      tipo: tipo === "Série" ? "tv" : "movie",
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c245c",
    padding: 10,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  searchArea: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "center",
    gap: 10,
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
  },
  botaoBuscar: {
    marginLeft: 8,
  },
  posterContainer: {
    width: 80,
    height: 120,
    borderRadius: 6,
    overflow: "hidden",
    marginRight: 12,
  },
  poster: {
    width: "100%",
    height: "100%",
  },
  card: {
    marginBottom: 15,
    //borderRadius: 8,
    backgroundColor: "#2b336b",
  },
});
