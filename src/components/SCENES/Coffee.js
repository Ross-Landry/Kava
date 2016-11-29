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
            <SaveFavorite item={this.props.item}/>
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
