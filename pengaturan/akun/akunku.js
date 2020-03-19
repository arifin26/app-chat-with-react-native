import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,
  TextInput,
  ScrollView,
  StatusBar,
  Dimensions,
  ImageBackground,
  AsyncStorage,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

var {height, width} = Dimensions.get('window');

class Akun extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: null,
      gambar: '',
      username: '',
      text_name: '',
      text_email: '',
      avatar: null,
      background: null,
      text_no_telp: 0,
    };
  }

  InsertStudentRecordsToServer = () => {
    this.setState({isloading: true, visible: true});

    fetch('https://calm-mesa-84057.herokuapp.com/user/edit', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.props.data,
        name: this.state.text_name,
        email: this.state.text_email,
        no_telp: this.state.text_no_telp,
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        // alert(responseJson);
        AsyncStorage.setItem('name', this.state.text_name);
        AsyncStorage.setItem('email', this.state.text_email);
        AsyncStorage.setItem('no_telp', this.state.text_no_telp);

        this.setState({isloading: false, visible: false});

        this.props.navigation.navigate('screen1');
      })
      .catch(error => {
        console.error(error);
        this.setState({visible: false});
        alert('error');
      });
  };

  ImageToServer = () => {
    this.setState({isloading: true, visible: true});
    fetch('https://calm-mesa-84057.herokuapp.com/avatar/edit', {
      method: 'PUT',

      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: this.props.data,
        avatar: `data:image/gif;base64, ${this.state.avatar}`,
        // avatar: this.state.TextInput_avatar
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        AsyncStorage.setItem(
          'avatar',
          `data:image/gif;base64, ${this.state.avatar}`,
        );
        this.setState({isloading: false, visible: false});

        // this.setState({modalaktif:true})
      })
      .catch(error => {
        console.error(error);
        this.setState({visible: false});
        alert('error');
      });
  };

  chooseFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {name: 'customOptionKey', title: 'Choose Photo from Custom Option'},
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      // if (AsyncStorage.setItem('gambar', response.data)) {
      //   alert(JSON.stringify(response.data));
      // }
      this.props.navigation.navigate('screen1');
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
          avatar: response.data,
        });
        AsyncStorage.setItem('gambar', this.state.filePath);
      }
    });
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#633689" />
        <ScrollView>
          <View style={style.Search}>
            <Text style={{color: '#fff', fontSize: 15}}>profile</Text>
          </View>
          {/*
          <View>
            {this.state.filePath === null ? (
              <View>
                <Image
                  source={{
                    uri: this.state.avatar,
                  }}
                />
                <View style={style.image}>
                  <View
                    style={{
                      height: 100,
                      width: 100,
                      borderWidth: 2,
                      borderRadius: 50,
                    }}>
                    <Image
                      source={{
                        uri: this.state.avatar,
                      }}
                    />
                  </View>
                </View>
              </View>
            ) : (
              <View style={style.image}>
                <Image
                  source={{uri: this.state.filePath.uri}}
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 50,
                  }}
                />
              </View>
            )}
          </View> */}

          <View
            style={{
              width: 140,
              height: 140,
              borderRadius: 100,
              borderWidth: 3,
              borderColor: '#633689',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 40,
            }}>
            {this.state.avatar === null ? (
              <Icon name="user" size={50} color="#cdcdcd" />
            ) : (
              <Image
                source={{
                  uri: this.state.avatar.uri,
                }}
                style={{
                  width: 140,
                  height: 140,
                  borderRadius: 100,
                  borderWidth: 3,
                  borderColor: '#633689',
                  position: 'absolute',
                }}
              />
            )}
            <Image
              source={{
                uri: `data:image/gif;base64, ${this.state.avatar}`,
              }}
              style={{
                width: 140,
                height: 140,
                borderRadius: 100,
                borderWidth: 3,
                borderColor: '#f3f3f3',
                position: 'absolute',
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              paddingLeft: 90,
              flex: 1,
              marginTop: 20,
            }}>
            <TouchableOpacity
              style={style.TouchableDisplay}
              onPress={this.chooseFile.bind(this)}>
              <Text style={{color: '#fff'}}>edit foto</Text>
            </TouchableOpacity>
            <View style={{paddingLeft: 30}}>
              <TouchableOpacity
                onPress={this.ImageToServer}
                style={style.TouchableDisplay}>
                <Text style={{color: '#fff'}}>upload foto</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              justifyContent: 'center',
              paddingTop: 5,
              alignItems: 'center',
              padding: 30,
            }}></View>

          <View
            style={{
              flexDirection: 'column',
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={style.teksawal}>
              <Text>name : </Text>
              <TextInput
                value={this.state.text_name}
                placeholder="username"
                onChangeText={teks => this.setState({text_name: teks})}
                style={style.TextInputDisplay}
              />
            </View>
            <View style={style.teksawal}>
              <Text>no.telp : </Text>
              <TextInput
                value={this.state.text_no_telp}
                placeholder="nomor telp"
                onChangeText={teks => this.setState({text_no_telp: teks})}
                style={style.TextInputDisplay}
              />
            </View>
            <View style={style.teksawal}>
              <Text>email : </Text>
              <TextInput
                value={this.state.text_email}
                placeholder="email"
                onChangeText={teks => this.setState({text_email: teks})}
                style={style.TextInputDisplay}
              />
            </View>
          </View>
          <View style={{alignSelf: 'center', marginTop: 30}}>
            <TouchableOpacity
              onPress={this.InsertStudentRecordsToServer}
              style={style.TouchableDisplay}>
              <Text style={{color: '#fff'}}>upload teks</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {data, email} = state.reducer;
  // alert(data);
  return {data, email};
};
export default connect(mapStateToProps)(Akun);
const style = StyleSheet.create({
  Search: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#633689',
    elevation: 20,
  },
  text: {
    alignItems: 'center',
    paddingTop: 250,
  },
  teks: {
    color: '#633689',
    fontSize: 30,
  },
  image: {
    justifyContent: 'center',
    paddingTop: 20,
    alignSelf: 'center',
  },
  TextInputDisplay: {
    width: '60%',
    marginBottom: 7,
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#633689',
  },
  TextInputDisplay2: {
    width: '60%',
    marginBottom: 7,
    height: 40,
    marginRight: 30,
    borderBottomWidth: 1,
    borderColor: '#633689',
  },
  TouchableDisplay: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    width: 80,
    backgroundColor: '#633689',

    borderRadius: 50,
    elevation: 10,
  },
  teksawal: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
