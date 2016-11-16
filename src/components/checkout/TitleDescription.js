import React, { Component } from 'react';
import { View, StyleSheet, PixelRatio, Text } from 'react-native';
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');

class TitleDescription extends Component {

  render(){
    const { containerStyle, extraStyle, itemTitleDescriptionContainer, itemText, descriptionText } = styles;

    return(
      <View style={[containerStyle, itemTitleDescriptionContainer]}>
        <View>
          <Text style={itemText}>
            {this.props.title}
          </Text>
        </View>
        <View>
          <Text style={descriptionText}>
            {this.props.description}
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
    paddingTop: 2
  },
  itemText: {
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,16),
    padding: 4,
    paddingBottom: 3
  },
  itemTitleDescriptionContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,12),
    padding: 3,
    color: '#555',
    paddingTop: 0
  },
};

export default TitleDescription;
