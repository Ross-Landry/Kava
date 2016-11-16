//Libraries
import React, { Component } from 'react';
import { LayoutAnimation, Text, StyleSheet, View, TouchableHighlight, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
//Font Adjustment
import { PixelRatio } from 'react-native';
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');
//Custom
import ItemPrice from './ItemPrice';
import FavoriteDescription from './FavoriteDescription';
import TitleDescription from './TitleDescription';

import { toggleFavoriteModal, selectFavorite } from '../../actions/FavoritesActionCreators';


class FavoriteItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.linear();
  }

  //Set the currently selected item
  itemPressed() {

    this.props.selectFavorite(this.props.item);
    this.props.toggleFavoriteModal();
  }


  render() {
    const { price, uid } = this.props.item;
    const { containerStyle, arrowContainer, itemContainer, favoriteName } = styles
    return (

        <View style={itemContainer}>
            <TouchableOpacity onPress={()=>this.itemPressed()}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex:4, justifyContent:'center', alignItems:'center'}}>
                    <Text style={favoriteName}>{this.props.item.favoriteTitle}</Text>
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
  editRemoveButtonContainers: {
    flex:1,
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center',
    paddingTop: 4,
    paddingBottom: 4,
    backgroundColor: '#f0f3bd',
    borderTopColor: '#ddd',
    borderTopWidth: 1
  },
  editRemoveButtonText: {
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,16),
  },
  containerStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
    paddingTop: 2
  },
  columnContainerStyle: {
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative'
  },
  arrowContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  favoriteName: {
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,18),
    padding: 20
  }
};

const mapStateToProps = state => {
    return { selectedItem: state.order.selectedItem }
};
export default connect(mapStateToProps, { selectFavorite, toggleFavoriteModal })(FavoriteItem);
