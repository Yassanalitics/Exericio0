import { StyleSheet, View } from 'react-native'
import{Card,Text, Button} from "react-native-paper"
import React, { useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'

export default function AlunoLista(navigation) {
    const [alunos, setAlunos] = useState([
        {
            id: '1',
            nome: 'Gustavo',
            cpf: '001.002.003-04',
            emaIL: 'kdkjas@gmail.com',
            telefone:'(61)998542604',
            dataNascimento: '02/12/1352',

        },
        {
            id: '1',
            nome: 'Gustavo',
            cpf: '001.002.003-04',
            emaIL: 'teste@gmail.com',
            telefone:'(61)998542604',
            dataNascimento: '02/12/1352',

        },
    ])


  return (
    <View>
      <Button
      style={{margin: 10}}
      mode='contained'
      icon='plus'
      onPress={() => navigation.navigate('AlunoForm')}
      >
     Cadastrar
      </Button>

      <FlatList
      data={alunos}
      renderItem={({item}) => (
        <Card>
            <Card.Content>
            <Text>ID: {item.id}</Text>
            <Text>Nome: {item.nome}</Text>
            <Text>CPF: {item.cpf}</Text> 
            </Card.Content>
            <Card.Actions>
            <Butom icon='Pencil'>  </Butom>
            <Butom icon='delete'> </Butom>
            </Card.Actions>
        </Card>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({})