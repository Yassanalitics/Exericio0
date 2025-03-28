import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Series(props) {

const {nome, ano, diretor, temporada, capa, imagem} = props

  return (
    <View style={styles.container}>
        
      <Text style={styles.texto}>filme</Text>

      <Text style={styles.texto}>NOME: {nome}</Text>
      <Text style={styles.texto}>ANO: {ano}</Text>
      <Text style={styles.texto}>DIRETOR: {diretor}</Text>
      <Text style={styles.texto}>Temporada: {temporada}</Text>


      <Image 
        source={{
            uri: capa
        }}
        style={{
            height:200,
            width: 200
        }}
      
      />

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#B5A8D5',
        borderWidth: 10,
        padding: 5,
        paddingTop: 35,
        alignItems: 'center',
        flex: 1

    },
    texto: {
        fontSize: 20,
        fontWeight: 600
    }
})