import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JavasciptComponente() {
    const nome = 'yasmin'
    const idade = 19
    const cidade = "Ceilândia"
    function MostrarCidade(){
        return cidade
    }

    function MaiorDeIdade(){
        if (idade >= 18){
            return "Maior de Idade"
        } else{
            return "Cai fora Menó"
        }
    }
  return (
    <View>
      <Text>Nome: {nome}</Text>
      <Text>Idade: {idade}</Text>
      <Text>Cidade: {MostrarCidade()} </Text>
      <Text>{idade + 20} </Text>
      <Text>{MaiorDeIdade()} </Text>
    </View>
  )
}

const styles = StyleSheet.create({})