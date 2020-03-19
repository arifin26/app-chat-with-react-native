
66
67
68
//This is an example code for the popup menu//
import React, { Component } from 'react';
//import react in our code. 
import { StyleSheet, View, Text} from 'react-native';
//import all the components we are going to use.
import CustomMenuIcon from './custome';
//import our Custom menu component
 
export default class SecondPage extends Component {
  //Navigation option to create menu in header
  static navigationOptions = ({ navigation }) => {
    return {
      //Heading/title of the header
      title: navigation.getParam('Title', 'Popup Menu Example'),
      //Heading style
      headerStyle: {
        backgroundColor: navigation.getParam('BackgroundColor', 'red'),
      },
      //Heading text color
      headerTintColor: navigation.getParam('HeaderTintColor', '#fff'),
      //Heading Menu in Right Side
      headerRight: (
        //Custom menu component
        <CustomMenuIcon
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
          option1Click={() => {
            navigation.navigate('FirstPage');
          }}
          option2Click={() => {}}
          option3Click={() => {}}
          option4Click={() => {
            alert('Option 4');
          }}
        />
      ),
    };
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>You are on SecondPage</Text>
        <Text>Menu on the top as well</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
