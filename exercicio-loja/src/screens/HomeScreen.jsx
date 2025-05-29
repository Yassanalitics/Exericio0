import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Avatar, Card, IconButton, MD2Colors, Text } from 'react-native-paper';

export default function HomeScreen({ navigation, route }) {
    // Um estado para armazenar os usuário recebidos
    const [categories, setCategories] = useState([])

    // Faz algo quando o componente é montado
    useEffect(() => {
        axios.get("https://dummyjson.com/products/categories")
        .then(resposta => {
                console.log(resposta.data)
                setCategories(resposta.data)
            })
            .catch(erro => {
                alert('Eroo ao comunicar com a API!!')
            })
    }, [])

    return (
        <View style={StyleSheet.container}>
            <FlatList
                data={categories}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Card
                        Style={{ margin: 5 }}
                        onPress={() => navigation.navigate('ListaProdutosScreen', { categoria: item.slug })}
                    >
                        <Card.Title
                            title={item.name}
                        />


                    </Card>

                )}
                ListEmptyComponent={() => (
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator animating={true} color="#C62828" size={80} />
                        <Text variant='titleLarge'>Aguarde...</Text>
                    </View>
                )}

            />


        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        marginBottom: 10,
    },
});
