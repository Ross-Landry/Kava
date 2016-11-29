//Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, StyleSheet, View, Modal, PixelRatio, TextInput } from 'react-native';
//Font adjustment
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');
//Custom
import ItemDescription from '../saveFavorite/ItemDescription';
import NameFavorite from '../saveFavorite/NameFavorite';
import { resetFavoriteModal, addFavoriteToOrder, removeFavorite } from '../../actions/FavoritesActionCreators';
import { Spinner, Button } from '../common';
import X from '../saveFavorite/closeModalX'

class ReviewFavorite extends Component {
  dismissModal() {
    this.props.resetFavoriteModal();
  }
  addToOrder(item){
    this.props.addFavoriteToOrder(item);
  }
  doneAddingFavorite(){
    this.props.resetFavoriteModal();
  }
  removeFavorite(){
    this.props.removeFavorite(this.props.item.uid);
  }
  //Conditionally render: Item description, A Spinner, or An Alert of Success of Failure
  renderContent() {
    const {modalStage, item} = this.props;

    switch (modalStage) {
      //The save favorites prompt appears
      case 0:
          return (
                    <View style={styles.modalView}>
                      <ItemDescription item={item} />
                      <View style={{flex:1}}>
                        <View style={{flex:3, flexDirection: 'row', justifyContent:'center'}}>

                            <View style={{flex:1, justifyContent:'center'}}>
                              <TouchableOpacity>
                                <Text style={styles.editRemoveText}> Edit </Text>
                              </TouchableOpacity>
                            </View>

                            <View style={{flex:1, justifyContent:'center'}}>
                              <TouchableOpacity onPress={()=> this.removeFavorite()}>
                                <Text style={styles.editRemoveText}> Remove </Text>
                              </TouchableOpacity>
                            </View>

                        </View>
                        <Button onPress={()=>this.addToOrder(item)}>Add To Order</Button>
                      </View>
                    </View>
                 );
      //Loading
     case 1:
         return (
                   <View style={styles.modalView}>
                     <Spinner />
                   </View>
                 );
      //Success Notification
      case 2:
          setTimeout( ()=>{this.doneAddingFavorite()}, 800);
         return (
                   <View style={styles.modalView}>
                     <View style={styles.textContainer}>
                       <Text style={[styles.notificationText]}> Added! </Text>
                     </View>
                   </View>
                 );
        //Favorite Removed Notification
       case 3:
          setTimeout( ()=>{this.doneAddingFavorite()}, 800);
          return (
                    <View style={styles.modalView}>
                      <View style={styles.textContainer}>
                        <Text style={[styles.notificationText]}> Removed! </Text>
                      </View>
                    </View>
                  );
      //Error
      default:
      return (
                <View style={styles.modalView}>
                  <View style={styles.textContainer}>
                    <Text style={styles.notificationText}> There has been an error! Call tech support. </Text>
                  </View>
                  <View style={{flex:1}}>
                    <Button customStyle={{margin: 5}} onPress={()=>this.dismissModal()}>
                      OK
                    </Button>
                  </View>
                </View>
              );
    }
  }
  render() {
    return (
      <Modal
          animationType={"slide"}
          transparent={true}
          visible={this.props.showReviewModal}>
               <View style={styles.modalContainer}>
                    {this.renderContent()}
               </View>
               <TouchableOpacity onPress={()=>this.dismissModal()}>
                    <X />
               </TouchableOpacity>
      </Modal>
    );
  }
}

var styles = StyleSheet.create({
  modalContainer: {
    flexDirection: 'column',
    flex:1,
    position: 'absolute',
    right: w*0.01,
    top:h*0.01,
    height:h*0.99,
    width: w*0.99
  },
  textContainer: {
    flex:6,
    justifyContent:'center',
    alignItems:'center'
  },
  modalView: {
    paddingTop: 50,
    margin: 20,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black'
  },
  notificationText: {
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,26),
    fontWeight: 'bold'
  },
  editRemoveText: {
    textAlign:'center',
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,18)
  }
});

const mapStateToProps = (state) => {

  const { showReviewModal, modalStage } = state.favorites;

  return { showReviewModal, modalStage };
};

export default connect(mapStateToProps, {resetFavoriteModal, addFavoriteToOrder, removeFavorite})(ReviewFavorite);
