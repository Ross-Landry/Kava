//Libraries
import React, { Component } from 'react';
import { LayoutAnimation, Text, View, TouchableOpacity, PixelRatio } from 'react-native';
import { Actions } from 'react-native-router-flux';
//Font Adjustment
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');
//Style
import { mainFont } from '../../styles/styleObjects';


class MenuItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.linear();
  }

  itemPressed() {
    const { routerKey } = this.props.item;
    Actions[routerKey]();
  }

  render() {
    
    const { itemContainer, favoriteName } = styles
    return (
        <TouchableOpacity onPress={()=>this.itemPressed()}>
                <View style={itemContainer}>
                    <Text style={[favoriteName, this.props.customStyle, mainFont]}>{this.props.item.uid}</Text>
                </View>
        </TouchableOpacity>

    );
  }
}

const styles = {
  itemContainer: {
    borderBottomColor:'#ddd',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    justifyContent:'center',
    alignItems:'center',
    padding: getCorrectFontSizeForScreen(PixelRatio, w,h,20)
  },
  favoriteName: {
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,18)
  }
};

export default MenuItem;