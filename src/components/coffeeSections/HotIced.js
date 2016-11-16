import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import ToggleButton from '../common/ToggleButton';
import * as actions from '../../actions/CoffeeActionCreators';

class HotIced extends Component {

  setHot(){
    this.props.selectIced("Hot");
    this.props.toggleCoffeeBool({ prop: "hotBool", value: true });
    this.props.toggleCoffeeBool({ prop: "icedBool", value: false });
    this.props.updateCoffeeTitle();
  }

  setIced(){
    this.props.selectIced("Iced");
    this.props.toggleCoffeeBool({ prop: "icedBool", value: true });
    this.props.toggleCoffeeBool({ prop: "hotBool", value: false });
    this.props.updateCoffeeTitle();
  }

  render() {
    return (
      <View style={styles.smallContainer}>
         <ToggleButton onPress={this.setHot.bind(this)} lit={this.props.hotBool} > Hot </ToggleButton>
         <ToggleButton onPress={this.setIced.bind(this)} lit={this.props.icedBool} > Iced </ToggleButton>
       </View>
    );
  }
}

const styles = {
    smallContainer: {
      marginTop: 3,
      backgroundColor: 'black',
      justifyContent: 'center',
      flexDirection: 'row',
      position: 'relative',
      flex:1
  }
};

const mapStateToProps = (state) => {

  const { hotBool, icedBool } = state.currentCoffee;

  return { hotBool, icedBool };

};

export default connect(mapStateToProps, actions)(HotIced);
