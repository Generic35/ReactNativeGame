import React, { useState } from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const handleChange = inputValue => {
    setEnteredValue(inputValue.replace(/[^0-9]/g, ''));
  };
  return (
    <TextInput
      {...props}
      style={{ ...styles.input, ...props.style }}
      blurOnSubmit
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType="number-pad"
      maxLength={2}
      onChangeText={handleChange}
      value={enteredValue}
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
