import React from 'react';
import {Image, View, TouchableOpacity, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Register from './src/register/Register';
import Login from './src/login/Login';
import Chat from './src/chat/chat';
import Riwayat from './src/riwayat/riwayat';
import Screen1 from './pengaturan/profile/screen1';
import Bantuan from './pengaturan/bantuan/screen2';
import Screen3 from './pengaturan/notification/screen3';
import Pengaturan from './pengaturan/pengaturan';
import Screenchat from './src/screen_chat/screenchat';
import Reducer from './src/redux/reducer/index';
import Akun from './pengaturan/akun/akunku';

// import ActionBarImage from './imagenav';
// import {Drawer} from 'native-base';

// const register = ({navigation}) => {
//   return <Register navigation={navigation} />;
// };

// const login = ({navigation}) => {
//   return <Login navigation={navigation} />;
// };
const Store = createStore(Reducer, {});
const Stack = createStackNavigator();
// const drawer = createDrawerNavigator();
const materialToptab = createMaterialTopTabNavigator();

export default class Route extends React.Component {
  render() {
    creatToptab = () => {
      return (
        <materialToptab.Navigator>
          <materialToptab.Screen
            name="chat"
            component={Chat}
            TabBarOptions={{
              headerStyle: {
                backgroundColor: '#633689',
              },
            }}
          />
          <materialToptab.Screen
            name="riwayat"
            component={Riwayat}
            options={{
              headerStyle: {
                backgroundColor: '#633689',
              },
            }}
          />
        </materialToptab.Navigator>
      );
    };

    return (
      <Provider store={Store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="register"
              component={Register}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="screen1"
              component={Screen1}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Bantuan"
              component={Bantuan}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="screen3"
              component={Screen3}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="pengaturan"
              component={Pengaturan}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Screenchat"
              component={Screenchat}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Akun"
              component={Akun}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="wechat"
              children={creatToptab}
              options={{
                headerShown: true,
                headerTitle: 'wechat',
                headerLeft: null,
                activeTintColor: '#000',
                inactiveTintColor: '#F8F8F8',
                headerStyle: {
                  elevation: null,
                  shadowOpacity: 0.9,
                  height: 40,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
