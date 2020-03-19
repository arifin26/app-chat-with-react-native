import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  AsyncStorage,
  ScrollView,
  StatusBar,
  FlatList,
} from 'react-native';

export default class Pengaturan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: null,
    };
  }

  componentDidMount() {
    AsyncStorage.getItem('avatar').then(value => {
      if (value === null) {
        // alert(value);
        this.setState({
          avatar: (
            <Image
              source={require('../gambar/user.png')}
              style={{height: 60, width: 60}}
            />
          ),
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
        <View style={styles.Search}>
          <Text style={{color: '#fff', fontSize: 15}}>Pengaturan</Text>
        </View>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('screen1')}>
          <View style={styles.row}>
            <Image
              source={require('../gambar/user.png')}
              style={{
                width: 30,
                height: 30,
                borderRadius: 30,
                borderWidth: 1,
                borderColor: '#633689',
              }}
            />

            <View>
              <View style={styles.nameContainer}>
                <Text style={styles.nameTxt}>profil</Text>
              </View>
              <View style={styles.msgContainer}>
                <Text style={styles.msgTxt}>wechat</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.row}>
            <Image
              source={require('../gambar/bell.png')}
              style={{height: 30, width: 30}}
            />
            <View>
              <View style={styles.nameContainer}>
                <Text style={styles.nameTxt}>notifikasi</Text>
              </View>
              <View style={styles.msgContainer}>
                <Text style={styles.msgTxt}>wechat</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Akun')}>
          <View style={styles.row}>
            <Image
              source={require('../gambar/key.png')}
              style={{height: 30, width: 30}}
            />
            <View>
              <View style={styles.nameContainer}>
                <Text style={styles.nameTxt}>akun</Text>
              </View>
              <View style={styles.msgContainer}>
                <Text style={styles.msgTxt}>wechat</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Bantuan')}>
          <View style={styles.row}>
            <Image
              source={require('../gambar/question.png')}
              style={{height: 30, width: 30}}
            />
            <View>
              <View style={styles.nameContainer}>
                <Text style={styles.nameTxt}>bantuan</Text>
              </View>
              <View style={styles.msgContainer}>
                <Text style={styles.msgTxt}>wechat</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 18,
    width: 170,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
  Search: {
    height: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#633689',
    elevation: 20,
  },
});
