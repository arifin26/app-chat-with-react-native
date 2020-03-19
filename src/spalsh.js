import React from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';
// import {Bars} from 'react-native-loader';
import Route from '../nav';

export default class Splash extends React.Component {
  state = {
    role: true,
  };

  render() {
    setTimeout(() => {
      this.setState({
        role: false,
      });
    }, 2000);
    if (this.state.role) {
      return (
        <View style={{alignItems: 'center', paddingTop: 70}}>
          <Image
            source={require('../gambar/a-transparent.png')}
            style={{height: 150, width: 150}}
          />

          <View style={{paddingTop: 90}}>
            {/* <Bars size={30} color="#633689" /> */}
          </View>
        </View>
      );
    }

    return <Route />;
  }
}
