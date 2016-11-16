//From Libraries
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

//Custom Components
import HotIced from '../coffeeSections/HotIced';
import CreamSugar from '../coffeeSections/CreamSugar';
import EspressoFlavor from '../coffeeSections/EspressoFlavor';
import CheckOutButtons from '../coffeeSections/CheckOutButtons';
import RegDecaf from '../coffeeSections/RegDecaf';
import SizeSelector from '../coffeeSections/SizeSelector';
import SaveFavoriteModal from '../SaveFavoriteModal';

class Coffee extends Component {

    render(){
      return (
          <View style={styles.bigContainer}>
            <HotIced />
            <SizeSelector />
            <RegDecaf />
            <CreamSugar />
            <EspressoFlavor />
            <CheckOutButtons />
            <SaveFavoriteModal item={this.props.item}/>
          </View>
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
      item: state.currentCoffee
  }
}

export default connect (mapStateToProps, null)(Coffee);
