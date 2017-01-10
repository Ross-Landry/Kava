//Libraries
import React, { Component } from 'react';
import { View, Text, PixelRatio, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux'
import firebase from 'firebase'
//Custom
import { Button, Spinner } from '../common';
import SideMenu from './SideMenu';
import { fetchImage, imageOutdated } from '../../actions/MenuActionCreators'
import { addToOrder } from '../../actions/OrderActionCreators'
//Style
import { mainFont } from '../../styles/styleObjects'
//Font Scaling
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');

class StockItem extends Component {

    renderImage(image) {
      //If the image link has been updated then render the image
      if (this.props.newImage){
        return (
                <Image
                  style={image}
                  source={{uri: this.props.menuImageURL}}
                />
        );
      }
      //Otherwise show a spinner until the picture link has been updated
      else {
        return <Spinner size="large" />;
      }
   }
    render() {
      const { container, titleContainer, titleText, pictureContainer, 
              descriptionContainer, descriptionText, 
              innerContainer, priceText, image } = styles;
      
      return (
        <SideMenu open={this.props.showMenu}>
        <View style={container}>
            <View style={innerContainer}>               
                  <View style={titleContainer}>
                      <Text style={[titleText, mainFont]}> {this.props.item.uid} </Text>
                  </View>
                  
                  <View style={pictureContainer}>
                        {this.renderImage(image)}
                  </View>
                  
                  <View style={descriptionContainer}>
                      <Text style={[descriptionText, mainFont]}>  
                          {this.props.item.description} 
                      </Text>
                  </View>

                  <View style={titleContainer}>
                      <Text style={[priceText, mainFont]}> 
                          ${this.props.item.price.toFixed(2)} 
                      </Text>
                  </View>
            </View>
            <Button customStyle={{flex:1}} onPress={() => this.props.addToOrder({ ...this.props.item, description: '', title: this.props.item.uid}) }>
                Add to Order
            </Button>
        </View>
        </SideMenu>
      );
    }
}

const styles = {
  innerContainer: {
    flex: 7,
  },
  titleContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pictureContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 6,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black'
  },
  descriptionContainer: {
    flex: 2,
    justifyContent: 'center',
    padding: 8,
    borderBottomWidth: 1,
    borderColor: 'black',
    width: w*0.9
  },
  container: {
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'column',
    position: 'relative',
    flex: 1,
  },
  titleText: {
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,20),
    fontWeight: 'bold'
  },
  descriptionText: {
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,16),
  },
  priceText: {
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,18),
    fontWeight: 'bold'
  },
  image: {
    height: h*0.35,
    width: w*0.85
  }
};

const mapStateToProps = state => {

    const showMenu = state.sideMenu.showMenu;
    const { menuImageURL, newImage, stockMenuItem } = state.menu;
    return { item:stockMenuItem, showMenu, menuImageURL, newImage };
};

export default connect (mapStateToProps, {fetchImage, imageOutdated, addToOrder})(StockItem);