import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import ToggleButton from '../common/ToggleButton';
import * as actions from '../../actions/CoffeeActionCreators';


class RegDecaf extends Component {

  setRegular(){
    this.props.toggleCoffeeBool({ prop: "regularBool", value: true });
    this.props.toggleCoffeeBool({ prop: "decafBool", value: false });
    this.props.selectDecaf('');
    this.props.updateCoffeeDescription();
  }

  setDecaf(){
    this.props.toggleCoffeeBool({ prop: "regularBool", value: false });
    this.props.toggleCoffeeBool({ prop: "decafBool", value: true });
    this.props.selectDecaf('DECAF');
    this.props.updateCoffeeDescription();
  }

  render() {
    return (
      <View style={styles.smallContainer}>
         <ToggleButton onPress={this.setRegular.bind(this)} lit={this.props.regularBool} > Regular </ToggleButton>
         <ToggleButton onPress={this.setDecaf.bind(this)} lit={this.props.decafBool} > Decaf </ToggleButton>
       </View>
    );
  }
}

const styles = {
  smallContainer: {
    backgroundColor: 'black',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
    flex:1
  }
};

const mapStateToProps = (state) => {

  const { regularBool, decafBool } = state.currentCoffee;

  return { regularBool, decafBool };

};

export default connect(mapStateToProps, actions)(RegDecaf);
