//From Libraries
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

//Custom Components
import HotIced from '../tea/HotIced';
import CreamSugar from '../tea/CreamSugar';
import CheckOutButtons from '../tea/CheckOutButtons';
import RegDecaf from '../tea/RegDecaf';
import SizeSelector from '../tea/SizeSelector';
import SaveFavorite from './SaveFavorite';

class Tea extends Component {
  render(){
      return (
          <View style={styles.bigContainer}>
            <HotIced />
            <SizeSelector />
            <RegDecaf />
            <CreamSugar />
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
  return{
    item: state.currentTea
  }
}

export default connect(mapStateToProps, null)(Tea);
