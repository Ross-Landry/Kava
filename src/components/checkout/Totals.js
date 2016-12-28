import React, { Component } from 'react';
import { View, StyleSheet, PixelRatio, Text } from 'react-native';
import { connect } from 'react-redux';
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');
import * as actions from '../../actions/OrderActionCreators';

class Totals extends Component {

    render() {
      const { totalsContainer, totalsText, totalsValues, centeredRow } = styles;
      return(
        <View style={totalsContainer}>

            <View style={{flex:1}}>
                <Text style={{textAlign:'center'}}></Text>
            </View>

            <View style={{justifyContent: 'center', flex:1}}>
             <View style={{flexDirection:'column', justifyContent: 'center'}}>
               <View style={{flex: 1}}>
                  <View style={centeredRow}>
                         <Text style={totalsText}>
                           Subtotal:
                         </Text>
                         <Text style={totalsValues}>
                           ${this.props.subTotal}
                         </Text>
                  </View>
                  <View style={centeredRow}>
                         <Text style={totalsText}>
                           Tax:
                         </Text>
                         <Text style={totalsValues}>
                           {(this.props.subTotal*0.07).toFixed(2)}
                         </Text>
                  </View>
                  <View style={centeredRow}>
                         <Text style={[ totalsText, {fontWeight: 'bold'} ]}>
                           Total:
                         </Text>
                         <Text style={[ totalsValues, {fontWeight: 'bold'} ]}>
                           ${(this.props.subTotal*1.07).toFixed(2)}
                         </Text>
                  </View>
               </View>
            </View>
          </View>

      </View>
      );
    }
};


const styles = {
  totalsContainer: {
    flex:5,
    flexDirection:'row',
    borderTopColor: '#bbb',
    borderTopWidth: 2,
    borderBottomColor: '#bbb',
    borderBottomWidth: 2,
  },
  totalsText: {
    textAlign:'left',
    padding: 2,
    flex: 1,
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,16),
  },
  totalsValues: {
    textAlign:'right',
    padding: 2,
    paddingRight: 10,
    flex: 1,
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,16),
  },
  centeredRow: {
    flexDirection:'row',
    justifyContent: 'center'
  }
};

const mapStateToProps = state => {
    return {
      subTotal: state.order.orderPrice,
    };
};

export default connect (mapStateToProps, null)(Totals);
