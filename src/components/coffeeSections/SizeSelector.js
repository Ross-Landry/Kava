import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import ToggleButton from '../common/ToggleButton';
import * as actions from '../../actions/CoffeeActionCreators';


class SizeSelector extends Component {

  setSmall(){
    this.props.toggleCoffeeBool({ prop: "smallBool", value: true });
    this.props.toggleCoffeeBool({ prop: "mediumBool", value: false });
    this.props.toggleCoffeeBool({ prop: "largeBool", value: false });
    this.props.selectSize({ size: 'Small', price:2.00});
    this.props.updateCoffeeTitle();
    this.props.updateCoffeePrice();

  }
  setMedium(){
    this.props.toggleCoffeeBool({ prop: "smallBool", value: false });
    this.props.toggleCoffeeBool({ prop: "mediumBool", value: true });
    this.props.toggleCoffeeBool({ prop: "largeBool", value: false });
    this.props.selectSize({ size: 'Medium', price:2.50});
    this.props.updateCoffeeTitle();
    this.props.updateCoffeePrice();
  }
  setLarge(){
    this.props.toggleCoffeeBool({ prop: "smallBool", value: false });
    this.props.toggleCoffeeBool({ prop: "mediumBool", value: false });
    this.props.toggleCoffeeBool({ prop: "largeBool", value: true });
    this.props.selectSize({ size: 'Large', price:2.75});
    this.props.updateCoffeeTitle();
    this.props.updateCoffeePrice();
  }

  render() {
    return (
      <View style={styles.smallContainer}>
         <ToggleButton onPress={this.setSmall.bind(this)} lit={this.props.smallBool} > Small </ToggleButton>
         <ToggleButton onPress={this.setMedium.bind(this)} lit={this.props.mediumBool} > Medium </ToggleButton>
         <ToggleButton onPress={this.setLarge.bind(this)} lit={this.props.largeBool} > Large </ToggleButton>
       </View>
    );
  }
}

const styles = {
  smallContainer: {
    backgroundColor: 'black',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'relative',
    flex:1
  }
};

const mapStateToProps = (state) => {

  const { smallBool, mediumBool, largeBool } = state.currentCoffee;

  return { smallBool, mediumBool, largeBool };

};

export default connect(mapStateToProps, actions)(SizeSelector);
