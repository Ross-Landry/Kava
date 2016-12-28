//Libraries
import React, { Component } from 'react';
import { View, PixelRatio, Text, TextInput } from 'react-native';
import { connect } from 'react-redux';
//Font Adjustment
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');
//Custom
import { Button } from '../common';
import { updateFavoriteTitle, addToFavorites } from '../../actions/FavoritesActionCreators';


class NameFavorite extends Component {

    //Save the favorite with it's name if it has one, or with the title as it's name otherwise (EG: 'Hot Medium Iced Coffee')
    save(){
      const {favoriteTitle, item} = this.props;
      if(favoriteTitle === ''){
        this.props.addToFavorites({ ...item, favoriteTitle:item.title});
      }
      else{
        this.props.addToFavorites({ ...item, favoriteTitle});
      }
    }
    componentWillUnmount(){
      this.props.updateFavoriteTitle('');
    }
    render(){
      const { mainContainer, buttonContainer, textContainer, customButton, inputStyle, labelStyle, textWrapper } = styles;

      return(
        <View style={mainContainer}>
            <View style={textContainer}>
              <View style={[textWrapper, {justifyContent: 'flex-start'}]}>
                <TextInput
                  placeholder="Example: My Morning Coffee"
                  autoCorrect={false}
                  style={inputStyle}
                  value={this.props.favoriteTitle}
                  onChangeText={(value)=>this.props.updateFavoriteTitle(value)}
                />
                <View>
                  <Text style={labelStyle}>Name your favorite! (optional)</Text>
                </View>
              </View>
              <View style={[textWrapper, {alignItems: 'flex-end'}]}>
              </View>
            </View>
            <View style={buttonContainer}>
              <Button customStyle={customButton} onPress={() => this.save()}>
                Save
              </Button>
            </View>
        </View>
        );
    }
  };


  const styles = {
    mainContainer: {
      flex:2
    },
    buttonContainer: {
      flex:1
    },
    customButton: {
      margin: 5
    },
    inputStyle: {
      color: '#222',
      fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,18),
      lineHeight: getCorrectFontSizeForScreen(PixelRatio, w,h,23),
      flex: 2,
      textAlign: 'center'
    },
    labelStyle: {
      textAlign: 'center',
      fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,18),
      flex: 2,
      padding: 8
    },
    textContainer: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textWrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      flex:1,
      width: w*8,
    }
  };

const mapStateToProps = state => {
  return {
    favoriteTitle: state.favorites.favoriteTitle
  }
}
  export default connect(mapStateToProps, {updateFavoriteTitle, addToFavorites})(NameFavorite);
