//Libraries
import React, { Component } from 'react';
import { LayoutAnimation, Text, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
//Font Adjustment
import { PixelRatio } from 'react-native';
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');
//Custom
import ItemPrice from './ItemPrice';
import { toggleReviewModal, selectFavorite } from '../../actions/FavoritesActionCreators';
//Style
import { mainFont } from '../../styles/styleObjects';


class FavoriteItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.linear();
  }

  //Set the currently selected item
  itemPressed() {

    this.props.selectFavorite(this.props.item);
    this.props.toggleReviewModal();
  }


  render() {
    const { price, uid } = this.props.item;
    const { itemContainer, favoriteName } = styles
    return (

        <View style={itemContainer}>
            <TouchableOpacity onPress={()=>this.itemPressed()}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex:4, justifyContent:'center', alignItems:'center'}}>
                    <Text style={[favoriteName, mainFont]}>{this.props.item.favoriteTitle}</Text>
                  </View>
                  <ItemPrice price={price}/>
                </View>
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
  favoriteName: {
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,18),
    padding: 20
  }
};

export default connect(null, { selectFavorite, toggleReviewModal })(FavoriteItem);
