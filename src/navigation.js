import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Chat from '../src/chat';
import Status from './hiasanbuatkontak';
import Riwayat from '../src/riwayat';
import Setting from '../src/setting';
import Akun from './profil';
import Login from '../src/Login';
import Register from '../src/Register';
import Todo from './daftarkontak';
import Apppp from '../src/importexternal';
import FirstPage from '../componen/firstpage';
import SecondPage from '../componen/secondpage';
import Iconaku from '../componen/fungsiicon';
import Daftarkontak from './daftarkontak';
import Edit from './editprofile';
import User from './Akun';
import Simpananpesan from './pesan yang disimpan';
import Info from './info';
import Screenchat from './screenchat';
import Editdata from './percobaan';

import CustomSidebarMenu from '../src/sidebar';

class HamburgerIcon extends Component {
  toggleDrawer = () => {
    console.log(this.props.navigationProps);

    this.props.navigationProps.toggleDrawer();
  };
  setting = () => {
    this.props.navigationProps.navigate('setting');
  };
  akun = () => {
    this.props.navigationProps.navigate('akun');
  };
  profile = () => {
    this.props.navigationProps.navigate('profile');
  };
  pesan = () => {
    this.props.navigationProps.navigate('pesan');
  };
  Info = () => {
    this.props.navigationProps.navigate('Info');
  };

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        {/* <View style={{paddingLeft:15}}>
        <TouchableOpacity onPress={this.toggleDrawer.bind (this)}>

          <Image
            source={require('../gambar/ui.png')}
            style={{width: 35, height: 35, marginLeft: 5}}
          />

        </TouchableOpacity>
        </View> */}
        <View style={{paddingLeft: 30}}>
          <Text style={{fontSize: 20, color: '#fff'}}>Chat App</Text>
        </View>
        <View style={{paddingLeft: 170}}>
          <Iconaku
            //Menu Text
            menutext="Menu"
            //Menu View Style
            menustyle={{
              marginRight: 16,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
            //Menu Text Style
            textStyle={{
              color: 'white',
            }}
            //Click functions for the menu items
            option1Click={this.setting.bind(this)}
            option2Click={this.akun.bind(this)}
            option3Click={this.profile.bind(this)}
            option4Click={this.pesan.bind(this)}
            option5Click={this.Info.bind(this)}
          />
        </View>
      </View>
    );
  }
}

export const Tab_1 = createMaterialTopTabNavigator(
  {
    Chat: {
      screen: Chat,
    },
    Riwayat: {
      screen: Riwayat,
    },
  },
  {
    tabBarPosition: 'top',

    swipeEnabled: true,

    tabBarOptions: {
      activeTintColor: '#fff',
      pressColor: '#004D40',
      inactiveTintColor: '#fff',
      style: {
        backgroundColor: '#633689',
      },

      labelStyle: {
        fontSize: 13,
        fontWeight: '200',
      },
    },
  },
);

const First_2_Tabs = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Register: {
    screen: Register,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Daftarkontak: {
    screen: Daftarkontak,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Edit: {
    screen: Edit,
    navigationOptions: () => ({
      header: null,
    }),
  },
  setting: {
    screen: Setting,
    navigationOptions: () => ({
      header: null,
    }),
  },
  akun: {
    screen: Akun,
    navigationOptions: () => ({
      header: null,
    }),
  },
  profile: {
    screen: User,
    navigationOptions: () => ({
      header: null,
    }),
  },
  pesan: {
    screen: Simpananpesan,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Info: {
    screen: Info,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Screenchat: {
    screen: Screenchat,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Editdata: {
    screen: Editdata,
    navigationOptions: () => ({
      header: null,
    }),
  },
  First: {
    screen: Tab_1,
    navigationOptions: ({navigation}) => ({
      // title: 'Alpha chat',
      headerLeft: <HamburgerIcon navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#633689',
        elevation: 0, // remove shadow on Android
        shadowOpacity: 0, // remove shadow on iOS
      },
      headerTintColor: '#fff',
    }),
  },
});

// const MyDrawerNavigator = createDrawerNavigator ({
//   Home: {
//     screen: First_2_Tabs,
//   },
//   setting: {
//     screen: Setting,
//   },
//   akun:{
//     screen:Akun
//   },
//   profile: {
//     screen: User,
//   },
//   pesan: {
//     screen: Simpananpesan,
//   },
//   Info: {
//     screen: Info,
//   },},{
//     contentComponent: CustomSidebarMenu,
//     //Sidebar width
//     drawerWidth: Dimensions.get('window').width - 80,

// });

export default createAppContainer(First_2_Tabs);
