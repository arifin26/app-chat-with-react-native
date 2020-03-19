import React, {Component} from 'react';
import {Provider} from 'react-redux'; //mengambil Provider dari reac-redux, fungsi dari rect-redux iyalah untuk menggabungkan antara react dan redux makan disebut react-redux
import {createStore} from 'redux'; // memanggil createStore dari redux
import Home from './screen/home';
import Login from './screen/login';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Reducer from './reducer/index';

const Store = createStore(Reducer, {});
// memubat store yg akan menampung semua state yang berada diReducer

class Redux extends Component {
  render() {
    return (
      <Provider store={Store}>
        {/* supaya semua yg ada distore bisa digunakan disemua screen makan store dimasukan diProvider */}
        <Router>
          {/* membuat router dengan menggunakan react-native-router-flux karena simpel dan mudah digunakan pada redux*/}
          <Stack key="root">
            <Scene key="login" component={Login} title="Login" />
            {/* key untuk pemanggialn dari component yang ada didalamnya */}
            <Scene key="home" component={Home} title="Home" />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

export default Redux;
