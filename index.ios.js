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
        apiKey: "AIzaSyBaty4kZaEkWyVXZ3Z9DT3wggv-XyptVAM",
        authDomain: "fire-7415c.firebaseapp.com",
        databaseURL: "https://fire-7415c.firebaseio.com",
        storageBucket: "fire-7415c.appspot.com",
        messagingSenderId: "627667827953"
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
