import React from "react";
import {Text, View, StyleSheet} from "react-native";

//Importar botones de navegación
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Importar contenedor de las pantallas
import { NavigationContainer } from "@react-navigation/native";

//Importar pantallas
import InicioPantalla from "./pantalla/inicio";
import BombilloPantalla from "./pantalla/bombillo";
import PrestamoPantalla from "./pantalla/prestamo";

// Crear objeto tabs
const tab = createBottomTabNavigator();

// Función para crear los botones de navegación
function myTabs(){
    return(
        <tab.Navigator>
            <tab.Screen name="Inicio" component={InicioPantalla}></tab.Screen>
        </tab.Navigator>
    );
}