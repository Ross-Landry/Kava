//Libraries
import _ from 'lodash';
import React, { Component } from 'react';
import { ListView,  StyleSheet, View, Text, PixelRatio } from 'react-native';
import { connect } from 'react-redux';
//Custom
import { Button } from '../common';
import Totals from '../checkout/Totals';
import BalanceBar from '../checkout/BalanceBar';
import { orderFetch } from '../../actions/OrderActionCreators';
import OrderItem from '../checkout/OrderItem';
//Font Scaling
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');

class Checkout extends Component {

    componentWillMount() { this.props.orderFetch(); this.createDataSource(this.props);}

    componentWillReceiveProps(nextProps) { this.createDataSource(nextProps);}

    createDataSource({ items }) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(items);
    }

    renderRow(item) { return <OrderItem item={item} /> }

    render() {
      const { card, cartContainer, balanceContainer } = styles;
      return (
        <View style={cartContainer}>
            <View style={card}>
              <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
               />
            </View>
            <Totals />
            <BalanceBar />
          <Button customStyle={{flex:4}}>SUBMIT ORDER</Button>
        </View>
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
    marginTop: 3,
    justifyContent: 'center',
    flex:20
  }
};

const mapStateToProps = state => {
    const items = _.map(state.order.orderItems, (val, uid) => {
        return { ...val, uid };
    });

    return { items };
};

export default connect (mapStateToProps, { orderFetch })(Checkout);
