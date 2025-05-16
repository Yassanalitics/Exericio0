
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'

export default function Volume() {

  const [volume, setVolume] = useState(0)

  function aumentar() {
    if (volume < 10) {
      setVolume(volume + 1)
    }
  }

  function diminuir() {
    if (volume > 0) {
      setVolume(volume - 1)
    }
  }

  return (
    <View>
      <Card style={{ margin: 5 }}>
        <Card.Content>

          <Text>Componente Volume</Text>
          <Text variant='displayMedium'>Volume: {volume}</Text>

        </Card.Content>
        <Card.Actions>

          <Button icon='minus' onPress={diminuir}>Menos</Button>
          <Button icon='plus' onPress={aumentar}>Mais</Button>

        </Card.Actions>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})
