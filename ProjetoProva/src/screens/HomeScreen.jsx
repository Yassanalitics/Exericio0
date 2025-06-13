import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { TMDB_API_KEY } from '@env';
import { Card } from 'react-native-paper';

export default function HomeScreen() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=pt-BR&page=1`;

    axios.get(url)
      .then(response => {
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor:'#1c245c' }}>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <View style={styles.movieCard}>
            <Image
              style={styles.poster}
              source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
            />
            <Text style={styles.title}>{item.title}</Text>
          </View>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  movieCard: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
    marginHorizontal: 10
  },
  poster: {
    width: 80,
    height: 120,
    borderRadius: 6,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    flexShrink: 1,
  },
  card:{
    paddingTop: 15,
    marginBottom: 15,

  }
});
