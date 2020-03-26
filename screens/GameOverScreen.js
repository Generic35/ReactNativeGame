import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText style={styles.title}>The game is over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/original.png')}
          // source={{
          //   uri:
          //     'https://www.yourdictionary.com/images/definitions/lg/12337.summit.jpg'
          // }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.textContainer}>
        <BodyText style={styles.resultText}>
          Your phone has guessed the number{' '}
          <Text style={styles.highlight}>{props.userNumber}</Text> in{' '}
          <Text style={styles.highlight}>{props.numberRounds}</Text> many number
          of rounds.
        </BodyText>
      </View>
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
  },
  image: {
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    marginVertical: 20,
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: 'black',
    borderWidth: 3,
    overflow: 'hidden'
  },
  highlight: {
    color: 'red',
    fontFamily: 'open-sans-bold'
  },
  textContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20
  }
});

export default GameOverScreen;
