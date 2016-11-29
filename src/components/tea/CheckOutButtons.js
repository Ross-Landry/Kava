import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { Button, Spinner } from '../common';
import { addToOrder } from '../../actions/OrderActionCreators';
import { toggleFavoriteModal } from '../../actions/FavoritesActionCreators';

class CheckOutButtons extends Component {

    addToOrder(){
      this.props.addToOrder(this.props.tea);
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
            <Button customStyle={styles.customButton} onPress={ () => this.props.toggleFavoriteModal()}>
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
      tea: state.currentTea,
      loading: state.order.loading
    };
};

export default connect(mapStateToProps, { toggleFavoriteModal, addToOrder })(CheckOutButtons);
