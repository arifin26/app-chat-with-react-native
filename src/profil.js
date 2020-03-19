import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  Modal,
  ActivityIndicator,
  ScrollView,
  AsyncStorage,
  Button,
  Image,
  FlatList,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import MenuIcon from '../componen/menuicon';
import Edit from './editprofile';

export default class Akun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
      name: '',
      id: '',
      email: '',
      telp: '',
      text_id: '',
      text_name: '',
      text_email: '',
      text_telp: '',
      text_password: '',
      avatar: null,
      modalVisible: false,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('id').then(value => {
      if (value != null) {
        this.setState({id: value});
      }
    });
    AsyncStorage.getItem('name').then(value => {
      if (value != null) {
        this.setState({name: value});
      }
    });
    AsyncStorage.getItem('email').then(value => {
      if (value != null) {
        this.setState({email: value});
      }
    });
    AsyncStorage.getItem('telp').then(value => {
      if (value != null) {
        this.setState({telp: value});
      }
    });
    AsyncStorage.getItem('id').then(value => {
      if (value != null) {
        this.setState({text_id: value});
      }
    });
    AsyncStorage.getItem('name').then(value => {
      if (value != null) {
        this.setState({text_name: value});
      }
    });
    AsyncStorage.getItem('email').then(value => {
      if (value != null) {
        this.setState({text_email: value});
      }
    });
    AsyncStorage.getItem('telp').then(value => {
      if (value != null) {
        this.setState({text_telp: value});
      }
    });
    AsyncStorage.getItem('password').then(value => {
      if (value != null) {
        this.setState({text_password: value});
      }
    });
  }

  register = () => {
    // this.setState({avatar : uri})
    // var data = new FormData();
    // data.append('image', {
    //   uri: this.state.avatar,
    //   name: 'my_photo.png',
    //   type: 'image/png'
    // });
    fetch('https://curia.serveo.net/mobile/edit', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.id,
        name: this.state.text_name,
        email: this.state.text_email,
        // text_password: password,
        telp: this.state.text_telp,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson) {
          console.log(responseJson);
          alert('ok');
        }
      })
      .catch(error => {
        console.log(error);
        alert('error');
      });
  };

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};

        this.setState({
          ImageSource: source.data,
          avatar: response.data,
        });
      }
    });
  }

  ImageToServer = () => {
    fetch('https://aqueous-hollows-28311.herokuapp.com/avatar/edit', {
      method: 'PUT',

      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.state.id,
        avatar: `data:image/gif;base64, ${this.state.avatar}`,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        alert('succes');
      })
      .catch(error => {
        console.error(error);

        alert('error');
      });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={style.Search}>
          <Text style={{color: '#fff'}}>profil kamu</Text>
          <View style={{paddingLeft: 190}}>
            <MenuIcon
              //Menu Text
              menutext="ubah profil"
              //Menu View Style
              menustyle={{
                flexDirection: 'row',
              }}
              //Menu Text Style
              textStyle={{
                color: 'white',
              }}
              //Click functions for the menu items
              option1Click={() => {
                this.setState({modalVisible: true});
              }}
              option2Click={() => {}}
              option3Click={() => {}}
              option4Click={() => {
                alert('Option 4');
              }}
            />
          </View>
        </View>
        <ScrollView>
          <View style={style.container}>
            <View style={{flex: 1}}>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginTop: 20,
                  borderWidth: 2,
                  borderRadius: 94,
                  borderColor: '#633689',
                  width: 205,
                  height: 205,
                }}>
                <Image
                  source={{uri: this.state.filePath.path}}
                  style={{width: 100, height: 100}}
                />
                {/* <Image
            source={{
              uri: 'data:image/jpeg;base64,' + this.state.filePath.data,
            }}
            style={{ width: 200, height: 200 ,borderRadius:90}}
          /> */}
                {/* <Image
            source={{ uri: this.state.filePath.uri }}
            style={{ width: 250, height: 250 }}
          /> */}
              </View>
              {/* <Text style={{ alignItems: 'center' }}>
            {this.state.filePath.uri}
          </Text> */}
              <View
                style={{
                  marginTop: 100,
                  borderWidth: 2,
                  width: 290,
                  borderRadius: 40,
                  height: 200,
                }}>
                <View style={{paddingTop: 10, marginLeft: 30}}>
                  <View style={{paddingTop: 10}}>
                    <Text>nama : {this.state.name}</Text>
                  </View>
                  <View style={{paddingTop: 10}}>
                    <Text>email : {this.state.email}</Text>
                  </View>
                  <View style={{paddingTop: 10}}>
                    <Text>info : pengguna harus mengikuti</Text>
                    <Text> kebijakan operator</Text>
                  </View>
                  <View style={{paddingTop: 10}}>
                    <Text>telp : {this.state.telp}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}>
            <View
              style={{
                paddingTop: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 578,
                  width: 347,
                  borderColor: '#633689',
                  borderRadius: 60,
                  borderWidth: 7,
                }}>
                <View
                  style={{
                    height: 560,
                    width: 330,
                    backgroundColor: '#fff',
                    borderRadius: 50,
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        borderWidth: 4,
                        borderRadius: 94,
                        borderColor: '#633689',
                        width: 117,
                        height: 117,
                        marginLeft: 30,
                        marginTop: 10,
                      }}>
                      <Image
                        source={{
                          uri:
                            'data:image/jpeg;base64,' +
                            this.state.filePath.data,
                        }}
                        style={{width: 110, height: 110, borderRadius: 90}}
                      />
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({modalVisible: false});
                      }}>
                      <View style={{paddingLeft: 130, paddingTop: 10}}>
                        <Image
                          source={require('../gambar/icons8-delete-104.png')}
                          style={{height: 33, width: 33}}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{marginTop: 30, marginLeft: 20}}>
                    <Text>nama:</Text>
                    <TextInput
                      placeholder="tulis nama kau di sini..."
                      value={this.state.text_name}
                      onChangeText={TextInputValue =>
                        this.setState({text_name: TextInputValue})
                      }
                      underlineColorAndroid="#633689"
                      style={style.textinput}
                    />
                    <Text>email:</Text>
                    <TextInput
                      placeholder="tulis email kamu di sini...."
                      value={this.state.text_email}
                      onChangeText={TextInputValue =>
                        this.setState({text_email: TextInputValue})
                      }
                      underlineColorAndroid="#633689"
                      style={style.textinput}
                    />
                    {/* <Text>telp:</Text> */}
                    {/* <TextInput 
                      placeholder="Student Email Shows Here"
		 
                      value={this.state.text_password}

                      onChangeText={ TextInputValue => this.setState({ text_password : TextInputValue }) }

                      underlineColorAndroid='#633689'
                      
                      style={style.textinput}
                    /> */}
                    <Text>telp:</Text>
                    <TextInput
                      placeholder="tulis nomor telfon kamu di sini..."
                      value={this.state.text_telp}
                      onChangeText={TextInputValue =>
                        this.setState({text_telp: TextInputValue})
                      }
                      underlineColorAndroid="#633689"
                      style={style.textinput}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingTop: 90,
                      justifyContent: 'space-around',
                    }}>
                    <TouchableOpacity
                      onPress={this.ImageToServer}
                      style={{
                        width: '40%',
                        padding: 5,
                        backgroundColor: '#fff',
                        elevation: 10,
                        marginBottom: 30,
                        borderWidth: 1,
                        borderColor: '#9b59b6',
                        borderRadius: 50,
                      }}>
                      <Text style={{textAlign: 'center', fontSize: 20}}>
                        upload
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={this.selectPhotoTapped.bind(this)}
                      style={{
                        width: '40%',
                        padding: 5,
                        backgroundColor: '#fff',
                        elevation: 10,
                        borderColor: '#9b59b6',
                        borderWidth: 1,
                        borderRadius: 50,
                        marginBottom: 30,
                      }}>
                      <Text style={{textAlign: 'center', fontSize: 20}}>
                        pilih foto
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </View>
    );
  }
}
const style = StyleSheet.create({
  Search: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#633689',
    elevation: 20,
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
  textinput: {
    width: '90%',
  },
});
