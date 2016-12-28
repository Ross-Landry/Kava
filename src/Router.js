import React, { Component } from 'react';
import { Scene, Router, Actions, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux';
import LoginForm from './components/SCENES/LoginForm';
import RegisterForm from './components/SCENES/RegisterForm';
import Coffee from './components/SCENES/Coffee';
import Tea from './components/SCENES/Tea';
import Locations from './components/SCENES/Locations';
import Menu from './components/SCENES/Menu';
import Checkout from './components/SCENES/Checkout';
import Favorites from './components/SCENES/Favorites';
import { toggleSideMenu } from './actions/SideMenuActionCreators';
import {logoutUser, navigateInAuth} from './actions/AuthActionCreators';

import OrderTracking from './components/SCENES/OrderTracking';
//Font Adjustment
import { PixelRatio } from 'react-native';
import { getCorrectFontSizeForScreen } from './helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');

class RouterComponent extends Component {

  onRightNavPress() {
    this.props.toggleSideMenu();
  }
  onBackToLogin() {
    Actions.pop();
    this.props.navigateInAuth();
  }
  logout(){
    this.props.logoutUser();
  }
  render() {

    return(
        <Router
            sceneStyle={styles.sceneStyle}
            navigationBarStyle={styles.navBar}
            titleStyle={styles.navTitle} >

                <Scene key="auth" barButtonIconStyle={{ tintColor:'black' }} type={ActionConst.RESET}  >
                  <Scene key="login" 
                                        component={LoginForm} 
                                        title="KAVA" 
                                        type={ActionConst.RESET} />
                  <Scene key="register" 
                                        component={RegisterForm} 
                                        title="KAVA" 
                                        onBack={() => this.onBackToLogin() } 
                                        backTitle="LOGIN"
                                        backButtonTextStyle={styles.backButtonStyle} />
                </Scene>

                <Scene key="main" barButtonIconStyle={{ tintColor:'black' }} rightButtonTextStyle={{color: 'black', fontSize: 14}}>
                    <Scene key="locations" 
                                        component={Locations} 
                                        title="LOCATIONS" 
                                        rightTitle={"Logout"}
                                        rightButtonIconStyle={styles.menuIcon}
                                        onRight={() => this.logout() }
                                        type={ActionConst.RESET}  />
                    <Scene key="menu" 
                                        component={Menu} 
                                        title="MENU" 
                                        rightButtonImage={require('./images/MenuIcon.png')}
                                        rightButtonIconStyle={styles.menuIcon}
                                        onBack={()=> Actions.locations() }
                                        onRight={()=> this.onRightNavPress() } 
                                        backTitle="LOCATION" 
                                        backButtonTextStyle={styles.backButtonStyle}/>
                    <Scene key="coffee" 
                                        component={Coffee} 
                                        title="COFFEE" 
                                        rightButtonImage={require('./images/MenuIcon.png')}
                                        rightButtonIconStyle={styles.menuIcon}
                                        onRight={()=> this.onRightNavPress() } 
                                        onBack={()=> Actions.menu() }
                                        backTitle="MENU" 
                                        backButtonTextStyle={styles.backButtonStyle}/>
                    <Scene key="tea" 
                                        component={Tea} 
                                        title="TEA" 
                                        rightButtonImage={require('./images/MenuIcon.png')}
                                        rightButtonIconStyle={styles.menuIcon}
                                        onRight={()=> this.onRightNavPress() }
                                        onBack={()=> Actions.menu() }
                                        backTitle="MENU" 
                                        backButtonTextStyle={styles.backButtonStyle} />
                    <Scene key="favorites" 
                                        component={Favorites} 
                                        title="FAVORITES" 
                                        rightButtonImage={require('./images/MenuIcon.png')}
                                        rightButtonIconStyle={styles.menuIcon}
                                        onRight={()=> this.onRightNavPress() } 
                                        onBack={()=> Actions.menu() }
                                        backTitle="MENU" 
                                        backButtonTextStyle={styles.backButtonStyle} />
                    <Scene key="checkout" 
                                        component={Checkout} title="KAVA" 
                                        rightButtonImage={require('./images/MenuIcon.png')}
                                        rightButtonIconStyle={styles.menuIcon} 
                                        onBack={()=> Actions.menu() } 
                                        backTitle="MENU"
                                        backButtonTextStyle={styles.backButtonStyle}
                                        onRight={ () => this.onRightNavPress() } />
                    <Scene key="orderTracking" 
                                        component={OrderTracking} title="KAVA" 
                                        rightButtonImage={require('./images/MenuIcon.png')}
                                        rightButtonIconStyle={styles.menuIcon} 
                                        onBack={()=> Actions.menu() } 
                                        backTitle="NEW ORDER"
                                        backButtonTextStyle={styles.backButtonStyle}
                                        onRight={ () => this.onRightNavPress() } />
                </Scene>
        </Router>
      );
    }
  };

const styles = {
  navBar: {
    backgroundColor: '#02c39a'
  },
  sceneStyle: {
    paddingTop: 64
  },
  navTitle: {
  color: 'black',
  fontWeight: 'bold'
  },
  backButtonStyle: {
    color: 'black',
    fontWeight:'bold',
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,10),
    alignSelf:'center'
  },
  menuIcon: {
    height: w*0.075,
    width: w*0.075
  }
}


export default connect(null, {logoutUser, toggleSideMenu, navigateInAuth})(RouterComponent);
