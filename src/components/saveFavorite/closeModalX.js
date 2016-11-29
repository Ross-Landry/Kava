import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
//Font adjustment
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');

class X extends Component {

  render(){
    return(
      <Image
          source={require('../../images/x.png')}
          style={{height: w*0.05, width: w*0.05, position: 'absolute', right: w*0.075, top: h*0.06}}
      />
      );
  }
};

export default X;
