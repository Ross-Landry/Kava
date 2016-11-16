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
import TitleDescription from './TitleDescription';
import * as actions from '../../actions/OrderActionCreators';


class OrderItem extends Component {

  componentWillUpdate() {
    LayoutAnimation.linear();
  }

  //Set the currently selected item
  itemPressed(id) {
    if (this.props.item.uid === this.props.selectedItem){
      this.props.selectOrderItem(null);
    }
    else {
      this.props.selectOrderItem(id);
    }
  }

  //Remove an item from the order
  removeItem(id) {
     this.props.removeOrderItem(id);
  }
  renderArrow() {

    const parametricDimensionSelected= h*0.032;
    const parametricDimensionUnselected= h*0.025;

    if (this.props.item.uid === this.props.selectedItem){
      return (
          <Image
              source={require('../../images/arrow.png')}
              style={{height: parametricDimensionSelected, width: parametricDimensionSelected }}
          />
      );
    }
    else {
      return (
          <Image
              source={require('../../images/rightArrow.png')}
              style={{height:parametricDimensionUnselected, width: parametricDimensionUnselected}}
          />
      );
    }

  }
  renderButtons() {

    const { editRemoveButtonText, editRemoveButtonContainers, containerStyle } = styles;

    //Check to see if the current row is the one currently selected. Display the JSX if it is.
    if (this.props.item.uid === this.props.selectedItem){
      return (
          <View style={containerStyle}>
            <TouchableOpacity style={{flex:1}}>
              <View style={editRemoveButtonContainers}>
                <Text style={editRemoveButtonText} >Edit</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flex:1}} onPress={()=>{this.removeItem(this.props.item.uid)}}>
              <View style={[editRemoveButtonContainers, {borderLeftColor:'#555', borderLeftWidth: 1}]}>
                <Text style={editRemoveButtonText} >Remove</Text>
              </View>
            </TouchableOpacity>
          </View>
      );
    }
  }

  render() {
    const { price, uid } = this.props.item;
    const { containerStyle, arrowContainer, itemContainer } = styles
    return (

        <View style={itemContainer}>
            <TouchableHighlight onPress={()=>this.itemPressed(uid)}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <View style={[containerStyle, arrowContainer]}>
                      {this.renderArrow()}
                  </View>
                  <TitleDescription title={this.props.item.title} description={this.props.item.description}/>
                  <ItemPrice price={price}/>
                </View>
              </View>
            </TouchableHighlight>
            {this.renderButtons()}
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
  arrowContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

const mapStateToProps = state => {
    return { selectedItem: state.order.selectedItem }
};
export default connect(mapStateToProps, actions)(OrderItem);
