import React from 'react';
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
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new game</Text>
        <Card style={styles.card}>
          <Text>Select a number</Text>
          <Input style={styles.input} />
          <View style={styles.buttonsContainer}>
            <View style={styles.button}>
              <Button title="Reset" color={colors.accent} />
            </View>
            <View style={styles.button}>
              <Button title="Confirm" color={colors.primary} />
            </View>
          </View>
        </Card>
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
