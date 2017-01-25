import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { Button, Spinner } from '../common';
import { addToOrder } from '../../actions/OrderActionCreators';
import { toggleFavoriteModal } from '../../actions/FavoritesActionCreators';

class CheckOutButtons extends Component {

    addToOrder(){

      const {smallBool, mediumBool, largeBool} = this.props.coffee;
      
      if ((smallBool === false) && (mediumBool == false) && (largeBool == false)){

        alert('You must select the size before adding coffee to the order.');

      }
      else{
          this.props.addToOrder(this.props.coffee);
      }
    }

    addFavorite(){

      const {size, iced} = this.props.coffee;
      
      if ((size === "") || (iced === "")){

        alert('You must select the size and "hot or iced" before adding coffee to favorites.');

      }
      else{
          this.props.toggleFavoriteModal();
      }
    }

    renderButton() {
      if (this.props.loading) {
        return (
          <View style={styles.buttonsContainer} >
              <Spinner />
          </View>
        );
      }

      return (
          <View style={styles.buttonsContainer} >

            <Button customStyle={styles.customButton} onPress={ () => this.addFavorite()}>
              Save to Favorites
            </Button>

            <Button customStyle={styles.customButton} onPress={ () => this.addToOrder()}>
              Add to Order
            </Button>

          </View>
      );
    }
    render() {
      return this.renderButton();
    }
};

const styles = {
  buttonsContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    position: 'relative',
    margin: 2,
    flex: 2
  },
  customButton: {
    margin: 5
  }
};
const mapStateToProps = state => {
    return {
      coffee: state.currentCoffee,
      loading: state.order.loading
    };
};

export default connect(mapStateToProps, {toggleFavoriteModal, addToOrder})(CheckOutButtons);
