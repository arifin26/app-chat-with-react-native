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
// import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
// import Icon from 'react-native-vector-icons/FontAwesome';

var {height, width} = Dimensions.get('window');

class Screen1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: null,
      gambar: '',
      username: '',
      name: '',
      email: '',
      avatar: null,
      background: null,
      no_telp: '',
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('gambar').then(value => {
      if (value != null) {
        // alert(value);
        this.setState({gambar: `data:image/gif;base64, ${value}`});
      }
    });
    AsyncStorage.getItem('username').then(value => {
      if (value != null) {
        // alert(value);
        this.setState({username: value});
      }
    });
    AsyncStorage.getItem('name').then(value => {
      if (value != null) {
        // alert(value);
        this.setState({name: value});
      }
    });
    AsyncStorage.getItem('email').then(value => {
      if (value != null) {
        // alert(value);
        this.setState({email: value});
      }
    });
    AsyncStorage.getItem('no_telp').then(value => {
      if (value != null) {
        // alert(value);
        this.setState({no_telp: value});
      }
    });
    AsyncStorage.getItem('avatar').then(value => {
      if (value === null) {
        // alert(value);
        this.setState({
          avatar:
            'https://image.shutterstock.com/image-photo/beautiful-water-drop-on-dandelion-260nw-789676552.jpg',
        });
      } else {
        this.setState({avatar: value});
      }
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#633689" />
        <ScrollView>
          <View style={style.Search}>
            <Text style={{color: '#fff', fontSize: 15}}>profile</Text>
          </View>
          <ImageBackground
            source={{uri: this.state.avatar}}
            blurRadius={Platform.OS == 'ios' ? 10 : 5}
            style={{width: '100%', height: 200}}>
            <View
              style={{
                width: 140,
                height: 140,
                borderRadius: 100,
                borderWidth: 3,
                borderColor: '#633689',
                justifyContent: 'center',
                marginLeft: 30,
                marginTop: 100,
              }}>
              <Image
                source={{uri: this.state.avatar}}
                style={{
                  width: 140,
                  height: 140,
                  borderRadius: 100,
                  borderWidth: 3,
                  borderColor: '#633689',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}
              />
            </View>
          </ImageBackground>
          <View
            style={{
              flexDirection: 'column',
              flex: 1,
              height: 100,
              width: 200,
              borderWidth: 1,
              marginTop: 70,
              borderRadius: 30,
              marginLeft: 150,
            }}>
            <View style={style.teksawal}>
              <Text>name : {this.state.name}</Text>
            </View>
            <View style={style.teksawal}>
              <Text>no.telp : {this.state.no_telp}</Text>
            </View>
            <View style={style.teksawal}>
              <Text>email : {this.state.email}</Text>
            </View>
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
export default connect(mapStateToProps)(Screen1);
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
    marginLeft: 20,
    paddingTop: 10,
  },
});
