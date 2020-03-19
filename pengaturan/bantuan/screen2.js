import React from 'react';
import {View, Text} from 'react-native';

import {styles} from '../../style/styles';

export default class Bantuan extends React.Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>version:</Text>
        <Text>beta</Text>
      </View>
    );
  }
}
