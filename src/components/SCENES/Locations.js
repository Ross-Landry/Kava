import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, PixelRatio } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');

class Locations extends Component {
    render() {
      return (
        <View style={styles.locationsContainer} >
              <TouchableOpacity onPress={()=>{ Actions.menu() }}>
                <Text style={styles.locationText}>URI Campus</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{ Actions.menu() }}>
                <Text style={styles.locationText}>Eastward Look</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{ Actions.menu() }}>
                <Text style={styles.locationText}>Bonnet Shores</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={()=>{ Actions.menu() }}>
                <Text style={styles.locationText}>Wakefield Mall</Text>
              </TouchableOpacity>
        </View>
      );
    }
};

const styles = {
  locationsContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    flex: 1,
    padding: 10
  },
  locationText: {
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,20)
  }
};


export default Locations;
