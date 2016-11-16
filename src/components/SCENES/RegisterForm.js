import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input, Spinner } from '../common';
import * as actions from '../../actions/AuthActionCreators';

class RegisterForm extends Component {

  onButtonPress() {
    const { email, password } = this.props;
    this.props.createUser({email, password});
  }

  renderButton() {

    if (this.props.loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Register
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
        <CardSection>
          <Input
            secureTextEntry
            placeholder="password"
            label="Confirm"
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>
            {this.props.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>

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

  const { email, password, error, loading } = auth;

  return { email, password, error, loading };

};

export default connect(mapStateToProps, actions)(RegisterForm);
