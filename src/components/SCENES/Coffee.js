//From Libraries
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

//Custom Components
import HotIced from '../coffee/HotIced';
import CreamSugar from '../coffee/CreamSugar';
import EspressoFlavor from '../coffee/EspressoFlavor';
import CheckOutButtons from '../coffee/CheckOutButtons';
import RegDecaf from '../coffee/RegDecaf';
import SizeSelector from '../coffee/SizeSelector';
import SaveFavorite from './SaveFavorite';
import SideMenu from './SideMenu';

class Coffee extends Component {

    render(){
      return (
        <SideMenu open={this.props.showMenu}>
          <View style={styles.bigContainer}>
            <HotIced />
            <SizeSelector />
            <RegDecaf />
            <CreamSugar />
            <EspressoFlavor />
            <CheckOutButtons />
            <SaveFavorite item={this.props.item}/>
          </View>
        </SideMenu>
      );
    }
}

const styles = {
  bigContainer:{
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: '#000',
    flex: 1
  }
};

const mapStateToProps = state => {
  return {
      item: state.currentCoffee,
      showMenu: state.sideMenu.showMenu

  }
}

export default connect (mapStateToProps, null)(Coffee);
