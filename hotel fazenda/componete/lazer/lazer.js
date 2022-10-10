import React from 'react';
import topo from '../../imagens/par-pesseios-vetor-clip-arte_csp50538365.webp'; 
import logo from '../../imagens/imagens.jpeg'; 
import Texto from '../componente/texto';  
const width = Dimensions.get('screen').width;export default function hotelfazenda() {
    return(
       
export default function hotelfazenda() {
    return (
        <>
        <Image source={topo} style={estilos.topo}/>
        
        <Text style={estilos.titulo}> detalhe do passaio do hotelfazenda</Text>

        <View style={estilos-hotelfazenda}>
                <Text style={estilos.nome}> hotelfazenda_dos_Almeidas </Text>

                <View style={estilos.fazenda}>
                    <Image source={logo} style={estilos.imagemFazenda}/>
                    <Text style={estilos.nomeFazenda}> hotelfazenda_dos_Almeidas </Text>

                </View>

                <Text style={estilos.descricao}> uma passeio no hotelfazenda_dos_Almeidas custa;</Text>
                <Text style={estilos.preco}> R$ 50,00 por pessoa</Text>
                </View>

            <Text> Meus Deus do Ceu</Text>

    
            <Text> Gastei duas horas por conta de um parenteses</Text>
        </>
        const estilos = StyleSheet.create({
            topo: {
                width: "100%",
                height: 578 / 768 * width,
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
            hotelfazenda: {
                paddingVertical: 8,
                paddingHorizontal: 16,
            },
            nome: {
                color: "#464646",
                fontSize: 26,
                lineHeight: 42,
                fontFamily: "MontserratBold",
            },
            fazenda: {
                flexDirection: "row",
                paddingVertical: 12,
            },
            imagemFazenda: {
                width: 32,
                height: 32,
            },
            hotelfazenda: {
                fontSize: 16,
                lineHeight: 26,
                marginLeft: 12,
                fontFamily: "MontserratRegular",
            },
            descricao: {
                color: "#A3A3A3",
                fontSize: 16,
                lineHeight: 26,
            },
            preco: {
                color: "#2A9F85",
                fontWeight: "bold",
                fontSize: 26,
                lineHeight: 42,
                marginTop: 8,
            },});
    )

    