import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import ToggleButton from '../common/ToggleButton';
import * as actions from '../../actions/TeaActionCreators';


class RegDecaf extends Component {

  setRegular(){
    this.props.toggleTeaBool({ prop: "regularBool", value: true });
    this.props.toggleTeaBool({ prop: "decafBool", value: false });
    this.props.selectDecaf('');
    this.props.updateTeaDescription();
  }

  setDecaf(){
    this.props.toggleTeaBool({ prop: "regularBool", value: false });
    this.props.toggleTeaBool({ prop: "decafBool", value: true });
    this.props.selectDecaf('DECAF');
    this.props.updateTeaDescription();
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

  const { regularBool, decafBool } = state.currentTea;

  return { regularBool, decafBool };

};

export default connect(mapStateToProps, actions)(RegDecaf);
