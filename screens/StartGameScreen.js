import React from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import Card from './../components/Card';

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new game</Text>
      <Card style={styles.card}>
        <Text>Select a number</Text>
        <TextInput></TextInput>
        <View style={styles.buttonsContainer}>
          <Button title="Reset"></Button>
          <Button title="Confirm"></Button>
        </View>
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
  }
});
export default StartGameScreen;
