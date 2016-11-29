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
import MenuItem from '../menu/MenuItem';
import CurrentLocation from '../location/CurrentLocationBanner';
import { card } from '../../styles/styleObjects';

class Menu extends Component {
    
    componentWillMount() {this.props.menuFetch(); this.createDataSource(this.props);}

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
      );
    }
};

const favorite = {
    component:"Favorites", 
    routerKey:"favorites", 
    uid: "Favorites"
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
    return { menu };
};


export default connect (mapStateToProps, { menuFetch })(Menu);