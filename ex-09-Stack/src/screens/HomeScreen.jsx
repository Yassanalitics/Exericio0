import React from 'react';
import { View, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const receitas = [
  {
    id: 1,
    nome: "Escondidinho de Carne Seca",
    tempoPreparo: "1 hora",
    porcoes: 6,
    imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbRwmp6cW6T5lEPZ85HJQUXefM13YQuEqjJg&s',
    ingredientes: [
      "500g de carne seca dessalgada e desfiada",
      "1kg de mandioca cozida",
      "1/2 xícara de leite",
      "2 colheres de manteiga",
      "1 cebola picada",
      "Queijo mussarela a gosto",
      "Sal e pimenta a gosto"
    ],
    modoPreparo: [
      "1. Amasse a mandioca com leite e manteiga até formar um purê",
      "2. Refogue a carne com cebola, sal e pimenta",
      "3. Em um refratário, faça uma camada de purê, depois carne, depois mais purê",
      "4. Cubra com queijo e leve ao forno para gratinar",
      "5. Sirva quente"
    ]
  },
  {
    id: 2,
    nome: "Moqueca de Peixe",
    tempoPreparo: "1 hora",
    porcoes: 5,
    imagem: 'https://www.receitasnestle.com.br/sites/default/files/srh_recipes/9ae6e28383dc732ba697d21aaa71edbf.jpg',
    ingredientes: [
      "1kg de filé de peixe (cação, robalo ou outro)",
      "2 tomates fatiados",
      "1 pimentão verde fatiado",
      "1 cebola fatiada",
      "200ml de leite de coco",
      "2 colheres de azeite de dendê",
      "Coentro e sal a gosto"
    ],
    modoPreparo: [
      "1. Tempere o peixe com sal e limão",
      "2. Em uma panela, faça camadas de peixe, cebola, tomate e pimentão",
      "3. Adicione o leite de coco e azeite de dendê",
      "4. Cozinhe em fogo baixo por 30 minutos",
      "5. Finalize com coentro e sirva com arroz branco"
    ]
  },
  {
    id: 3,
    nome: "Macarrão ao Alho e Óleo",
    tempoPreparo: "25 minutos",
    porcoes: 4,
    imagem: 'https://static.itdg.com.br/images/640-440/b738131b402ba33d58befa56415ba106/324571-original.jpg',
    ingredientes: [
      "500g de macarrão tipo espaguete",
      "5 dentes de alho fatiados",
      "1/3 de xícara de azeite de oliva",
      "Sal a gosto",
      "Pimenta-do-reino a gosto",
      "Salsinha picada para finalizar",
      "Queijo parmesão ralado (opcional)"
    ],
    modoPreparo: [
      "1. Cozinhe o macarrão em água com sal até ficar al dente",
      "2. Escorra e reserve",
      "3. Em uma frigideira, doure o alho no azeite sem queimar",
      "4. Adicione o macarrão cozido e misture bem",
      "5. Finalize com pimenta, salsinha e queijo, se desejar"
    ]
  }
];


const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={receitas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Receita', { receita: item })}>
            <Card style={styles.card}>
              <Card.Cover source={{ uri: item.imagem }} />
              <Card.Content>
                <Text variant="titleLarge" style={styles.text}>{item.nome}</Text>
                <Text style={styles.text}>Tempo: {item.tempoPreparo}</Text>
                <Text style={styles.text}>Porções: {item.porcoes}</Text>
              </Card.Content>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#D76C82',
  },
  card: {
    marginVertical: 8,
    backgroundColor: '#ede7f6',
  },
  text: {
    color: '#000000'
  }
});

export default HomeScreen;