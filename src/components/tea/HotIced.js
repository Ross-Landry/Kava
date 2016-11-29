import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import ToggleButton from '../common/ToggleButton';
import * as actions from '../../actions/TeaActionCreators';

class HotIced extends Component {

  setHot(){
    this.props.selectIced("Hot");
    this.props.toggleTeaBool({ prop: "hotBool", value: true });
    this.props.toggleTeaBool({ prop: "icedBool", value: false });
    this.props.updateTeaTitle();
  }

  setIced(){
    this.props.selectIced("Iced");
    this.props.toggleTeaBool({ prop: "icedBool", value: true });
    this.props.toggleTeaBool({ prop: "hotBool", value: false });
    this.props.updateTeaTitle();
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

  const { hotBool, icedBool } = state.currentTea;

  return { hotBool, icedBool };

};

export default connect(mapStateToProps, actions)(HotIced);
