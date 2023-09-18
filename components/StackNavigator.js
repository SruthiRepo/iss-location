import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../screens/HomeScreen';
import ISSLocationScreen from '../screens/ISSLocationScreen';
import MeteorScreen from '../screens/MeteorScreen';

const Stack = createStackNavigator();
function StackNavigator (){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="ISSLocation" component={ISSLocationScreen}/>
                <Stack.Screen name="Meteor" component={MeteorScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;