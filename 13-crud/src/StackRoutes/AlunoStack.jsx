
import { createStackNavigator } from '@react-navigation/stack'
import AlunoLista from '../screens/AlunoLista'
import AlunoForm from '../screens/AlunoForm'


const Stack = createStackNavigator()

export default function AlunoStack() {
  return (
    <Stack.Navigator>

      <Stack.Screen
        name='AlunoLista'
        component={AlunoLista}
        options={{
          title: 'Lista de Alunos',
          headerTitleAlign: 'center'
        }}
      />

      <Stack.Screen
        name='AlunoForm'
        component={AlunoForm}
        options={{
          title: 'Cadastro de Alunos',
          headerTitleAlign: 'center'
        }}
      />



    </Stack.Navigator>
  )
}
