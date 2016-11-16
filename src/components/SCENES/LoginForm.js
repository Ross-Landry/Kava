import React, { Component } from 'react';
import { Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input, Spinner } from '../common';
import * as actions from '../../actions/AuthActionCreators';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';


class LoginForm extends Component {

  //Check to see if the user is already logged in
  componentWillMount(){
      if (this.props.user !== null) {Actions.main();}
      else {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) { Actions.main();}
        });
      }
  }
  componentWillUpdate(){
      if (this.props.user !== null) {Actions.main();}
      else {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) { Actions.main();}
        });
      }
  }
  onButtonPress() {
    const { email, password } = this.props;
    this.props.loginUser({email, password});
  }
  navigate() {
    Actions.register();
    this.props.navigateInAuth();
  }
  renderButton() {

    if (this.props.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Log In
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="abc@email.com"
            label="Email"
            value={this.props.email}
            onChangeText={value => this.props.updateLoginEntry({ prop: 'email', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.props.password}
            onChangeText={value => this.props.updateLoginEntry({ prop: 'password', value })}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
            {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

        <TouchableHighlight onPress={() => this.navigate() }>
          <Text style={styles.linkTextStyle}>
              Need an account? Click here
          </Text>
        </TouchableHighlight>

      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'red'
  },
  linkTextStyle: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'black',
    padding: 10
  }
};

const mapStateToProps = ( { auth } ) => {

  const { email, password, error, loading, user } = auth;

  return { email, password, error, loading, user };

};

export default connect(mapStateToProps, actions)(LoginForm);
