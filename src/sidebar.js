//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
import { View, StyleSheet, Image, Text ,TouchableOpacity} from 'react-native';

 
export default class CustomSidebarMenu extends Component {
  constructor() {
    super();
    //Setting up the Main Top Large Image of the Custom Sidebar
    this.proileImage =
      'https://aboutreact.com/wp-content/uploads/2018/07/sample_img.png';
    //Array of the sidebar navigation option with icon and screen to navigate
    //This screens can be any screen defined in Drawer Navigator in App.js
    //You can find the Icons from here https://material.io/tools/icons/
    this.items = [
      {
       
        navOptionName: 'setting',
        screenToNavigate: 'setting',
      },
      {
        
        navOptionName: 'profil',
        screenToNavigate: 'akun',
      },
      {
        
        navOptionName: 'akun',
        screenToNavigate: 'profile',
      },
      {
        
        navOptionName: 'pesan yang disimpan',
        screenToNavigate: 'pesan',
      },
      {
        
        navOptionName: 'info',
        screenToNavigate: 'Info',
      },
    ];
  }
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        {/*Top Large Image */}
        <View style={{width:"100%",alignItems:'center',paddingBottom:20}}>
        <Image
          source={require('../gambar/deviantart.png')}
          style={styles.sideMenuProfileIcon}
        />
        </View>
        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e',
            marginTop: 15,
          }}
        />
        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{ width: '100%' }}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
              }}
              key={key}>
              <View style={{ marginRight: 10, marginLeft: 20 }}>
                <Image source={require('../gambar/black-ball.png')} style={{height:22,width:22}} />
              </View>
              <TouchableOpacity>
              <Text
                style={{
                  fontSize: 15,
                  color: global.currentScreenIndex === key ? '#633689' : 'black',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}>
                {item.navOptionName}
              </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 150 / 2,
    borderColor:'red'
  },
});