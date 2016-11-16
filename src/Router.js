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
import * as actions from './actions/AuthActionCreators';

class RouterComponent extends Component {

  onRightNavPress() {
      this.props.logoutUser();
  }
  onBackToLogin() {
    Actions.login();
    this.props.navigateInAuth();
  }
  render() {

    return(
        <Router
            sceneStyle={styles.sceneStyle}
            navigationBarStyle={styles.navBar}
            titleStyle={styles.navTitle} >

                <Scene key="auth" barButtonIconStyle={{ tintColor:'black' }} >
                  <Scene key="login" component={LoginForm} title="KAVA" type={ActionConst.RESET} />
                  <Scene key="register" component={RegisterForm} title="KAVA" onBack={() => this.onBackToLogin() } />
                </Scene>

                <Scene key="main" barButtonIconStyle={{ tintColor:'black' }} rightButtonTextStyle={{color: 'black', fontSize: 14}}>
                  <Scene key="locations" component={Locations} title="LOCATIONS" rightTitle='Log Out' onRight={()=> this.onRightNavPress() } />
                  <Scene key="menu" component={Menu} title="MENU" rightTitle='Log Out' onRight={()=> this.onRightNavPress() } />
                  <Scene key="coffee" component={Coffee} title="COFFEE" rightTitle='Log Out' onRight={()=> this.onRightNavPress() } />
                  <Scene key="tea" component={Tea} title="TEA" rightTitle='Log Out' onRight={()=> this.onRightNavPress() } />
                  <Scene key="favorites" component={Favorites} title="FAVORITES" rightTitle='Log Out' onRight={()=> this.onRightNavPress() } />
                  <Scene key="checkout" component={Checkout} title="KAVA" rightTitle='Log Out' onRight={ () => this.onRightNavPress() } />
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
}


export default connect(null, actions)(RouterComponent);
