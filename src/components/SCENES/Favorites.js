//Libraries
import _ from 'lodash';
import React, { Component } from 'react';
import { ListView,  StyleSheet, View, Text, PixelRatio } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
//Custom
import { Button } from '../common';
import { favoritesFetch } from '../../actions/FavoritesActionCreators';
import FavoriteItem from '../checkout/FavoriteItem';
import ReviewFavorite from './ReviewFavorite';
import SideMenu from './SideMenu';
//Font Scaling
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');

class Favorites extends Component {

    componentWillMount() { this.props.favoritesFetch(); this.createDataSource(this.props); }

    componentWillReceiveProps(nextProps) { this.createDataSource(nextProps);}

    createDataSource({ items }) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(items);
    }

    renderRow(item) { return <FavoriteItem item={item} /> }

    render() {
      const { card, cartContainer } = styles;
      return (
      <SideMenu open={this.props.showMenu}>
        <View style={cartContainer}>
            <View style={card}>
              <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
               />
            </View>
          <Button onPress={()=>Actions.checkout()}customStyle={{flex:4}}>Review Current Order</Button>
          <ReviewFavorite item={this.props.currentItem}/>
        </View>
      </SideMenu>
      );
    }
}

const styles = {
  cartContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative',
    flex: 1,
  },
  card: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginTop: 1,
    justifyContent: 'center',
    flex:27
  }
};

const mapStateToProps = state => {
    
    const items = _.map(state.favorites.favoriteItems, (val, uid) => {
        return { ...val, uid };
    });
    const currentItem = state.favorites.selectedFavorite;
    const showMenu = state.sideMenu.showMenu;
    
    return { items, currentItem, showMenu };
};

export default connect (mapStateToProps, { favoritesFetch })(Favorites);
