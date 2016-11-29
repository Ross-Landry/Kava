import React, { Component } from 'react';
import { View, StyleSheet, PixelRatio, Text } from 'react-native';
import { connect } from 'react-redux';
//Font Size Correction
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');
//Style
import { lightColor } from '../../styles/colors';

class CurrentLocation extends Component {

    render() {
      const { container, text } = styles;
      return(
        <View style={container}>
            <Text style={text}>
              {this.props.currentLocation.title}
            </Text>
        </View>
      );
    }
};


const styles = {
  container: {
    flex:2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row',
    borderTopColor: '#bbb',
    borderTopWidth: 2,
    borderBottomColor: '#bbb',
    borderBottomWidth: 2,
    padding: 5,
    backgroundColor: lightColor,
  },
  text: {
    textAlign:'center',
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,14),
    fontWeight: '600'
  }
};

const mapStateToProps = state => {
    const currentLocation = state.location.currentStore
    return { currentLocation };
};

export default connect (mapStateToProps, null)(CurrentLocation);