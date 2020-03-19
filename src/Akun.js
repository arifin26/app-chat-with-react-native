import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'

export default class User extends React.Component{
 render(){
   return(
       <View style={{flex:1}}>
            <View style={style.Search}>
            <Text style={{color:'#fff'}}>
            Akun
            </Text>
            </View>
            <View style={style.tengah}>
            <TouchableOpacity activeOpacity = { .4 } style={style.Btn_TambahData}>
              <View style={style.list}>
                <Text style={style.text}>
                  keamanan
                </Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity = { .4 } style={style.Btn_TambahData}>
              <View style={style.list}>
                <Text style={style.text}>
                  privasi
                </Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity = { .4 } style={style.Btn_TambahData}> 
              <View style={style.list}>
                <Text style={style.text}>
                  hubungi operator
                </Text>
              </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity = { .4 } style={style.Btn_TambahData}>
              <View style={style.list}>
                <Text style={style.text}>
                  bantuan
                </Text>
              </View>
              </TouchableOpacity>
              
            </View>
       </View>
   )
 }
}

 const style=StyleSheet.create({
  Search:{
    flexDirection:'row',height:50,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#633689',
    elevation:20},
    list:{
     height:50,
     alignItems:'center',
     marginTop:20
    },
    Btn_TambahData: {
     
      justifyContent:'center',
      borderRadius:60,
      marginBottom:20,
      width: 200,
      backgroundColor: '#fff',
      borderWidth:2,
      borderColor:'#633689',
      elevation:40
   
    },
    tengah:{
        alignItems:'center',
        paddingTop:70
    },
    text:{
      color:'#000'
    }
 })