// import React from 'react'
// import {
// 	View,
// 	Text,
// 	StyleSheet,
// 	TextInput,
//   TouchableOpacity,
//   ScrollView
// }from 'react-native'
// import axios from 'axios'

// class Editdata extends React.Component{

// 	constructor(props) {
    
//        super(props)
    
//        this.state = {
//          TextInput_id:"",
//         TextInput_nama_lengkap: '',
//         TextInput_NISN: '',
//         TextInput_NIS: '',
        
      
    
//        }
    
//      }


//      ambildata = () => {
//          axios.get('http://tedium.serveo.net/chat/show/5/2')
//      }


//      componentDidMount(){
 
//       // Received Student Details Sent From Previous Activity and Set Into State.
//       this.setState({ 
//         TextInput_id:this.props.navigation.state.params.ID,
//         TextInput_nama_lengkap: this.props.navigation.state.params.A,
//       TextInput_NISN: this.props.navigation.state.params.B,
//       TextInput_NIS: this.props.navigation.state.params.C,
     
//       })
 
//      }


  


// //  	hapusdata = () => {
// //  		axios.post('http://homekomputer.000webhostapp.com/apiv2/siswa/HapusDataSiswa.php',{
// //       id: this.state.TextInput_id
// //  		})

// //  		  .then(res => console.log(res)) 
// //           .catch(err => console.log(err))

// //           this.props.navigation.navigate('Tampildata');

// //  	}


// 	render(){
// 		return(
//       <ScrollView>
// 				<View style={styles.MainContainer}>

// 			 		<Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Edit Data </Text>

//            <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> hapus Data </Text>
          
        
 
//            <Text style={{textAlign:'center',paddingTop:20}}>nama :</Text>
//         <TextInput
          
//           placeholder="Enter Student Name"

//           value={this.state.TextInput_nama_lengkap}

//           onChangeText={ TextInputValue => this.setState({  TextInput_nama_lengkap : TextInputValue }) }

//           underlineColorAndroid='transparent'

//           style={styles.StylingTextInput}
//         />


// <Text style={{textAlign:'center',paddingTop:20}}>NISN :</Text>
//         <TextInput
          
//           placeholder="Enter Student Class"

//           value={this.state.TextInput_NISN}

//           onChangeText={ TextInputValue => this.setState({ TextInput_NISN : TextInputValue }) }

//           underlineColorAndroid='transparent'

//           style={styles.StylingTextInput}
//         />


// <Text style={{textAlign:'center',paddingTop:20}}>NIS :</Text>
//         <TextInput
          
//           placeholder="Enter Student Phone Number"

//           value={this.state.TextInput_NIS}

//           onChangeText={ TextInputValue => this.setState({ TextInput_NIS: TextInputValue }) }

//           underlineColorAndroid='transparent'

//           style={styles.StylingTextInput}
//         />



// {/* 
// 		          <TouchableOpacity activeOpacity = { .4 } style={styles.Btn_TambahData} onPress={this.editdata} >
   
// 		            <Text style={styles.StyleTambahData}> Edit Data </Text>
		   
// 		         </TouchableOpacity>

// 		          <TouchableOpacity activeOpacity = { .4 } style={styles.Btn_TambahData} onPress={this.hapusdata} >
   
// 		            <Text style={styles.StyleTambahData}> Hapus Data </Text>
		   
// 		         </TouchableOpacity>
//  */}

//    			</View>
//          </ScrollView>
// 		)
// 	}
// }

// const styles = StyleSheet.create({
 
//   MainContainer :{
 
//     alignItems: 'center',
//     flex:1,
//     paddingTop: 30,
//     backgroundColor: '#fff'
 
//   },
 
//   StylingTextInput: {
 
//   textAlign: 'center',
//   width: '90%',
//   marginBottom: 7,
//   height: 40,
//   borderWidth: 1,
//   borderColor: '#075e54',
//   borderRadius: 5 ,
 
//   },
 
//   Btn_TambahData: {
 
//     paddingTop:10,
//     paddingBottom:10,
//     borderRadius:5,
//     marginBottom:7,
//     width: '90%',
//     backgroundColor: '#00BCD4'
 
//   },
 
//   StyleTambahData:{
//     color:'#fff',
//     textAlign:'center',
//   },
 
// });


// export default Editdata


import React, { Component } from 'react';
import { View, Text,FlatList,ActivityIndicator,Image,StatusBar } from 'react-native';






export default class Editdata extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoading:true,
        dataSource:[]
    };
  }
    
  






_fetchItem = async ()=>{
    this.setState({ isLoading: true });
    try {
        let response = await fetch('https://randomuser.me/api/?results=20');
        let responseJson = await response.json();
        await this.setState({
                isLoading: false,
                dataSource: responseJson.results,
        });
    } catch (error) {
        console.error(error);
    }
}







_separatorComponent=()=>{
    return(
        <View style={{backgroundColor:'grey',height:0.5}} />
    )
}

_itemComponent = ({ item })=>{
    return(
        <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10, height: 50}}>
            <View style={{ justifyContent:'center'}} >
                <Image source={{ uri: item.picture.thumbnail }} style={{ width: 40, height: 40,borderRadius: 25 }} />
            </View>

            <View>
                <Text style={{ padding: 3, }}>{item.name.first}, {item.name.last}</Text>
                <Text style={{padding: 3,}}>{item.email}</Text>
            </View>
        </View>
    )
}







componentDidMount() {
    this._fetchItem()
 }





 

 render() {
    if (this.state.isLoading) {
        return (
            <View style={{ flex: 1, padding: 20 }}>
                <ActivityIndicator />
               
                <View>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}>User List</Text>
                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1, paddingTop: 20 }}>
           
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', }}>User List</Text>
            </View>
            <FlatList
                data={this.state.dataSource}
                renderItem={this._itemComponent}
                keyExtractor={(item, index) => index.toString()}
                onRefresh={this._fetchItem}
                refreshing={this.state.isLoading}
                ItemSeparatorComponent={this._separatorComponent}
            />
        </View>
    )
}}