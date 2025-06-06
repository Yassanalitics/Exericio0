import React from "react";
import { View, Text, StyleSheet,Image,TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Animatable from "react-native-animatable"


export default function LoginScreen(){
    return(
        <View style={StyleSheet.container}>
            <Animatable.View
            animation="zoomIn" 
            dalay={500}
            style={styles.containerHeader}
            >
             <Text>Organize e Descubra suas obras favoritas</Text>
           </Animatable.View>
        </View>
    )
}
const styles = StyleSheet.create({
container: {

}

})