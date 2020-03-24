import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomNumber = (min, max, excluded) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  const result = Math.floor(Math.random() * (maxFloored - minCeiled)) + min;
  if (result === excluded) {
    generateRandomNumber(min, max, excluded);
  } else {
    return result;
  }
};

const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 99, props.userChoice)
  );
  return (
    <View style={styles.screen}>
      <Text>Opponent's guest</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="Lower" onPress={() => {}} />
        <Button title="Greater" onPress={() => {}} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%'
  }
});

export default GameScreen;
