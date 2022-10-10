import React from "react";  
import {Image,View, Testo, StyleSheet, Dimensions}  from "react-native"
import testo from "./../componete/testo"; 
import Image from "./imagem/indice 2"; 
const width = Dimensions.get('screen').width;
export default function  hotelfazenda () {
    return (
        <>
         <Image source={imagem} style={estilos.imagem}/>
         <Text style={estilos.titulo}> hotel fazenda</Text>
         <View style={estilos.cesta}>
                <Text style={estilos.nome}> hotelfazenda </Text>

                <View style={estilos.fazenda}>
                    <Image source={logo} style={estilos.imagemFazenda}/>
                    <Text style={estilos.nomeFazenda}> hotel fazenda dos Almeida </Text>


                </View>
            <Text style={estilos.descricao}> almein de um otimo pesseios a cavalos vocês terão uma bela comica caseira </Text>
                <Text style={estilos.preco}> R$50,00</Text>

                <Texto>hotel fazenda </Texto>

