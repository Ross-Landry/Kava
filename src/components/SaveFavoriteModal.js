//Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableHighlight, TouchableOpacity, View, Modal, StyleSheet, PixelRatio, TextInput } from 'react-native';
//Font adjustment
import { getCorrectFontSizeForScreen } from '../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');
//Custom
import ItemDescription from './saveModalSections/ItemDescription';
import NameFavorite from './saveModalSections/NameFavorite';
import { resetFavoriteModal } from '../actions/FavoritesActionCreators';
import { Spinner, Button } from './common';
import X from './saveModalSections/closeModalX';

class SaveFavoriteModal extends Component {
  dismissModal() {
    this.props.resetFavoriteModal();
  }
  //Conditionally render: Save Options, A Spinner, or An Alert of Success of Failure
  renderContent() {
    const {modalStage, item} = this.props;

    switch (modalStage) {
      //The save favorites prompt appears
      case 0:
          return (
                    <View style={styles.modalView}>
                      <ItemDescription item={item} />
                      <NameFavorite item={item} />
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
         return (
                   <View style={styles.modalView}>
                     <View style={styles.textContainer}>
                       <Text style={styles.notificationText}> Your favorite has been saved! </Text>
                     </View>
                     <View style={{flex:1}}>
                       <Button customStyle={{margin: 5}} onPress={()=>this.dismissModal()}>
                         OK
                       </Button>
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
          visible={this.props.showModal}>
             <TouchableOpacity onPress={()=>this.dismissModal()}>
                <View style={styles.x}>
                  <X />
                </View>
             </TouchableOpacity>
             <View style={{flexDirection: 'column', flex:1}}>
                  {this.renderContent()}
             </View>
      </Modal>
    );
  }
}

var styles = StyleSheet.create({
  x: {
    backgroundColor:'white',
    height: h*0.05,
    width: h*0.05,
    alignSelf: 'flex-end',
    marginRight: 15,
    borderColor: 'black',
    borderRadius: 2,
    borderWidth: 1,
    marginTop: 30
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
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,16),
    fontWeight: 'bold'
  }
});

const mapStateToProps = (state) => {

  const { showModal, modalStage } = state.favorites;

  return { showModal, modalStage };
};

export default connect(mapStateToProps, {resetFavoriteModal})(SaveFavoriteModal);
