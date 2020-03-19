import React, {Component} from 'react';
import {View, TextInput, Button} from 'react-native';
import {emailChange, passwordChange} from '../action/index'; //memanggial function dari action
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';

class Login extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{alignItems: 'center'}}>
          <TextInput
            style={styles.textInput}
            data={this.props.email}
            placeholder="Email"
            onChangeText={text => this.props.emailChange(text)} // memanggial emailChange dg props karena dia asalnya diluar class Login dan sebagai bagian dari redux
          />
          <TextInput
            style={styles.textInput}
            data={this.props.password}
            placeholder="Password"
            onChangeText={text => this.props.passwordChange(text)}
          />
          <Button title="Home" color="#841584" onPress={() => Actions.home()} />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {email, password} = state.reducer;
  console.log(email, password);
  return {email, password};
};

const styles = {
  textInput: {
    borderColor: '#841584',
    borderRadius: 1,
    borderWidth: 1,
    width: 300,
    height: 50,
    margin: 10,
    padding: 5,
  },
};
//supaya fungsi yang ada diaction bisa digunakan kita sambungkan dengan menggunakan connect
export default connect(mapStateToProps, {emailChange, passwordChange})(Login);
