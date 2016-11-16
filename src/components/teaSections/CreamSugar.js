import React, { Component } from 'react';
import { View, Text, PickerIOS } from 'react-native';
import firebase from 'firebase';
import { connect, MapStateToProps } from 'react-redux';
import { Header, Button, Card, CardSection, ToggleButton } from '../common';
import * as actions from '../../actions/TeaActionCreators';

var PickerItemIOS = PickerIOS.Item;

class CreamSugar extends Component {

  //***********
  //Helper functions that update the cream and sugar (by calling action creators)

  updateCream(value){
    this.props.selectCream(value);
    this.props.updateTeaDescription();

    if(value === 'No Cream'){
      this.props.selectCreamQty(0);
      this.props.updateTeaDescription();
    }
  }
  updateCreamQty(value){
    this.props.selectCreamQty(value);
    this.props.updateTeaDescription();
  }
  updateSugar(value){
    this.props.selectSugar(value);
    this.props.updateTeaDescription();

    if(value === 'No Sugar'){
      this.props.selectSugarQty(0);
      this.props.updateTeaDescription();
    }
  }
  updateSugarQty(value){
    this.props.selectSugarQty(value);
    this.props.updateTeaDescription();
  }

//***********

  render(){
    return (
      <View style={styles.pickerContainer} >
          <View style={styles.pickerItemFrame} >
            <PickerIOS
              itemStyle={styles.itemStyle}
              onValueChange={this.updateCream.bind(this)}
              selectedValue={this.props.cream} >
              <PickerItemIOS
                value='No Cream'
                label='Black' />
              <PickerItemIOS
                value='Milk'
                label='Milk' />
              <PickerItemIOS
                value='Cream'
                label='Cream' />
              <PickerItemIOS
                value='Skim'
                label='Skim' />
                <PickerItemIOS
                  value='Soy'
                  label='Soy' />
            </PickerIOS>
          </View>

          <View style={styles.pickerQuantityFrame} >
            <PickerIOS
              itemStyle={styles.itemStyle}
              onValueChange={this.updateCreamQty.bind(this)}
              selectedValue={this.props.creamQty} >
              <PickerItemIOS
                value={0}
                label='0' />
              <PickerItemIOS
                value={1}
                label='1' />
              <PickerItemIOS
                value={2}
                label='2' />
              <PickerItemIOS
                value={3}
                label='3' />
              <PickerItemIOS
                value={4}
                label='4' />
              <PickerItemIOS
                value={5}
                label='5' />
              <PickerItemIOS
                value={6}
                label='6' />
            </PickerIOS>
          </View>
          <View style={styles.pickerItemFrame} >
            <PickerIOS
              itemStyle={styles.itemStyle}
              onValueChange={this.updateSugar.bind(this)}
              selectedValue={this.props.sugar} >
              <PickerItemIOS
                value='No Sugar'
                label='No Sugar' />
              <PickerItemIOS
                value='Splenda'
                label='Splenda' />
              <PickerItemIOS
                value='Sugar'
                label='Sugar' />
              <PickerItemIOS
                value='Truvia'
                label='Truvia' />
                <PickerItemIOS
                  value='Raw'
                  label='Raw'/>

            </PickerIOS>
          </View>

          <View style={styles.pickerQuantityFrame} >
            <PickerIOS
              itemStyle={styles.itemStyle}
              onValueChange={this.updateSugarQty.bind(this)}
              selectedValue={this.props.sugarQty} >
              <PickerItemIOS
                value={0}
                label='0' />
              <PickerItemIOS
                value={1}
                label='1' />
              <PickerItemIOS
                value={2}
                label='2' />
              <PickerItemIOS
                value={3}
                label='3' />
              <PickerItemIOS
                value={4}
                label='4' />
              <PickerItemIOS
                value={5}
                label='5' />
              <PickerItemIOS
                value={6}
                label='6' />
            </PickerIOS>
          </View>
      </View>
    );
  }
}

const styles = {

  pickerContainer: {
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    margin: 3,
    backgroundColor: 'black',
  },
  pickerItemFrame: {
    flex: 2
  },
  pickerQuantityFrame: {
    flex: 1
  },
  itemStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    color:  'white'
  }

};

const mapStateToProps = (state) => {

  const { cream, sugar, creamQty, sugarQty } = state.currentTea;

  return { cream, sugar, creamQty, sugarQty };

};

export default connect(mapStateToProps, actions)(CreamSugar);
