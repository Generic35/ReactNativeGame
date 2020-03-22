import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Card from './../components/Card';
import colors from '../constants/colors';
import Input from '../components/Input';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const numberInputHandler = inputValue => {
    setEnteredValue(inputValue.replace(/[^0-9]/g, ''));
  };
  const resetHandler = () => {
    setEnteredValue('');
    setIsConfirmed(false);
  };
  const confirmationHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (chosenNumber === NaN || chosenNumber < 1 || chosenNumber > 99) return;
    setSelectedNumber(chosenNumber);
    setIsConfirmed(true);
    setEnteredValue('');
  };

  let confirmedOutput;

  if (isConfirmed) {
    confirmedOutput = <Text>Chosen number: {selectedNumber}</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new game</Text>
        <Card style={styles.card}>
          <Text>Select a number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={colors.accent}
                onPress={resetHandler}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                color={colors.primary}
                onPress={confirmationHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  card: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center'
  },
  input: {
    width: 50,
    textAlign: 'center'
  }
});
export default StartGameScreen;
