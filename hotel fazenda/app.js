import React from "react";
import {StatusBar, SafeAreaView, Text, View} from 'react-native';
import Text from "../texto/texto";
import imagens from "../imagens";
import refeiçao from "../alimentacao";
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';


import hotelfazenda from "./../hotel fazenda";
import testo from "./.."
let [fontsLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold" : Montserrat_700Bold
});

if (!fontsLoaded) {
    return null;
}

return (
  <SafeAreaView>
          <hotelfazenda />
  </SafeAreaView>

);




