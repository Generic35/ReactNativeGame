import React from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import colors from '../constants/colors';
import TitleText from '../components/TitleText';

const Header = props => {
  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === 'android' ? colors.primary : 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: Platform.OS === 'ios' ? '#ccc' : 'transparent',
    borderBottomWidth: Platform.OS === 'ios' ? 1 : 0
  },
  headerTitle: {
    fontSize: 18,
    color: Platform.OS === 'ios' ? colors.primary : 'white'
  }
});
export default Header;
