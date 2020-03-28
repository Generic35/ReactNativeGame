import React, { useState, useRef, useEffect } from 'react';
import {
  Alert,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import DefaultStyles from '../constants/default-styles';
import MainButton from '../components/MainButton';
import { Ionicons } from '@expo/vector-icons';
import BodyText from '../components/BodyText';

const generateRandomNumber = (min, max, excluded) => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  const result = Math.floor(Math.random() * (maxFloored - minCeiled)) + min;
  if (result === excluded) {
    return generateRandomNumber(min, max, excluded);
  } else {
    return result;
  }
};

const renderListItem = (listLength, itemData) => (
  <View style={styles.listItem}>
    <BodyText>#{listLength - itemData.index}</BodyText>
    <Text>{itemData.item}</Text>
  </View>
);

const GameScreen = props => {
  const initialGuess = generateRandomNumber(1, 99, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess.toString());
  const [passedGuesses, setPassedGuesses] = useState([initialGuess].toString());
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const { userChoice, onGameOver } = props;

  useEffect(() => {
    if (userChoice === currentGuess) {
      onGameOver(passedGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess <= props.userChoice) ||
      (direction === 'higher' && currentGuess >= props.userChoice)
    ) {
      Alert.alert("Don't lie", 'You know this is wrong', [
        { text: 'Sorry', style: 'cancel' }
      ]);
      return;
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }

    const nextNumber = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setPassedGuesses(previousGuesses => {
      return [nextNumber.toString(), ...previousGuesses];
    });
  };

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>Opponent's guest</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, 'higher')}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
      <View
        style={
          Dimensions.get('screen').width > 350
            ? styles.listContainer
            : styles.listContainerBig
        }
      >
        <FlatList
          data={passedGuesses}
          renderItem={renderListItem.bind(this, passedGuesses.length)}
          keyExtractor={item => item}
          contentContainerStyle={styles.list}
        ></FlatList>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {passedGuesses.map((guess, i) =>
            renderListItem(guess, passedGuesses.length - i)
          )}
        </ScrollView> */}
      </View>
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
    marginTop: Dimensions.get('window') > 600 ? 20 : 5,
    width: 400,
    maxWidth: '90%'
  },
  listContainer: {
    flex: 1,
    width: '60%'
  },
  listContainerBig: {
    flex: 1,
    width: '80%'
  },
  list: {
    flexGrow: 1,
    justifyContent: 'flex-end'
  },
  listItem: {
    borderWidth: 1,
    flexDirection: 'row',
    borderColor: 'grey',
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    width: '100%'
  }
});

export default GameScreen;
