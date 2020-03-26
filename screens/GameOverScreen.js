import React from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import TitleText from '../components/TitleText';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText style={styles.title}>The game is over</TitleText>
      <Text>Number of rounds: {props.numberRounds}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button title="NEW GAME" onPress={props.onRestart}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20
  }
});

export default GameOverScreen;
