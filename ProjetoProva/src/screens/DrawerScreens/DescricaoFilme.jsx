import React, { useEffect, useState } from "react";
import { ScrollView, View, Image, StyleSheet, ActivityIndicator} from "react-native";
import axios from "axios";
import { TMDB_API_KEY } from "@env";
import { Title, Text, Button, TextInput, Card } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DescricaoFilme() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id, tipo } = route.params;

  const [detalhes, setDetalhes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [anotacoes, setAnotacoes] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/${tipo}/${id}?api_key=${TMDB_API_KEY}&language=pt-BR`)
      .then((res) => setDetalhes(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [id, tipo]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#CF0F47" />
      </View>
    );
  }

  if (!detalhes) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "#fff" }}>Erro ao carregar detalhes.</Text>
      </View>
    );
  }
  async function salvarDiario() {
    try {
      const novosDados = {
        id,
        tipo,
        titulo: detalhes.title || detalhes.name,
        poster: detalhes.poster_path,
        anotacoes,
      };
      const diariosSalvos = await AsyncStorage.getItem("@diario");
      const diarios = diariosSalvos ? JSON.parse(diariosSalvos) : [];
      const existe = diarios.find((item) => item.id === id);
      let novosDiarios;
      if (existe) {
        novosDiarios = diarios.map((item) =>
          item.id === id ? { ...item, anotacoes } : item
        );
      } else {
        novosDiarios = [...diarios, novosDados];
      }
      await AsyncStorage.setItem("@diario", JSON.stringify(novosDiarios));
      alert("Anotação salva no diário!");
    } catch (erro) {
      console.error("Erro ao salvar diário:", erro);
      alert("Erro ao salvar anotação.");
    }
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1c245c" }}>
      <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${detalhes.poster_path}` }}
          style={styles.image}
          
        />
      </View>

      <Title style={styles.title}>{detalhes.title || detalhes.name}</Title>

      <Text style={styles.subtitle}>
        {tipo === "movie"
          ? `Lançamento: ${detalhes.release_date || "N/A"}`
          : `Primeiro Episódio: ${detalhes.first_air_date || "N/A"}`}
      </Text>

      <Title style={styles.sectionTitle}>Sinopse</Title>
      <Text style={styles.text}>{detalhes.overview || "Sem sinopse disponível."}</Text>

      <Title style={styles.sectionTitle}>Avaliação</Title>
      <Text style={styles.text}>{detalhes.vote_average} / 10</Text>

  <Card style={{ marginTop: 24, backgroundColor: "#2e387e", padding: 10 }}>
  <Text style={{ color: "#fff", marginBottom: 8 }}>Anotações</Text>
  <TextInput
    mode="outlined"
    multiline
    numberOfLines={4}
    value={anotacoes}
    onChangeText={setAnotacoes}
    placeholder="Escreva algo sobre esse filme..."
    style={{ backgroundColor: "#fff", marginBottom: 10 }}
  />
  <Button mode="contained" onPress={salvarDiario}>
    Salvar no Diário
  </Button>
  
 
</Card>
<Button mode="contained" style={styles.button} onPress={() => navigation.goBack()}>
        Voltar
      </Button>
    </ScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#1c245c",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c245c",
  },
  imageWrapper: {
    width: "100%",
    height: 350,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 16,
    alignSelf: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  title: {
    color: "#CF0F47",
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 4,
  },
  subtitle: {
    color: "#ddd",
    fontSize: 14,
    marginBottom: 16,
  },
  sectionTitle: {
    color: "#CF0F47",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    marginTop: 16,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 22,
  },
  button: {
    marginTop: 24,
    backgroundColor: "#D76C82",
    alignSelf: "center",
    width: "50%",
  },
});
