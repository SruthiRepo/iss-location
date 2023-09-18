import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, SafeAreaView, Platform, StatusBar } from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View style={myStyles.mainContainer}>
             <SafeAreaView style={myStyles.droidSafeArea}/> 
             <ImageBackground source={require("../assets/bg_image.png")} style={myStyles.bgStyle}>
                <View style={myStyles.TitleBar}>
                    <Text style={myStyles.titleText}>ISS TRACKER APP</Text>
                </View>

                <TouchableOpacity style={myStyles.btnStyle} onPress={()=>{
                    this.props.navigation.navigate("ISSLocation")
                }}>
                    <Text style={myStyles.txtStyle}>ISS LOCATION</Text>
                    <Text style={myStyles.kmStyle}>Know More</Text>
                    <Image source={require("../assets/iss_icon.png")} style={myStyles.iconStyle}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={myStyles.btnStyle} onPress={()=>{
                    this.props.navigation.navigate("Meteor")
                }}>
                    <Text style={myStyles.txtStyle}>METEORS</Text>
                    <Text style={myStyles.kmStyle}>Know More</Text>
                    <Image source={require("../assets/meteor_icon.png")} style={myStyles.iconStyle}></Image>
                </TouchableOpacity>
                </ImageBackground>  
            </View>
        )
    }
}

const myStyles=StyleSheet.create({

    mainContainer:{
        flex:1,
        justifyContent: 'center'
    },

    btnStyle:{
        backgroundColor:"white",
        flex:0.25,
        marginLeft:50,
        marginRight:50,
        marginTop:50,
        borderRadius: 25
    },

    droidSafeArea:{
        marginTop: Platform.OS==="android"?StatusBar.currentHeight:0
    },

    bgStyle:{
        flex:1,
        resizeMode:'cover'
    },

    txtStyle:{
        marginLeft:30,
        marginTop:20,
        fontSize:30,
        fontWeight: 'bold'
    },

    kmStyle:{
        color: "red",
        marginTop: 20,
        marginLeft: 30
    },

    TitleBar:{
        flex:0.15,
        justifyContent:'center',
        alignItems:'center'

    },
    titleText:{
        fontSize:40,
        color: "white",
        fontWeight: 'bold'

    },

    iconStyle:{
        position:"absolute",
        width:200,
        height:200,
        right:20,
        top:-80,
        resizeMode:"contain"
    }
})