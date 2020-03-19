import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Image,
  StatusBar,
  ScrollView,
  Alert,
  Linking,
  TouchableOpacity,
  TextInput,
  AsyncStorage,
} from 'react-native';
import {connect} from 'react-redux';
// import axios from 'axios';

class Screenchat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      dataSource: [],
      id: 0,
      msg: '',
    };
  }

  componentWillMount() {
    AsyncStorage.getItem('id').then(value => {
      if (value != null) {
        this.setState({id: value});
        alert(value);
      }
    });
    this.test();
  }
  componentDidUpdate() {
    this.test();
  }

  register = () => {
    this.setState({modalVisible: true});
    fetch('https://calm-mesa-84057.herokuapp.com/message/send', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender_id: this.state.id,
        receiver_id: this.props.data,
        text: this.state.msg,
      }),
    })
      .then(response => response.json())
      .then(response => {
        this.setState({msg: ''});
      })

      .catch(error => {
        console.log(error);
        // alert('error');
      });
  };

  test = () => {
    fetch(
      `https://calm-mesa-84057.herokuapp.com/message/${this.state.id}/${this.props.data}`,
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.message);
        this.setState({
          isLoading: false,
          dataSource: responseJson.message,
        });
        // console.log(this.state.dataSource);
      })

      .catch(err => console.log(err));
  };

  _separatorComponent = () => {
    return <View style={{backgroundColor: 'grey'}} />;
  };

  _itemComponent = ({item}) => {
    let inpesan = item.sender_id === item.receiver_id;
    let itemstyle = inpesan ? styles.inpesan : styles.outpesan;
    return (
      <View style={[styles.home, itemstyle]}>
        <View style={{flexDirection: 'column'}}>
          <View>
            <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
              {item.text}
            </Text>
            {/* <Text style={{textAlign: 'center'}}>{this.state.msg}</Text> */}
          </View>
        </View>
      </View>
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{alignItems: 'center'}}>
          <ActivityIndicator size={'large'} />
        </View>
      );
    }
    let {msg} = this.state;
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="dark-content" backgroundColor="#633689" />
        <View style={styles.Search}>
          <Text style={{color: '#fff'}}>{this.props.email}</Text>
        </View>

        <FlatList
          data={this.state.dataSource}
          renderItem={this._itemComponent}
          keyExtractor={(item, index) => item.toString()}
          // keyExtractor={item => item.toString()}
          onRefresh={this.test}
          refreshing={this.state.isLoading}
          ItemSeparatorComponent={this._separatorComponent}
        />

        <View style={styles.footer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Write a message..."
              underlineColorAndroid="transparent"
              value={this.state.msg}
              onChangeText={teks => this.setState({msg: teks})}
            />
          </View>

          <TouchableOpacity
            onPress={() => this.register(msg)}
            style={styles.btnSend}>
            <Image
              source={require('../../gambar/icons8-email-send-96.png')}
              style={styles.iconSend}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {data, email} = state.reducer;
  // alert(data);
  return {data, email};
};

export default connect(mapStateToProps)(Screenchat);
const styles = StyleSheet.create({
  Search: {
    flexDirection: 'row',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#633689',
    elevation: 20,
  },
  footer: {
    flexDirection: 'row',
    height: 60,
    paddingHorizontal: 10,
    padding: 5,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#9b59b6',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
  },
  inputs: {
    height: 40,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  btnSend: {
    elevation: 10,
    borderWidth: 1,
    borderColor: '#9b59b6',
    backgroundColor: '#FFF',
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconSend: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  home: {
    justifyContent: 'center',
    marginBottom: 5,
    paddingBottom: 5,
    borderRadius: 3,
    paddingHorizontal: 10,

    maxWidth: '70%',

    borderWidth: 1,
    borderColor: '#9b59b6',
  },
  inpesan: {
    alignSelf: 'flex-start',
  },
  outpesan: {
    alignSelf: 'flex-end',
  },
});
