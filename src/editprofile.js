import React from 'react'
import {View,Text,StyleSheet,Alert,ActivityIndicator,ScrollView,AsyncStorage,Button,Image,FlatList,PermissionsAndroid,Platform,TouchableOpacity,TextInput} from 'react-native'
import ImagePicker from 'react-native-image-picker';
import CustomMenuIcon from '../componen/menuicon'




export default class Edit extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
      coba: "",
      cabo:"",
      image:''
    };
  }
  
  componentDidMount(){
    AsyncStorage.getItem('name')
    .then(value => {
      if(value != null){
        this.setState({coba : value })}
      }
    )
    AsyncStorage.getItem('email').then
    (value => {
      if (value != null) {
        this.setState({cabo: value})
      }
    })
    }
      


  chooseFile = () => {
    var options = {
      title: 'pilih gambar',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
 
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          filePath: source,
        });
      }
    });
  };


 render() {
  let {image} = this.state
      return (
        <View style={{flex:1}}>
            <View style={style.Search}>
            <Text style={{color:'#fff'}}>
            ubah profil
            </Text>
          
            </View>
            <ScrollView>
            <View style={style.container}>
         <View style={{flex:1}}>   
      <View style={{alignItems:'center',justifyContent:'center',marginTop:20,borderWidth:4,borderRadius:94,borderColor:'#633689',width: 205, height: 205}}>
          {/*<Image 
          source={{ uri: this.state.filePath.path}} 
          style={{width: 100, height: 100}} />*/}
          <Image
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
            }} 
            style={{ width: 200, height: 200 ,borderRadius:90}}
          />
          {/* <Image
            source={{ uri: this.state.filePath.uri }}
            style={{ width: 250, height: 250 }}
          /> */}
          </View>
          {/* <Text style={{ alignItems: 'center' }}>
            {this.state.filePath.uri}
          </Text> */}
            <View style={{paddingTop:50}}>
            <View style={{flexDirection:'row'}}>
            <Text>nama : </Text>
            <TextInput 
                
                placeholder='ketik name'
                onChangeText={(text) => this.props.rubahNama(text)}/>
            </View>
            <View style={{paddingTop:10}}>
            <Text>email : {this.state.coba}</Text>
            </View>
            
            </View>
            
     
             <View style={{paddingTop:90}}>
             <Button title='upload'  onPress={() => this.Image(filePath)}/>
             <View style={{paddingTop:10}}>
                <Button title="Choose File" onPress={this.chooseFile.bind(this)} />
             </View>
             </View>
             </View>
      </View>
      </ScrollView>
        </View>
      );
    
  }


}
const style = StyleSheet.create({
  Search:{
    flexDirection:'row',height:50,
    width:'100%',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#633689',
    elevation:20,
    
  },
 
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 })
