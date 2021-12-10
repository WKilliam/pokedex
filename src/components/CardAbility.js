import React from "react";
import { Block } from "galio-framework";
import { Text, TouchableOpacity } from "react-native";
import { argonTheme } from "../config";
import Icon from "react-native-vector-icons/AntDesign";
import Tts from 'react-native-tts';
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";


const CardsAbility = ({ effect, language }) => {
  Icon.loadFont();
  Tts.setDefaultLanguage('en-IE');
  Tts.addEventListener('tts-start', event => console.log('start', event));
  Tts.addEventListener('tts-finish', event => console.log('finish', event));
  Tts.addEventListener('tts-cancel', event => console.log('cancel', event));

  const _onPressSpeech = message => {
    Tts.stop();
    Tts.speak(message);
  }

  const _offPressSpeech=()=>{
    Tts.stop()
  }
  return (
    <SafeAreaView>
      <Block card style={{ margin: 5 }}>
        <Block middle>
          <Text style={{ fontSize: 30 }}>{language}</Text>
          <Block
            card
            middle
            style={{ width: 25, height: 25 }}>
            <TouchableOpacity
              onPress={() => _onPressSpeech(effect)}
            >
              <Icon
                size={20}
                color={argonTheme.COLORS.ICON}
                name="caretright"
                family="AntDesign"
              />
            </TouchableOpacity>
          </Block>
          <Block
            card
            middle
            style={{ width: 25, height: 25 ,marginTop:5 }}>
            <TouchableOpacity
              onPress={() => _offPressSpeech()}
            >
              <Icon
                size={20}
                color={argonTheme.COLORS.ICON}
                name="pause"
                family="AntDesign"
              />
            </TouchableOpacity>
          </Block>
        </Block>
        <Block style={{
          margin: 10,
        }}>
          <Text style={{ fontSize: 20 }}>{effect}</Text>
        </Block>
      </Block>
    </SafeAreaView>
  );
};

export default CardsAbility;
