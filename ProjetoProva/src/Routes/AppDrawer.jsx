import React from 'react';
import{createDrawerNavigator} from '@react-navigation/drawer'
import {Ionicons} from '@expo/vector-icons'
import HomeTabs from './TabsNavigation';
import HomeScreen from '../screens/DrawerScreens/HomeScreen';
import FavoritosScreen from '../screens/DrawerScreens/FavoritosScreen';
import DiarioScreen from '../screens/DrawerScreens/DiarioScreen';
import DescricaoFilme from '../screens/DrawerScreens/DescricaoFilme';


const Drawer = createDrawerNavigator();

export default function AppDrawer(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen
            name="CineJornal"
            component={HomeTabs}
            options={{
                    drawerIcon: ({color,size})=> <Ionicons name="home" color={color} size={size} />,
                    
            }}
            />
            <Drawer.Screen
            name="Favoritos"
            component={FavoritosScreen}
            options={{
                    drawerIcon: ({color,size})=> <Ionicons name="heart-outline" color={color} size={size} />,
                    drawerLabel:'Favoritos'
            }}
            />
            <Drawer.Screen
            name="Diário"
            component={DiarioScreen}
            options={{
                    drawerIcon: ({color,size})=> <Ionicons name="book-outline" color={color} size={size} />,
                    drawerLabel:'Diário'
            }}
            />
            <Drawer.Screen
            name="Catálogo"
            component={HomeScreen}
            options={{
                    drawerIcon: ({color,size})=> <Ionicons name="film-outline" color={color} size={size} />,
                    drawerLabel:'Catálogo'
            }}
            />
        </Drawer.Navigator>
    )
}