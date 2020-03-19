import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux'; // mehubungkan antara redux dan react

class Home extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <Text>Memanggil state dari login </Text>
          <Text> Email = {this.props.email}</Text>
          <Text>Password = {this.props.password}</Text>
        </View>
      </View>
    );
  }
}

// membuat fungsi untuk mengembalikan nilai state yang dipanggil
// karena kita udah menjadikan state global ketika membuat Provider pada app.js jadi bisa dipanggil dimana saja
const mapStateToProps = state => {
  const {email, password} = state.reducer;
  return {email, password};
};

export default connect(mapStateToProps)(Home); //menghubungkan antara redux mapStateToProps dengan react yaitu home
