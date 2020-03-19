import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
  StyleSheet,
  AsyncStorage,
  FlatList,
  Alert,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import ActionButton from 'react-native-action-button';
import {connect} from 'react-redux';
import {dataid, emailChange} from '../redux/action/index';

console.disableYellowBox = true;

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filePath: {},
      coba: '',
      datasource: [],
      pengguna: '',
      username: '',
      isLoading: true,
      data: '',
      id: '',
      access_token: '',
    };
  }

  out = () => {
    AsyncStorage.removeItem('access_token');
    AsyncStorage.removeItem('user');
    AsyncStorage.removeItem('username');
    AsyncStorage.removeItem('name');
    AsyncStorage.removeItem('email');
    AsyncStorage.removeItem('no_telp');
    AsyncStorage.removeItem('avatar');
    this.props.navigation.navigate('register');
  };

  componentDidMount() {
    AsyncStorage.getItem('id').then(value => {
      if (value != null) {
        this.setState({pengguna: value});
        alert(value);
      } else {
        console.log('error');
      }
    });
    this.test();
  }

  // fetchdata = () => {
  //   // const coba = this.state.user;
  //   fetch('https://calm-mesa-84057.herokuapp.com/tampil')
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       responseJson.filter(value => {
  //         if (value.id === this.state.pengguna) {
  //           alert(value.username);
  //           AsyncStorage.setItem('username', value.username);
  //           AsyncStorage.setItem('name', value.name);
  //           AsyncStorage.setItem('email', value.email);
  //           AsyncStorage.setItem('avatar', value.avatar);
  //           AsyncStorage.setItem('no_telp', JSON.stringify(value.no_telp));
  //         }
  //       });
  //     })
  //     .catch(err => console.log(JSON.stringify(err)));
  // };

  test = () => {
    fetch('https://calm-mesa-84057.herokuapp.com/tampil')
      .then(response => response.json())
      .then(responseJson => {
        // console.log(responseJson);
        this.setState({isLoading: false, datasource: responseJson});
      })

      .catch(err => console.log(err));
  };

  image = item => {
    if (item.avatar === null) {
      return (
        <Image
          source={require('../../gambar/user.png')}
          style={{height: 40, width: 40}}
        />
      );
    } else {
      return (
        <Image
          source={{uri: item.avatar}}
          style={{borderRadius: 20, width: 40, height: 40}}
        />
      );
    }
  };

  contoh = item => {
    this.props.dataid(item.id);
    this.props.emailChange(item.username);
    // console.log(item.id);
    this.props.navigation.navigate('Screenchat');
    // console.log(JSON.stringify(this.props.data));
  };

  componet = ({item}) => {
    const {username, avatar, id} = item;
    const {navigation} = this.props;
    return (
      <TouchableOpacity onPress={() => this.contoh(item)}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: '#DCDCDC',
            backgroundColor: '#fff',
            borderBottomWidth: 1,
            padding: 10,
          }}>
          <View style={{justifyContent: 'center'}}>{this.image(item)}</View>
          <View style={{justifyContent: 'center', paddingLeft: 10}}>
            <Text
              style={{
                marginLeft: 15,
                fontWeight: '600',
                color: '#222',
                fontSize: 14,
                width: 170,
              }}>
              {username}
            </Text>
            {/* <Text>{id}</Text> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />

        <View style={{flex: 1}}>
          <FlatList
            data={this.state.datasource}
            renderItem={this.componet}
            keyExtractor={(item, index) => item.toString()}
            onRefresh={this.test}
            refreshing={this.state.isLoading}
          />
        </View>

        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item
            buttonColor="#9b59b6"
            title="pesan baru"
            onPress={() => alert(this.state.pengguna)}>
            <Image
              source={require('../../gambar/pencil.png')}
              style={styles.actionButtonIcon}
            />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#3498db"
            title="pengaturan"
            onPress={() => this.props.navigation.navigate('pengaturan')}>
            <Image
              source={require('../../gambar/settings.png')}
              style={styles.actionButtonIcon}
            />
          </ActionButton.Item>
          <ActionButton.Item
            buttonColor="#1abc9c"
            title="keluar"
            onPress={() => this.out()}>
            <Image
              source={require('../../gambar/logout.png')}
              style={styles.actionButtonIcon}
            />
          </ActionButton.Item>
        </ActionButton>
      </View>
    );
  }
}

const mapState = state => {
  const {data, email} = state.reducer;
  // console.log(data);
  return {data, email};
};

export default connect(mapState, {dataid, emailChange})(Chat);

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 17,
    height: 23,
    width: 23,
    color: 'white',
  },
});
