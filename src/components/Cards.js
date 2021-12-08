import React, {useContext, useRef, useState} from 'react';
import {
  Alert,
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Block, theme} from 'galio-framework';
import {argonTheme, Images} from '../config';
import SafeAreaView from 'react-native/Libraries/Components/SafeAreaView/SafeAreaView';
import {Button} from 'galio-framework';
const {width, height} = Dimensions.get('screen');

const Cards = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000,
    }).start();
  };
  return (
    <Block middle>
      <View style={styles.cardContainer}>
        <Block flex left>
          <View style={styles.circle}>
            <Image
              source={{
                uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png',
                width: 80,
                height: 80,
              }}
            />
          </View>
        </Block>
      </View>
    </Block>
  );
};

const styles = StyleSheet.create({
  circle: {
    marginTop:5,
    marginLeft:5,
    width: 80,
    height: 80,
    borderRadius: 100 / 2,
  },
  cardContainer: {
    marginTop: 10,
    width: width * 0.95,
    height: height / 9,
    backgroundColor: argonTheme.COLORS.INPUT,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: 'powderblue',
  },
  fadingText: {
    fontSize: 28,
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: 'space-evenly',
    marginVertical: 16,
  },
});

export default Cards;
