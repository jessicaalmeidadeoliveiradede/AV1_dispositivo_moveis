import React from "react";  
import {Image,View, Testo, StyleSheet, Dimensions}  from "react-native"
import text from "./../componete/texto"; 
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
                </View>

<Text style={estilos.descricao}> Uma cesta de produtos cuidadosamente selecionados;</Text>
<Text style={estilos.preco}> R$5000</Text>


</View>
<Text> Meus Deus do Ceu</Text>
<Text> Gastei duas horas por conta de um parenteses</Text>
        </>
    )
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        // Aplicar a proporção oficial da largura * a largura da página
        height: 578 / 768 * width,
    },
},
titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
},
cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
},