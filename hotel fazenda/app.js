import React from "react";
import {StatusBar, SafeAreaView, Text, View} from 'react-native';
import Text from "../texto/texto";
import Image from "../imagens";
import refeiçao from "./componete/alimentação/refeição"
import  lazer from "./componete/lazer/lazer";

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




