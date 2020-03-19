import React from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Dimensions,
  AsyncStorage,
  Modal,
  StatusBar,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';

const {width: WIDTH} = Dimensions.get('window');

class Login extends React.Component {
  state = {
    isLoading: false,
    username: '',

    email: '',
    password: '',
    modalVisible: false,
  };
  componentDidMount() {
    AsyncStorage.getItem('access_token').then(value => {
      if (value != null) {
        this.props.navigation.navigate('wechat');
        // alert('error');
      }
    });
  }

  Login = (username, password) => {
    this.setState({modalVisible: true});
    fetch('https://calm-mesa-84057.herokuapp.com/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        if (response.access_token) {
          AsyncStorage.setItem('id', JSON.stringify(response.user.id));
          AsyncStorage.setItem('access_token', response.access_token);
          // AsyncStorage.setItem('id', response.user.id);
          AsyncStorage.setItem('username', response.user.username);
          AsyncStorage.setItem('name', response.user.name);
          AsyncStorage.setItem('email', response.user.email);
          AsyncStorage.setItem(
            'no_telp',
            JSON.stringify(response.user.no_telp),
          );
          AsyncStorage.setItem('avatar', response.user.avatar);
          this.props.navigation.navigate('wechat');
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
    let {username, password} = this.state;
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
          <Text style={Styles.TextHeader}> LOGIN </Text>
        </View> */}
          {/* <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 80,
            }}>
            <Image
              source={require('../../gambar/a-transparent.png')}
              style={{height: 110, width: 110}}
            />
            
          </View> */}
          <View style={{paddingTop: 200}}>
            <View style={Styles.ViewDisplay}>
              <TextInput
                style={Styles.TextInputDisplay}
                value={this.state.username}
                placeholder="username"
                onChangeText={teks => this.setState({username: teks})}
              />
            </View>
            <View style={Styles.ViewDisplay}>
              <TextInput
                style={Styles.TextInputDisplay2}
                value={this.state.password}
                placeholder="password"
                onChangeText={teks => this.setState({password: teks})}
                secureTextEntry
              />
            </View>
          </View>

          <View style={{flexDirection: 'row', paddingTop: 110}}>
            <View style={{marginLeft: 45, marginTop: 25}}>
              <TouchableOpacity
                style={Styles.TouchableDisplay}
                loading={true}
                onPress={() => this.Login(username, password)}>
                <Text
                  style={{fontSize: 20, fontWeight: 'bold', color: '#633689'}}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{marginLeft: 140, paddingTop: 13}}>
              <TouchableOpacity
                style={Styles.TouchableDisplay2}
                onPress={() => this.props.navigation.navigate('register')}>
                <Text style={Styles.TextUnderTouchDisplay}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
export default Login;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
  ViewDisplay: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    alignSelf: 'center',

    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  TextDisplay: {
    marginBottom: '10%',
    fontSize: 19,
    fontStyle: 'italic',
    fontWeight: 'bold',
    width: WIDTH - 35,
  },
  TextInputDisplay: {
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
  TextUnderTextInput: {
    width: WIDTH - 30,
    paddingLeft: 23,
    fontSize: 11,
    fontStyle: 'italic',
    color: '#778899',
    textAlign: 'center',
  },
  TouchableDisplay: {
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 20,
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
    fontSize: 16,
  },
  TextMaker: {
    fontSize: 12,
    fontStyle: 'italic',
    marginBottom: '2%',
    marginLeft: '55%',
    color: '#a9a9a9',
  },
});
