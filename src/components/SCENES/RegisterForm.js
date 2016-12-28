import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Button, Card, CardSection, Input, Spinner } from '../common';
import * as actions from '../../actions/AuthActionCreators';
//Font Adjustment
import { PixelRatio } from 'react-native';
import { getCorrectFontSizeForScreen } from '../../helpers/multipleResolution';
import Dimensions from 'Dimensions';
const {height:h, width:w} = Dimensions.get('window');

class RegisterForm extends Component {

  state = {};

  onButtonPress() {
    const { email, password, confirmPassword, firstNameEntry, lastNameEntry } = this.props;
    if (password === confirmPassword){
      this.props.createUser({email, password, firstNameEntry, lastNameEntry});
    }
    else {
      this.props.updateError("Passwords don't match.");
    }
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
            placeholder="first"
            label="First Name"
            value={this.props.firstNameEntry}
            onChangeText={value => this.props.updateLoginEntry({ prop: 'firstNameEntry', value })}
          />
        </CardSection>
        
        <CardSection>  
          <Input
            placeholder="last"
            label="Last Name"
            value={this.props.lastNameEntry}
            onChangeText={value => this.props.updateLoginEntry({ prop: 'lastNameEntry', value })}
          />
        </CardSection>

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
            value={this.props.confirmPassword}
            onChangeText={value => this.props.updateLoginEntry({ prop: 'confirmPassword', value })}
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
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,14),
    alignSelf: 'center',
    color: 'red'
  },
  linkTextStyle: {
    fontSize: getCorrectFontSizeForScreen(PixelRatio, w,h,14),
    alignSelf: 'center',
    color: 'black',
    padding: 10
  }
};

const mapStateToProps = ( { auth } ) => {

  const { email, password, confirmPassword, error, loading, firstNameEntry, lastNameEntry } = auth;

  return { email, password, confirmPassword, error, loading, firstNameEntry, lastNameEntry };

};

export default connect(mapStateToProps, actions)(RegisterForm);
