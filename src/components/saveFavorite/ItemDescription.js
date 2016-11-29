import React, { Component } from 'react';
import { View, StyleSheet, PixelRatio, Text } from 'react-native';
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');

class ItemDescription extends Component {

  render(){
    const { containerStyle, extraStyle, itemTitleDescriptionContainer, itemText, descriptionText } = styles;

    return(
      <View style={[containerStyle, itemTitleDescriptionContainer]}>
        <View>
          <Text style={itemText}>
            {this.props.item.title}
          </Text>
        </View>
        <View>
          <Text style={descriptionText}>
            {this.props.item.description}
          </Text>
        </View>
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
    paddingTop: 2,
    borderRadius: 10
    // borderWidth:1,
    // borderColor:'red'
  },
  itemText: {
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,18),
    padding: 4,
    paddingBottom: 3
  },
  itemTitleDescriptionContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#ccc'
  },
  descriptionText: {
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,14),
    padding: 3,
    color: '#555',
    paddingTop: 0
  },
};

export default ItemDescription;
