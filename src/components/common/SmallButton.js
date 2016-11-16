import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const SmallButton = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#02c39a',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10

  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#f0f3bd',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#02c39a',
    margin: 2,
    justifyContent: 'center'
  }
};

export { SmallButton };
