import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Card, Paragraph, Text, Title } from "react-native-paper";

export default function TemporadasScreen() {
  return (
    <ScrollView>
      <View style={StyleSheet.container}>
        <Text variant="headlineSmall" style={{ fontWeight: "bold" }}> temporadas
        </Text>

        <Card style={{ margin: 10 }}>
          <Card.Content>
            <Title>A série You </Title>
            <Paragraph>terá cinco temporadas, com a última prevista para estrear na Netflix em 24 de abril de 2025. 
Temporadas anteriores 
As quatro temporadas anteriores de You já estão disponíveis na Netflix.
A terceira temporada foi lançada em 2021.
A renovação da quarta temporada foi anunciada em outubro de 2021.</Paragraph>
          </Card.Content>
        
        </Card>

        <Card style={{ margin: 10 }}>
          <Card.Content>
            <Title>Friends </Title>
            <Paragraph>A série Friends teve 10 temporadas, que foram exibidas entre 1994 e 2004. O primeiro episódio foi transmitido no dia 22 de setembro de 1994, e o último em 6 de maio de 2004. </Paragraph>
          </Card.Content>
       
        </Card>

        <Card style={{ margin: 10 }}>
          <Card.Content>
            <Title>Breaking Bad</Title>
            <Paragraph>A série Breaking Bad tem cinco temporadas, que foram exibidas entre 2008 e 2013. </Paragraph>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ACD3A8',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 50
    },
  });