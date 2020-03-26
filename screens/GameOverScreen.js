import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText style={styles.title}>The game is over</TitleText>
      <View style={styles.imageContainer}>
        <Image
          // source={require('../assets/original.png')}
          source={{
            uri:
              'https://www.yourdictionary.com/images/definitions/lg/12337.summit.jpg'
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <BodyText>Number of rounds: {props.numberRounds}</BodyText>
      <BodyText>Number was: {props.userNumber}</BodyText>
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
  }
});

export default GameOverScreen;
