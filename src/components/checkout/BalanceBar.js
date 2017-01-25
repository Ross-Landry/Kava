import React, { Component } from 'react';
import { View, StyleSheet, PixelRatio, Text } from 'react-native';
import { connect } from 'react-redux';
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');
import * as actions from '../../actions/OrderActionCreators';

class BalanceBar extends Component {

    render() {
      const { balanceContainer, balanceText } = styles;
      return(
        <View style={balanceContainer}>
           <View style={{flex:1}}>
             <Text style={balanceText}>
               Add Funds
             </Text>
           </View>
           <View style={{flex:1}}>
          <Text style={balanceText}>
            Balance: ${this.props.balance.toFixed(2)}
          </Text>
          </View>
        </View>
      );
    }
};


const styles = {
  balanceContainer: {
    flex:2,
    alignItems: 'center',
    flexDirection:'row',
    borderBottomColor: '#bbb',
    borderBottomWidth: 2,
    padding: 5
  },
  balanceText: {
    textAlign:'center',
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,16),
    paddingTop: 1
  }
};

mapStateToProps = (state) => {
  
  balance = state.balance.balance;
  return {balance}

}
export default connect (mapStateToProps, null)(BalanceBar);
