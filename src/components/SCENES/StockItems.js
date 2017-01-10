//Libraries
import _ from 'lodash';
import React, { Component } from 'react';
import { ListView,  StyleSheet, View, Text, PixelRatio } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
//Custom
import { Button } from '../common';
import { stockFetch } from '../../actions/MenuActionCreators';
import SideMenu from './SideMenu';
import StockItem from '../menu/StockItem';
//Font Scaling
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');

class Snacks extends Component {

    componentWillMount() { 
      this.props.stockFetch(this.props.stockMenuType); 
      this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) { this.createDataSource(nextProps);}

    createDataSource({ stockItems }) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(stockItems);
    }
    
    renderRow(item) { return <StockItem item={item}/> }

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
    
    const stockItems = _.map(state.menu.stockItems, (val, uid) => {
        return { ...val, uid };
    });
    const showMenu = state.sideMenu.showMenu;
    const stockMenuType= state.menu.stockMenuType;

    return { stockItems, showMenu, stockMenuType };
};

export default connect (mapStateToProps, { stockFetch })(Snacks);