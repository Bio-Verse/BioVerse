import * as React from 'react';
import { Text, View, StyleSheet, ImageBackground, TextInput, Pressable, Image } from 'react-native';
import Constants from 'expo-constants';

export default function Inicial({navigation}){

return(
     <ImageBackground source={require('../Imagens/fundo.png')} style={estilo.tela}>
   
     <View style={estilo.quadrado}>
    <View style={estilo.imagemCenter}>
     <Image style={estilo.imagem} source={require('../Imagens/BioVerse_Logo_App_Pixel.png')}/>
     </View>
     <Text style={estilo.bv}>BioVerse</Text>
     </View>
       <View style={estilo.quadrado2}>
     <Pressable style={estilo.preciona} onPress={()=>navigation.navigate("Principal")}>
    <Text>Começar</Text></Pressable>
       <Pressable style={estilo.preciona} >
    <Text>Sair</Text></Pressable>
     </View>
     
     </ImageBackground>
  );
}
const estilo = StyleSheet.create({
  tela:{
    flex:1,
    justifyContent: 'Center'
  },
  quadrado:{
    borderRadius: 5,
    backgroundColor:'',
    justifyContent:'center',
    alignContent: 'center',
    padding: 5,
    marginTop:-125
  },
  quadrado2:{
    borderRadius: 5,
    backgroundColor:'',
    justifyContent:'center',
    alignContent: 'center',
    padding: 5,
  },
  
  bv:{
    fontWeight:'bold',
    color: 'black',
    textAlign:'center',
    fontSize:30
  },
  
  preciona:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    backgroundColor: '#3286FC',
    marginLeft:80,
    marginRight:80,
    borderRadius: 8, 

  },
  imagem:{
    width:100,
    height:100,
    
  },
  imagemCenter:{
    alignItems: 'center',
  
  }
})