import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setDataLoaded(true);
        }}
        onError={err => {
          console.error(err);
        }}
      />
    );
  }

  const handleConfigureNewGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const handleStartGame = enteredNumber => {
    setUserNumber(enteredNumber);
  };

  const gameOverHandler = numGuessRounds => {
    setGuessRounds(numGuessRounds);
  };

  let content = <StartGameScreen onStartGame={handleStartGame} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (userNumber && guessRounds > 0) {
    content = (
      <GameOverScreen
        userNumber={userNumber}
        numberRounds={guessRounds}
        onRestart={handleConfigureNewGame}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title={'Guess a number'} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
