//This is an example code for the popup menu//
import React, { Component } from 'react';
//import react in our code.
import { View, Text,Image, TouchableOpacity  } from 'react-native';
//import all the components we are going to use.
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
//import menu and menu item
 
export default class Iconaku extends Component {
  _menu = null;
  setMenuRef = ref => {
    this._menu = ref;
  };
  showMenu = () => {
    this._menu.show();
  };
  hideMenu = () => {
    this._menu.hide();
  };
  option1Click = () => {
    this._menu.hide();
    this.props.option1Click();
  };
  option2Click = () => {
    this._menu.hide();
    this.props.option2Click();
  };
  option3Click = () => {
    this._menu.hide();
    this.props.option3Click();
  };
  option4Click = () => {
    this._menu.hide();
    this.props.option4Click();
  };
  option5Click = () => {
    this._menu.hide();
    this.props.option5Click();
  };
  render() {
    return (
      <View style={this.props.menustyle}>
        <Menu
          ref={this.setMenuRef}
          button={
            <TouchableOpacity onPress={this.showMenu}>
           <Image 
              source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/menu_icon.png'}} 
              style={{width: 30, height: 30}} 
              
            />
            </TouchableOpacity>
          }>
          <MenuItem onPress={this.option1Click}>setting</MenuItem>
          <MenuItem onPress={this.option2Click}>profile</MenuItem>
          <MenuItem onPress={this.option3Click}>akun</MenuItem>
          <MenuItem onPress={this.option4Click}>pesan yang disimpan</MenuItem>
          <MenuItem onPress={this.option5Click}>info</MenuItem>
          <MenuDivider />
          {/* <MenuItem onPress={this.option4Click}>
            op4:Option After Divider
          </MenuItem> */}
        </Menu>
      </View>
    );
  }
}