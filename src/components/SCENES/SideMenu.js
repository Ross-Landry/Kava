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
import Menu from '../menu/Menu';

      
class SideMenu extends Component {

    render() {
        return (
          <Drawer
              ref={(ref) => this._drawer = ref}
              type="overlay"
              content={<Menu />}
              tapToClose={true}
              openDrawerOffset={0.20}
              panCloseMask={0.2}
              side="right"
              open={this.props.open}
              styles={{
                      drawer: {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
              }}
              tweenHandler={(ratio) => ({
                      main: { opacity:(1.8-ratio)/2 }
              })}>
                      {this.props.children}
           </Drawer>
      );
    }
};



export default connect (null, {toggleSideMenu})(SideMenu);