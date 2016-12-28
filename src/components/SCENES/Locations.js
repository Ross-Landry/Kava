//Libraries
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
//Custom
import LocationsList from '../location/LocationsList';
import { fetchName } from '../../actions/AuthActionCreators';
import SideMenu from './SideMenu';

class Locations extends Component {
    componentWillMount(){
        this.props.fetchName();
    }
    render() {
      return (
          <LocationsList />
      );
    }
};

const mapStateToProps = state => {

    const showMenu = state.sideMenu.showMenu;

    return { showMenu };
};

export default connect(mapStateToProps, { fetchName })(Locations);


