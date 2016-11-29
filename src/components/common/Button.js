//Libraries
import React from 'react';
import { Text, TouchableOpacity, PixelRatio } from 'react-native';
//Font Size Adjustment
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');
//Style
import { lightColor } from '../../styles/colors';

const Button = (props) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={props.onPress} style={[buttonStyle, props.customStyle]}>
      <Text style={textStyle}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'black',
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,20),
    fontWeight: '600',
  },
  buttonStyle: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: lightColor,
    borderWidth: 2,
    borderColor: '#02c39a',
    flex: 1,
    borderRadius: 3
  }
};

export { Button };
