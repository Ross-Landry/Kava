import React, { Component } from 'react';
import { View, StyleSheet, PixelRatio, Text } from 'react-native';
//Font Adjustment
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');
//Style
import { mainFont } from '../../styles/styleObjects';

class TitleDescription extends Component {
  renderDescription(itemText, descriptionText, containerStyle, itemTitleDescriptionContainer){
    if (this.props.description !== ''){
      return(
              <View style={[containerStyle, itemTitleDescriptionContainer]}>
                <View>
                  <Text style={[itemText, mainFont]}>
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
    else{  
      return(
              <View style={[containerStyle, itemTitleDescriptionContainer, {padding: 12}]}>
                <Text style={[itemText, mainFont,{padding: 12}]}>
                  {this.props.title}
                </Text>
              </View>
      );
    }
  }
  render(){
    const { containerStyle, extraStyle, itemTitleDescriptionContainer, itemText, descriptionText } = styles;

    return(
        <View>
          {this.renderDescription(itemText, descriptionText, containerStyle, itemTitleDescriptionContainer)}
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
    flex: 8,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: w*0.65
  },
  descriptionText: {
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,12),
    padding: 3,
    color: '#555',
    paddingTop: 0
  },
};

export default TitleDescription;
