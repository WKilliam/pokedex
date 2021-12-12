/**
 * comment
 */
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Block} from 'galio-framework';
import {argonTheme} from '../config';
const {width, height} = Dimensions.get('screen');

const Cards = ({data, onPress}) => {
  // Within your render function
  return (
    <TouchableOpacity onPress={onPress} style={{marginTop: 30}}>
      <Block style={{flex: 1, margin: 5, height: 130}}>
        <Block style={{marginLeft: width / 20}}>
          <Block>
            <Image
              style={{marginLeft: 10}}
              source={{
                uri:
                  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data[0]}.png` ||
                  'https://vacarme.hypotheses.org/files/2017/04/IMGintero.png',
                width: 125,
                height: 125,
              }}
            />
            <Image
              style={styles.pokeballPosition}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/512/287/287221.png',
                width: 100,
                height: 100,
              }}
            />
          </Block>
          <Block
            style={{
              width: 125,
              height: 40,
              marginLeft: width / 25,
            }}>
            <Text style={styles.textStyle}>{data[1]}</Text>
          </Block>
        </Block>
      </Block>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 18,
    borderColor: argonTheme.COLORS.SIGNFACEBOOK,
    color: argonTheme.COLORS.ERROR,
    // backgroundColor: argonTheme.COLORS.SIGNFACEBOOK,
    borderRadius: 20,
    borderWidth: 1,
  },
  pokeballPosition: {
    marginTop: -125,
    marginLeft: 7,
    width: 130,
    height: 130,
    borderRadius: 100 / 2,
    zIndex: -2,
    opacity: 0.9,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Cards;
