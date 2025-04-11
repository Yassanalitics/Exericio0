import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Card, Paragraph, Text, Title } from "react-native-paper";

export default function LogoScreen() {
  return (
    <ScrollView>
      <View style={StyleSheet.container}>
        <Text variant="displaySmall" style={{ fontWeight: "bold", textAlign:'center' }}> Series
        </Text>

        <Card style={{ margin: 10 }}>
          <Card.Content>
            <Title>You</Title>
            <Paragraph>"Atuação excepcional e trama instigante, mas com preocupações sobre a representação de comportamentos nocivos." "You" acompanha Joe Goldberg (Penn Badgley), um gerente de livraria que se transforma em um stalker obsessivo, utilizando as redes sociais para se aproximar de mulheres que se tornam suas vítimas.</Paragraph>
          </Card.Content>
          <Card.Cover  source={{ uri:'https://i.pinimg.com/736x/c2/7f/a4/c27fa447b91d34933293f37a0b2f1a89.jpg' }}></Card.Cover>
        </Card>

        <Card style={{ margin: 10 }}>
          <Card.Content>
            <Title>Friends</Title>
            <Paragraph>A sitcom se passa em torno da vida de 6 amigos moradores de Manhattan, em Nova York e seus conflitos diários, abordados de uma maneira cômica. ( São eles: Mônica, Rachel, Phoebe, Chandler, Joey e Ross.) Todos os 6 personagens são principais na trama.</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: "https://i.pinimg.com/736x/1b/35/f7/1b35f773a0682fa9c508f1932ae0b954.jpg" }}></Card.Cover>
        </Card>

        <Card style={{ margin: 10 }}>
          <Card.Content>
            <Title>breaking bad</Title>
            <Paragraph>Breaking Bad é uma série de TV americana que conta a história de Walter White, um professor de química que se torna um traficante de metanfetamina. A série foi exibida entre 2008 e 2013. </Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: "https://i.pinimg.com/736x/37/62/75/37627587496965efcc0ae42ac9dff525.jpg" }}></Card.Cover>
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