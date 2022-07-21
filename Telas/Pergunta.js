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
      <View>
      <Text style={estilo.pergunta}>Qual é tipo de célula presente nas plantas?</Text>
      </View>
      <View  style={estilo.espaco}>
      <Pressable style={estilo.preciona}><Text>Eucariontes</Text></Pressable>

      <Pressable style={estilo.preciona}><Text>Procariontes</Text></Pressable>

      <Pressable style={estilo.preciona}><Text>Mitocondrias</Text></Pressable>
      
      <Pressable style={estilo.preciona}><Text>Carioteca</Text></Pressable>
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
    marginTop:-150,
    flexDirection:'row'
  },
  bv:{
    fontWeight:'bold',
    color: 'black',
    textAlign:'center',
    fontSize:30
  },
  imagem:{
    width:40,
    height:40,   
  },
  imagemCenter:{
    alignItems: 'center',
  },
  pergunta:{
    fontWeight:'bold',
    color: 'black',
    textAlign:'center',
    fontSize:18,
     marginTop:30,
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
  espaco:{
    marginTop:50
  }
  

})