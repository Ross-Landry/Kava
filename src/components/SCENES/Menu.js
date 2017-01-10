//Libraries
import React, { Component } from 'react';
import { View, PixelRatio, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import _ from 'lodash';
//Font Size Adjustment
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');
//Custom
import { Button } from '../common'
import { menuFetch } from '../../actions/MenuActionCreators';
import { toggleSideMenu } from '../../actions/SideMenuActionCreators';
import MenuItem from '../menu/MenuItem';
import CurrentLocation from '../location/CurrentLocationBanner';
import { card } from '../../styles/styleObjects';
import SideMenu from './SideMenu';

class Menu extends Component {
    
    componentWillMount() {
      this.props.menuFetch(this.props.locationUID); 
      this.createDataSource(this.props);
      //Close the SideMenu if it's visible when the food menu loads
      if (this.props.showMenu){
            this.props.toggleSideMenu();
      }
    }

    componentWillReceiveProps(nextProps) { this.createDataSource(nextProps);}

    createDataSource({ menu }) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(menu);
    }

    renderRow(menuItem) { return <MenuItem item={menuItem} /> }
    
    render() {
      const { favorites } = styles
      return (
          <SideMenu open={this.props.showMenu}>
            <View style={{flexDirection: 'column', flex: 1}}>
                <CurrentLocation />
                <View style={[card, {flex:21}]}>
                    <ListView
                      enableEmptySections
                      dataSource={this.dataSource}
                      renderRow={this.renderRow} />
                </View>
                <View style={{flex:4}}>
                    <MenuItem item={favorite} customStyle={favorites}/>
                </View>
                <Button customStyle={{flex:4}} onPress={() => Actions.checkout() }>
                    Review Current Order
                </Button>
            </View>
          </SideMenu>
      );
    }
};

const favorite = { 
    routerKey:"favorites", 
    uid: "xFavorites"
};
const styles = {
  favorites: {
    fontWeight: '600',
  }
};


const mapStateToProps = state => {
    
    const menu = _.map(state.menu.menu, (val, uid) => {
        return { ...val, uid };
    });
    const showMenu = state.sideMenu.showMenu;

    const locationUID = state.location.currentStore.uid;

    return { menu, showMenu, locationUID };
};


export default connect (mapStateToProps, { menuFetch, toggleSideMenu })(Menu);