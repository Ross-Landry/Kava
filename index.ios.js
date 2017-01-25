import React, { Component } from 'react';
import { AppRegistry,StyleSheet,Text, View } from 'react-native';
import firebase from 'firebase';
import Router from './src/Router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers';
import ReduxThunk from 'redux-thunk';

class kava extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAT-nL8DyPwu5GdvLfUCJSocEJX_mn4H4k",
      authDomain: "kava-42a4c.firebaseapp.com",
      databaseURL: "https://kava-42a4c.firebaseio.com",
      storageBucket: "kava-42a4c.appspot.com",
      messagingSenderId: "1039484822995"
    });
  }

  render() {
    const store =createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}


AppRegistry.registerComponent('kava', () => kava);
