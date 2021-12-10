import React, { useState } from "react";
import { Block } from "galio-framework";
import { Dimensions, FlatList, Image, StyleSheet, Text, Button } from "react-native";
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";
import { createObjectType } from "../utils/ThemeUtlils";
import CardsType from "../components/CardsType";
import CardsAbility from "../components/CardAbility";
import {_getContacts} from "../services/natifs/contacts";

const PokemonInformations = ({ route }) => {

  const [details, setDetails] = useState(route.params);
  const [detailsTypes, setDetailsTypes] = useState(JSON.parse(details.type));
  const [colorObject, setColorObject] = useState({
    color: createObjectType(detailsTypes[0]).color,
    image: createObjectType(detailsTypes[0]).image,
  });
  const [color, setColor] = useState(colorObject.color);
  const [detailsAbilities, setDetailsAbilities] = useState(JSON.parse(details.abilities));
  const [tabTypeObject, setTabTypeObject] = useState(howManyType(detailsTypes));
  const [tabAbility,setTabAbility] = useState(howManyAbility(detailsAbilities))

  const howManyType = (tabType) => {
    let tabobjectType = [];
    for (let i = 0; i < tabType.length; i++) {
      tabobjectType.push({
        text: tabType[i],
        color: createObjectType(tabType[i]).color,
        image: createObjectType(tabType[i]).image,
      });
    }
    return tabobjectType;
  };

  const howManyAbility = (tabAbility) => {
    let tabobjectAbility = [];
    for (let i = 0; i < tabAbility.length; i++) {
      console.log(tabAbility)
      tabobjectAbility.push({
        number:i,
        effect: tabAbility[i].effect,
        language:tabAbility[i].language
      });
    }
    return tabobjectAbility;
  };

  console.log(tabAbility);

  const colorCreation = (type) => {
    let value = createObjectType(type);
    setColor(value);
  };

  const renderCardsType = ({ item }) => <CardsType
    text={item.text}
    color={item.color}
    imageData={item.image} />;

  const renderCardsAbility = ({ item }) => <CardsAbility
    number={item.number}
    effect={item.effect}
    language={item.language}
  />;

  return (
    <SafeAreaView>
      <Block middle>
        <Image
          style={{
            width: Dimensions.get("window").width * 0.7,
            height: Dimensions.get("window").width * 0.7,
            justifyContent: "center",
            alignItems: "center",
          }}
          source={{
            uri:
              details.sprite ||
              "https://vacarme.hypotheses.org/files/2017/04/IMGintero.png",
          }}
        />
        <Block style={{
          marginTop: -270,
          zIndex: -2,
          backgroundColor: color,
          borderRadius: Math.round(Dimensions.get("window").width + Dimensions.get("window").height) / 2,
          width: Dimensions.get("window").width * 0.7,
          height: Dimensions.get("window").width * 0.7,
          justifyContent: "center",
          alignItems: "center",
        }} />
      </Block>
      <Block card middle
             style={{
               backgroundColor:color,
               marginTop: 5,
               marginLeft: 50,
               marginRight: 50,
             }}
      >
        <Text style={styles.text}>
          {details.name.toUpperCase()}
        </Text>
      </Block>

      <SafeAreaView>
        <Block middle style={{ marginRight: 15, marginLeft: 15, marginTop: 15, }}>
          <FlatList
            style={{ margin: 5 }}
            data={tabTypeObject}
            numColumns={tabTypeObject.length}
            keyExtractor={(item, index) => item.id}
            renderItem={renderCardsType}
          />
        </Block>
        <Block middle
               style={{
                 marginTop: 5,
                 marginLeft: 50,
                 marginRight: 50,
               }}
        >
          <Text style={styles.text}>
            Abilities
          </Text>
        </Block>
        <Block middle style={{ marginRight: 15, marginLeft: 15, marginTop: 5 }}>
          <FlatList
            data={tabAbility}
            keyExtractor={(item, index) => item.id}
            renderItem={renderCardsAbility}
          />
        </Block>
        <Button title={'Partager'} onPress={() => _getContacts(data.name)}/>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // imagePokemon:
  imageType: {
    width: 35,
    height: 35,
  },
  imageView: {
    top: -10,
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 30,
    fontFamily: "Arial",
  },
});

export default PokemonInformations;
