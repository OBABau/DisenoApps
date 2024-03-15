import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";


import HomeScreen from "./screen/HomeScreen";
import SettingsScreen from "./screen/SettingsScreen";
import ProfileScreen from "./screen/ProfileScreen";
import StackScreen from "./screen/StackScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function MyStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="StackScreen" component={StackScreen} />
        </Stack.Navigator>
    );
}



function MyTabs() {
    return(
        <Tab.Navigator>
        <Tab.Screen name="Home" component={MyStack} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
    ); 
}


export default function Navigation(){
    return (
        <NavigationContainer>
            <MyTabs />
            <StatusBar style="auto" />
        </NavigationContainer>  
    );
}
