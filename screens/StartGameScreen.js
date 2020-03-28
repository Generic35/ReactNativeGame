import React, { useState, useEffect } from 'react';
import {
  Alert,
  Button,
  Dimensions,
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  KeyboardAvoidingView
} from 'react-native';
import Card from './../components/Card';
import colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get('screen').width
  );

  const numberInputHandler = inputValue => {
    setEnteredValue(inputValue.replace(/[^0-9]/g, ''));
  };
  const resetHandler = () => {
    setEnteredValue('');
    setIsConfirmed(false);
  };
  const confirmationHandler = () => {
    const chosenNumber = parseInt(enteredValue);

    if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
      Alert.alert('Bad number', 'The number should be between 1 and 99', [
        { text: 'Okay', style: 'destructive', onPress: resetHandler }
      ]);

      return;
    }

    setSelectedNumber(chosenNumber);
    setIsConfirmed(true);
    setEnteredValue('');
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (isConfirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <MainButton
          onPress={() => {
            props.onStartGame(selectedNumber);
          }}
        >
          START GAME
        </MainButton>
      </Card>
    );
  }

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get('screen').width / 4);
    };

    Dimensions.addEventListener('change', updateLayout);

    return () => {
      Dimensions.removeEventListener('change', updateLayout);
    };
  });

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.screen}>
            <Text style={styles.title}>Start a new game</Text>
            <Card style={styles.card}>
              <BodyText style={styles.text}>Select a number</BodyText>
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
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Reset"
                    color={colors.accent}
                    onPress={resetHandler}
                  />
                </View>
                <View style={{ width: buttonWidth }}>
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
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontFamily: 'open-sans-bold',
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
    width: '80%',
    maxWidth: '95%',
    minWidth: 300,
    alignItems: 'center'
  },
  input: {
    width: 50,
    textAlign: 'center'
  },
  summaryContainer: {
    alignItems: 'center',
    marginTop: 20
  },
  text: {
    fontFamily: 'open-sans'
  }
});

export default StartGameScreen;
