import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import ToggleButton from '../common/ToggleButton';
import * as actions from '../../actions/TeaActionCreators';

class SizeSelector extends Component {

  setSmall(){
    this.props.toggleTeaBool({ prop: "smallBool", value: true });
    this.props.toggleTeaBool({ prop: "mediumBool", value: false });
    this.props.toggleTeaBool({ prop: "largeBool", value: false });
    this.props.selectSize({ size: 'Small', price:1.75});
    this.props.updateTeaTitle();
    this.props.updateTeaPrice();

  }
  setMedium(){
    this.props.toggleTeaBool({ prop: "smallBool", value: false });
    this.props.toggleTeaBool({ prop: "mediumBool", value: true });
    this.props.toggleTeaBool({ prop: "largeBool", value: false });
    this.props.selectSize({ size: 'Medium', price:2.00});
    this.props.updateTeaTitle();
    this.props.updateTeaPrice();
  }
  setLarge(){
    this.props.toggleTeaBool({ prop: "smallBool", value: false });
    this.props.toggleTeaBool({ prop: "mediumBool", value: false });
    this.props.toggleTeaBool({ prop: "largeBool", value: true });
    this.props.selectSize({ size: 'Large', price:2.25});
    this.props.updateTeaTitle();
    this.props.updateTeaPrice();
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

  const { smallBool, mediumBool, largeBool } = state.currentTea;

  return { smallBool, mediumBool, largeBool };

};

export default connect(mapStateToProps, actions)(SizeSelector);
