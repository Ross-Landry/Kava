import React, { Component } from 'react';
import { View, StyleSheet, PixelRatio, Text } from 'react-native';
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');
import * as actions from '../../actions/OrderActionCreators';

class ItemPrice extends Component {

    render() {
      const { containerStyle, extraStyle, priceText } = styles;
      return(
        <View style={[containerStyle, extraStyle]}>
          <Text style = {priceText}>
             ${this.props.price.toFixed(2)}
          </Text>
        </View>
      );
    }
};


const styles = {
  containerStyle: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
    paddingTop: 2
  },
  extraStyle: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight:4
  },
  priceText: {
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,16),
    padding: 4,
    paddingBottom: 3
  },
};

export default ItemPrice;
