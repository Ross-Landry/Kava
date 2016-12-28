//Libraries
import React, { Component } from 'react';
import { View, Text, PixelRatio } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
//Custom
import { Button } from '../common';
//Font Scaling
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');

class OrderTracking extends Component {
      
    renderStatus(){
      
      const { statusText } = styles;

      switch ('Submitted') {
      //Submitted
      case 'Submitted':
        return (
            <View>
              <Text style={statusText}>Your order has been submitted!</Text>
            </View>
        );
      //In Progress
     case 1:
          return (
                    <View>
                    </View>
                  );
      //Ready
      case 2:
          return (
                    <View>
                    </View>
                  );
      //Complete
      case 3:
          return (
                    <View>
                    </View>
                  );

      default:
          return (
                    <View>
                    </View>
                  );
      }
    }

    render() {
      const { container } = styles;
      return (
        <View style={container}>
            {this.renderStatus()}
        </View>
      );
    }
}

const styles = {
  container: {
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'column',
    position: 'relative',
    flex: 1,
  },
  statusText: {
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,16),
  }
};

const mapStateToProps = state => {
    //Placeholder
    const { showModal, modalStage } = state.favorites;
    //Placeholder
    return { showModal, modalStage };
};

export default connect (mapStateToProps, null)(OrderTracking);