//Libraries
import React, { Component } from 'react';
import { LayoutAnimation, Text, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
//Font Adjustment
import { PixelRatio } from 'react-native';
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');
//Custom
import { updateLocation } from '../../actions/LocationActionCreators';
//Style
import { mainFont } from '../../styles/styleObjects';


class LocationItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.linear();
  }

  //Set the currently selected item
  itemPressed(location) {
      this.props.updateLocation(location);
      Actions.menu();
  }


  render() {
    const { title, uid } = this.props.item;
    const { itemContainer, locationName } = styles
    return (

        <View style={itemContainer}>
            <TouchableOpacity onPress={()=>this.itemPressed(this.props.item)}>
                <View style={{flex:4, justifyContent:'center', alignItems:'center'}}>
                  <Text style={[locationName, mainFont]}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>

    );
  }
}

const styles = {
  itemContainer: {
    borderBottomColor:'#ddd',
    borderBottomWidth: 1,
  },
  locationName: {
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,18),
    padding: 20
  }
};

export default connect(null, { updateLocation })(LocationItem);