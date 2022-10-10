import React from 'react';
import {Text, StyleSheet} from 'react-native';
export default function Texto ({ childrem }){
    return <Text style={estilos.texto}> {childrem} </Text>

}

const estilos = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
    }



})