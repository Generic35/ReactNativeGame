import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
  return <TextInput style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    height: 30,
    marginVertical: 10
  }
});

export default Input;
