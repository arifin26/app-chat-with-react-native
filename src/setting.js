import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

export default class Setting extends React.Component{
 render(){
   return(
     <View>
       <View style={{flex:1}}>
            <View style={style.Search}>
            <Text style={{color:'#fff'}}>
            setting
            </Text>
            </View>
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
    elevation:20}
 })