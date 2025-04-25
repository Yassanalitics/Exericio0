import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { Ionicons } from '@expo/vector-icons'

import LogoScreen from  './telas/LogoScreen'
import AtoresScreen from './telas/AtoresScreen'
import TemporadasScreen from './telas/TemporadasScreen'

const Tab = createBottomTabNavigator()
export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>

          <Tab.Screen
          name='LogoScreen'
          component={LogoScreen}
          options={{
            title: 'Tela de incio',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle:{
              backgroundColor: '#3E3F5B'
            },
            tabBarIcon:  ({color, size}) => <Ionicons name='home' color={color} size={size}/>
          }}
          />
          <Tab.Screen
          name='AtoresScreen'
          component={AtoresScreen}
          options={{
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle:{
              backgroundColor: '#3E3F5B'
            },
            title: 'Atores',
            tabBarIcon: ({color, size}) => <Ionicons name='person' color={color} size={size}/>
          }}
          />
          <Tab.Screen
          name='TemporadasScreen'
          component={TemporadasScreen}
          options={{
            title: 'Temporadas',
            headerTitleAlign: 'center',
            headerTintColor: 'white',
            headerStyle:{
              backgroundColor: '#3E3F5B'
            },
            tabBarIcon: ({color, size}) => <Ionicons name='settings-sharp' color={color} size={size}/>
          }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
