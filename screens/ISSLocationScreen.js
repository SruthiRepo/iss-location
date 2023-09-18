import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import axios from 'axios';

export default class ISSLocationScreen extends React.Component{
    constructor(props){
    super(props)
    this.state={
        location:{},
    }
    }

    componentDidMount(){
        this.getISSLocation();
    }

    getISSLocation=()=>{
        axios.get("https://api.wheretheiss.at/v1/satellites/25544")
        .then((response)=>{this.setState({location:response.data})})
        .catch((error)=>{alert(error.message)})
    }
    render(){
        return(
            <View style={myStyles.container}>
                <SafeAreaView style={myStyles.droidSafeArea}/>
           <MapView
            initialRegion={{
                latitude: this.state.location.latitude,
                longitude:this.state.location.location,
                latitudeDelta: 0.09,
                longitudeDelta: 0.042
            }}>
                <Marker 
                coordinate={{
                    latitude: this.state.location.latitude,
                    longitude:this.state.location.location,
                    latitudeDelta: 0.09,
                    longitudeDelta: 0.042
                    }}>
                        <Image style={{height:50, width:50}} source={require("../assets/iss_icon.png")}/>
                    </Marker>
            </MapView>
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