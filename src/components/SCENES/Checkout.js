//Libraries
import _ from 'lodash';
import React, { Component } from 'react';
import { ListView,  StyleSheet, View, Text, PixelRatio } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
//Custom
import { Button } from '../common';
import Totals from '../checkout/Totals';
import BalanceBar from '../checkout/BalanceBar';
import { orderFetch, updateOrderPrice } from '../../actions/OrderActionCreators';
import { balanceFetch, balanceDebit } from '../../actions/BalanceActionCreators';
import OrderItem from '../checkout/OrderItem';
import SideMenu from './SideMenu';
//Font Scaling
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');

class Checkout extends Component {

    componentWillMount() { 
      this.props.orderFetch(); 
      this.props.balanceFetch();
      this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) { 
      this.createDataSource(nextProps);
      //Add up cart prices to get sub-total
      var itemsArray = nextProps.items;
      var arrayLength = itemsArray.length;
      var subTotal = 0;
      for (var i = 0; i < arrayLength; i++) subTotal += itemsArray[i].price;
      //If the subtotal is different from what's in redux, then update the store
      if (subTotal !== nextProps.orderPrice) this.props.updateOrderPrice(subTotal);
    }

    createDataSource({ items }) {
      const ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      });

      this.dataSource = ds.cloneWithRows(items);
    }

    submitOrder(items){
      
      //Get the users balance, calculate the total price with tax
      this.props.balanceFetch();
      const {orderPrice, balance} = this.props;
      const taxRate = this.props.location.taxRate;
      const priceWithTax = orderPrice + (orderPrice*taxRate);
      
      //Check that the user's balance exceeds the total price and then submit the order
      if((balance - priceWithTax) >= -0.005 ){
              
              //Get DATE/TIME
              const dateTime = firebase.database.ServerValue.TIMESTAMP;

              //Get user ID
              const currentUser = firebase.auth().currentUser;
              const uid = currentUser.uid;
              
              //create customer order
              const newOrder = firebase.database().ref(`/customerOrders/${uid}`)
              .push({ 
                          items, 
                          status: 'Submitted',
                          qty:items.length,
                          location: this.props.location.uid,
                          dateTime
                      });
              //Get the orer UID, this will be added to the 'store order' to create a link between the two
              const customerOrderUID = newOrder.getKey();
              
              //create store order
              firebase.database().ref(`/storeOrders/openOrders/${this.props.location.uid}`)
              .push({
                          customer:this.props.name, 
                          userUID:currentUser.uid, 
                          items, 
                          qty:items.length, 
                          customerOrderUID,
                          dateTime
                      })
              .then(this.props.balanceDebit(priceWithTax))

              //empty cart
              firebase.database().ref(`/users/${uid}/currentOrder`)
              .remove()


                Actions.orderTracking();
      }

      else{
          alert('Your balance is too low for this order.');
      }

    }

    renderRow(item) { return <OrderItem item={item} /> }

    render() {
      const { card, cartContainer, balanceContainer } = styles;
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
              <Totals taxRate={this.props.location.taxRate}/>
              <BalanceBar />
            <Button customStyle={{flex:4}} onPress={()=>{this.submitOrder(this.props.items)}}>SUBMIT ORDER</Button>
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
    marginTop: 3,
    justifyContent: 'center',
    flex:20
  }
};

const mapStateToProps = state => {
    const items = _.map(state.order.orderItems, (val, uid) => {
        return { ...val, uid };
    });
    const orderPrice = state.order.orderPrice;
    const location = state.location.currentStore;
    const { firstName, lastName } = state.auth;
    const name = `${firstName} ${lastName}`;
    const showMenu = state.sideMenu.showMenu;
    const balance = state.balance.balance;
    return { balance, items, location, name, showMenu, orderPrice};
};

export default connect (mapStateToProps, { orderFetch, balanceFetch, balanceDebit, updateOrderPrice})(Checkout);