import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Info extends React.Component {
  render() {
    return (
      <View>
        <View style={{flex: 1}}>
          <View style={style.Search}>
            <Text style={{color: '#fff'}}>Info</Text>
          </View>
          <View style={style.text}>
            <Text style={style.teks}>made in :</Text>
            <Text style={style.teks}>ARIFIN :D</Text>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  Search: {
    flexDirection: 'row',
    height: 50,
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
});
