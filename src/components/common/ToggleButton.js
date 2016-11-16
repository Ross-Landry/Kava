import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { PixelRatio } from 'react-native';
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');

class ToggleButton extends Component {

  buttonStyle() {
    if(this.props.lit){
      return ({
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#f0f3bd',
        borderWidth: 1,
        borderColor: '#02c39a',
        margin: 4,
        justifyContent: 'center',
        borderRadius: 3
      });
    }
    else{
      return ({
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#222',
        borderWidth: 1,
        borderColor: '#444',
        margin: 4,
        justifyContent: 'center',
        borderRadius: 3
      });
    }
  }

  textStyle() {
    if(this.props.lit){
      return ({
        color: '#02c39a'
      });
    }
    else{
      return ({
        color: 'black'
      });
    }
  }

  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={this.buttonStyle()}>
          <Text style={[portraitStyles.titleText]}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

var portraitStyles = StyleSheet.create({
  titleText: {
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,18),
    alignSelf: 'center',
    color: '#02c39a',
    fontWeight: '600',
  },
});



export default ToggleButton;
