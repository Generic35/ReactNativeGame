import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
  return (
    <TextInput
      {...props}
      style={{ ...styles.input, ...props.style }}
      blurOnSubmit
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType="number-pad"
      maxLength={2}
    />
  );
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
