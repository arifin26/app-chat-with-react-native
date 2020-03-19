//This is an example code for the popup menu//
import React, { Component } from 'react';
//import react in our code.
import { View, Text, Button } from 'react-native';
//import all the components we are going to use.
import CustomMenu from './custome';
//import our Custom menu component
import CustomMenuIcon from './menuicon';
//import our Custom Icon menu component
 
class FirstPage extends Component {
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
            navigation.navigate('SecondPage');
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
      <View style={{ flex: 1, backgroundColor: '#ffdffd' }}>
     
      </View>
    );
  }
}
export default FirstPage;