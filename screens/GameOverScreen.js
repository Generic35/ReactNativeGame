import React from 'react';
import {
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
  return (
    <ScrollView>
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
            <Text style={styles.highlight}>{props.numberRounds}</Text> many
            number of rounds.
          </BodyText>
        </View>
        <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
      </View>
    </ScrollView>
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
    width: Dimensions.get('screen').width * 0.7,
    height: Dimensions.get('screen').width * 0.7,
    borderRadius: (Dimensions.get('screen').width * 0.7) / 2,
    borderColor: 'black',
    borderWidth: 3,
    overflow: 'hidden',
    marginVertical: Dimensions.get('screen').height / 30
  },
  highlight: {
    color: 'red',
    fontFamily: 'open-sans-bold'
  },
  textContainer: {
    marginHorizontal: 30,
    marginVertical: Dimensions.get('screen').height / 40
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('screen').height < 400 ? 16 : 20
  }
});

export default GameOverScreen;
