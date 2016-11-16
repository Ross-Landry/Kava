import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  PixelRatio
} from 'react-native';
import { connect } from 'react-redux';
import {SmallButton} from '../common';
import ToggleButton from '../common/ToggleButton';
import ModalPicker from 'react-native-modal-picker';
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');
import * as actions from '../../actions/CoffeeActionCreators';
import { mainColor } from '../../styles/colors';

class EspressoFlavor extends Component {

  selectFlavor(selection){
      this.props.selectFlavor(selection.label);
      this.props.updateCoffeeDescription();
  }
  selectEspresso(selection){
      this.props.selectEspresso({ espresso: selection.label, price:selection.value});
      this.props.updateCoffeePrice();
      this.props.updateCoffeeDescription();
  }

  render() {
    let indexFlavor = 0;
    const flavorData = [
      //{ key: indexFlavor++, section: true, label: 'Flavors' },
        { key: indexFlavor++, label: 'Vanilla' },
        { key: indexFlavor++, label: 'Hazelnut' },
        { key: indexFlavor++, label: 'Blueberry' },
        { key: indexFlavor++, label: 'Irish Cream' },
        { key: indexFlavor++, label: 'Unflavored' }
    ];
    let indexEspresso = 0;
    const espressoData = [
        //{ key: indexEspresso++, section: true, label: 'Espresso' },
        { key: indexEspresso++, label: 'No Espresso', value: 0 },
        { key: indexEspresso++, label: 'Single Shot', value: 0.5 },
        { key: indexEspresso++, label: 'Double Shot', value: 1 },
        { key: indexEspresso++, label: 'Triple Shot', value: 1.5 },
        { key: indexEspresso++, label: 'QUAD SHOT', value: 2 }
    ];
    return (
      <View style={styles.smallContainer}>
        <View style={{flex:1}}>
             <ModalPicker
                 data={flavorData}
                 cancelTextStyle={{fontSize:24}}
                 sectionTextStyle={styles.modalHeaderText}
                 optionTextStyle={styles.modalOptionsText}
                 onChange={(selection)=>{ this.selectFlavor(selection)}}>

                 <TextInput
                     style={styles.modalButtonText}
                     editable={false}
                     placeholder="Add Flavor"
                     placeholderTextColor= {mainColor}
                     value={this.props.flavor} />
             </ModalPicker>
        </View>

        <View style={{flex:1, justifyContent: 'center'}}>
             <ModalPicker
                 data={espressoData}
                 optionStyle={{opacity:1}}
                 cancelTextStyle={{fontSize:24}}
                 sectionTextStyle={styles.modalHeaderText}
                 optionTextStyle={styles.modalOptionsText}
                 onChange={(option)=>{ this.selectEspresso(option) }}>

                 <TextInput
                     style={styles.modalButtonText}
                     editable={false}
                     placeholder="Add Espresso"
                     placeholderTextColor= {mainColor}
                     value={this.props.espresso} />
             </ModalPicker>
        </View>

      </View>
    );
  }
}

const styles = {
  smallContainer: {
    padding: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    position: 'relative',
    flex:1
  },
  modalButtonText: {
    borderWidth:1,
    borderColor:'#444',
    padding:10,
    height:h*0.075,
    textAlign:'center',
    margin: 3,
    fontSize: 20,
    backgroundColor: '#222',
    borderRadius: 5,
    color: '#02c39a'
  },
  modalOptionsText: {
    fontSize: 20,
    color:'black'
  },
  modalHeaderText: {
    fontSize: 24,
    color:'#02c39a'
  },
};

const mapStateToProps = (state) => {

  const { flavor, espresso } = state.currentCoffee;

  return { flavor, espresso};

};
export default connect(mapStateToProps, actions)(EspressoFlavor);
