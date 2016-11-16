//From Libraries
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

//Custom Components
import HotIced from '../teaSections/HotIced';
import CreamSugar from '../teaSections/CreamSugar';
import CheckOutButtons from '../teaSections/CheckOutButtons';
import RegDecaf from '../teaSections/RegDecaf';
import SizeSelector from '../teaSections/SizeSelector';
import SaveFavoriteModal from '../SaveFavoriteModal';

class Tea extends Component {
  render(){
      return (
          <View style={styles.bigContainer}>
            <HotIced />
            <SizeSelector />
            <RegDecaf />
            <CreamSugar />
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
  return{
    item: state.currentTea
  }
}

export default connect(mapStateToProps, null)(Tea);
