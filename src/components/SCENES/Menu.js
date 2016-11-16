import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, PixelRatio } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button } from '../common'
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');

class Menu extends Component {
    state = {};
    render() {
      return (
      <View style={{flexDirection: 'column', flex: 1}}>
        <View style={styles.menuContainer} >
          <TouchableOpacity onPress={()=>{ Actions.coffee() }}>
            <Text style={styles.menuItemText}>Coffee</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{ Actions.tea() }}>
            <Text style={styles.menuItemText}>Tea</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.menuItemText}>Snacks</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{ Actions.favorites() }}>
            <Text style={styles.menuItemText}>Favorites</Text>
          </TouchableOpacity>
        </View>
        <Button customStyle={{flex:4}} onPress={() => Actions.checkout() }>Review Current Order</Button>
      </View>
      );
    }
};
``
const styles = {
  menuContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    flex: 27,
    padding: 10
  },
  menuItemText: {
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,20)
  }
};


export default Menu;
