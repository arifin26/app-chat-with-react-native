import React from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  Button,
  StatusBar,
  Modal,
  ActivityIndicator,
  AsyncStorage,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
// import Splash from './spalsh'

class Register extends React.Component {
  state = {
    username: '',
    name: '',
    email: '',
    no_telp: '',
    password: '',
    modalVisible: false,
  };
  componentDidMount() {
    AsyncStorage.getItem('access_token').then(value => {
      if (value != null) {
        this.props.navigation.navigate('wechat');
      }
    });
  }

  register = (username, name, email, no_telp, password) => {
    this.setState({modalVisible: true});
    fetch('https://calm-mesa-84057.herokuapp.com/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        name: name,
        no_telp: no_telp,
        email: email,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.access_token) {
          AsyncStorage.setItem('access_token', response.access_token);
          // AsyncStorage.setItem('the', response.user);
          // alert(response.user);
          this.props.navigation.navigate('login');
        }
        this.setState({modalVisible: false});
      })

      .catch(error => {
        console.log(error);
        // alert('error');
        this.setState({modalVisible: false});
      });
  };

  render() {
    let {username, name, email, no_telp, password} = this.state;
    return (
      <View style={Styles.container}>
        <StatusBar backgroundColor="#DBDBDB" barStyle="dark-content" />
        <ImageBackground
          source={require('../../gambar/Template.jpeg')}
          style={{height: '100%', width: '100%'}}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}>
            <View
              style={{
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 300,
                  width: 300,
                  borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ActivityIndicator size="large" />
              </View>
            </View>
          </Modal>

          {/* <View style={Styles.ViewHeader}>
                <Text style={Styles.TextHeader}> REGISTER </Text>
                </View> */}
          {/* <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 30,
            }}>
            <Image
              source={require('../../gambar/wechat.png')}
              style={{height: 110, width: 110}}
            />
          </View> */}
          <View style={{paddingTop: 70}}>
            <View style={Styles.inputContainer}>
              <TextInput
                style={Styles.TextInputDisplay}
                value={this.state.username}
                placeholder="username"
                onChangeText={teks => this.setState({username: teks})}
              />
            </View>
            <View style={Styles.inputContainer}>
              <TextInput
                style={Styles.TextInputDisplay1}
                value={this.state.name}
                placeholder="name"
                onChangeText={teks => this.setState({name: teks})}
              />
            </View>
            <View style={Styles.inputContainer}>
              <TextInput
                style={Styles.TextInputDisplay1}
                value={this.state.email}
                placeholder="email"
                onChangeText={teks => this.setState({email: teks})}
              />
            </View>
            <View style={Styles.inputContainer}>
              <TextInput
                style={Styles.TextInputDisplay1}
                value={this.state.password}
                placeholder="password"
                onChangeText={teks => this.setState({password: teks})}
              />
            </View>
            <View style={Styles.inputContainer}>
              <TextInput
                style={Styles.TextInputDisplay2}
                value={this.state.no_telp}
                placeholder="telp"
                onChangeText={teks => this.setState({no_telp: teks})}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row', paddingTop: 40}}>
            <View style={{marginLeft: 45, marginTop: 30}}>
              <TouchableOpacity
                onPress={() =>
                  this.register(username, name, email, no_telp, password)
                }
                style={Styles.TouchableDisplay}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: '#633689'}}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{marginLeft: 150, paddingTop: 20}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('login')}
                style={Styles.TouchableDisplay2}>
                <Text style={Styles.TextUnderTouchDisplay}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default Register;

const Styles = StyleSheet.create({
  TouchableDisplay: {
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  TouchableDisplay2: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    alignSelf: 'flex-end',
    backgroundColor: '#633689',
    marginTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    elevation: 10,
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
  },
  TextUnderTouchDisplay: {
    color: '#fff',
    fontWeight: 'bold',
    elevation: 10,
    fontSize: 16,
  },
  ViewHeader: {
    height: 50,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#633689',
    elevation: 10,
  },
  TextHeader: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  TextInputDisplay: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  TextInputDisplay1: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  TextInputDisplay2: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,

    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
