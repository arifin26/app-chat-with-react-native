import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';

class Riwayat extends React.Component {
  // componentDidMount() {
  //   alert(this.props.data);
  // }
  render() {
    return (
      <View>
        <TouchableOpacity>
          <Text>{this.props.data}</Text>
          <Text>{this.props.email}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {data, email} = state.reducer;
  // alert(data);
  return {data, email};
};

export default connect(mapStateToProps)(Riwayat);
