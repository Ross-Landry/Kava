//Libraries
import React, { Component } from 'react';
import { View, Text, PixelRatio, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';
import { connect } from 'react-redux';
//Font Adjustment
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');
//Custom
import { toggleSideMenu } from '../../actions/SideMenuActionCreators';
import { logoutUser } from '../../actions/AuthActionCreators';

class Menu extends Component {
    navigate(action){
        action();
        this.props.toggleSideMenu();
    }
    render() {
        return (
            <View style={{paddingTop:25}}>
                <TouchableOpacity onPress={()=>this.navigate(Actions.menu)} >
                  <View style={styles.navItem}>
                    <Text style={styles.linkText}>Main Menu</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.navigate(Actions.checkout)} >
                  <View style={styles.navItem}>
                    <Text style={styles.linkText}>View Cart</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>this.navigate(Actions.locations)} >
                  <View style={styles.navItem}>
                    <Text style={styles.linkText}>Change Location</Text>
                  </View>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>console.log('Track Orders')} >
                  <View style={styles.navItem}>
                    <Text style={styles.linkText}>Past Orders</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>this.props.logoutUser()} >
                  <View style={styles.navItem}>
                    <Text style={styles.linkText}>Logout</Text>
                  </View>
                </TouchableOpacity>
            </View>
      );
    }
};

const styles = {
  navItem: {
      justifyContent:'center', 
      alignItems:'center',
      padding: 5,
      paddingTop: 20,
      paddingBottom:20
  },
  linkText: {
      fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,14),
      fontWeight: 'bold'
  }

};

export default connect(null, {toggleSideMenu, logoutUser})(Menu);