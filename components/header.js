import React from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import colors from '../constants/colors';
import TitleText from '../components/TitleText';

const Header = props => {
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIos,
          android: styles.headerAndroid
        })
      }}
    >
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerIos: {
    backgroundColor: 'white',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1
  },
  headerAndroid: {
    backgroundColor: colors.primary
  },
  headerTitle: {
    fontSize: 18,
    color: Platform.OS === 'ios' ? colors.primary : 'white'
  }
});
export default Header;
