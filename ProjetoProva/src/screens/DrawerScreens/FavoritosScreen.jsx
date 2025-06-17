import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { List, Avatar, Button, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function FavoritosScreen() {
  const [favoritos, setFavoritos] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      carregarFavoritos();
    });
    return unsubscribe;
  }, [navigation]);

  async function carregarFavoritos() {
    try {
      const favs = await AsyncStorage.getItem("@favoritos");
      setFavoritos(favs ? JSON.parse(favs) : []);
    } catch (error) {
      console.error("Erro ao carregar favoritos", error);
    }
  }

  if (favoritos.length === 0) {
    return (
      <View style={styles.containerVazio}>
        <Text>Nenhum favorito salvo.</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={favoritos}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 10 }}
      renderItem={({ item }) => (
        <List.Item
          title={item.title || item.name}
          description={item.release_date || item.first_air_date || ""}
          left={() => (
            <Avatar.Image
              size={56}
              source={{
                uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
              }}
            />
          )}
          right={() => (
            <Button
              mode="contained"
              onPress={() =>
                navigation.navigate("DescricaoFilme", {
                  id: item.id,
                  tipo: item.media_type === "tv" ? "tv" : "movie",
                })
              }
            >
              Detalhes
            </Button>
          )}
          style={styles.item}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  containerVazio: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 6,
  },
});
