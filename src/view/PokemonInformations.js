import React, { useState } from "react";
import { Block } from "galio-framework";
import { Dimensions, FlatList, Image, StyleSheet, Text } from "react-native";

const { width, height } = Dimensions.get("screen");

const types = {
  WATER: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/768px-Pok%C3%A9mon_Water_Type_Icon.svg.png",
  FIRE: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/1024px-Pok%C3%A9mon_Fire_Type_Icon.svg.png",
  GRASS: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/1024px-Pok%C3%A9mon_Grass_Type_Icon.svg.png",
  NORMAL: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/1024px-Pok%C3%A9mon_Normal_Type_Icon.svg.png",
  SPECTRE: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/1024px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png",
  ACIER: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/1024px-Pok%C3%A9mon_Steel_Type_Icon.svg.png",
  PSY: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/1024px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png",
  TENEBRE: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/1024px-Pok%C3%A9mon_Dark_Type_Icon.svg.png",
  FEE: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/1024px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png",
  COMBAT: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/1024px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png",
  INSECTE: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/1024px-Pok%C3%A9mon_Bug_Type_Icon.svg.png",
  VOL: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/1024px-Pok%C3%A9mon_Flying_Type_Icon.svg.png",
  ROCHE: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/1024px-Pok%C3%A9mon_Rock_Type_Icon.svg.png",
  SOL: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/1024px-Pok%C3%A9mon_Ground_Type_Icon.svg.png",
  POISON: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/1024px-Pok%C3%A9mon_Poison_Type_Icon.svg.png",
  DRAGON: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/1024px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png",
  ELECTRIK: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/1024px-Pok%C3%A9mon_Electric_Type_Icon.svg.png",
  GLACE: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/1024px-Pok%C3%A9mon_Ice_Type_Icon.svg.png",
};

const PokemonInformations = () => {
  const data = [
    {
      id: 1,
      name: "bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
      sprite:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      type: "[\"grass\",\"poison\"]",
      abilities:
        "[{\"effect\":\"When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage.\",\"language\":\"en\"},{\"effect\":\"This Pokémon's Speed is doubled during strong sunlight.\\n\\nThis bonus does not count as a stat modifier.\",\"language\":\"en\"}]",
    },
  ];
  // const [number, setNumber] = useState(JSON.parse(data[0].type).length);
  const render = ({item}) =><Text>{item}</Text>
    // <Image
    //   style={styles.imageView}
    //   source={{
    //     uri: types[item.toUpperCase()] || "https://vacarme.hypotheses.org/files/2017/04/IMGintero.png",
    //   }}
    // />;
  return (
    <Block flex middle>
      <Block flex middle>
        <Image
          style={styles.imageView}
          source={{
            uri:
              data[0].sprite ||
              "https://vacarme.hypotheses.org/files/2017/04/IMGintero.png",
          }}
        />
        <Text style={styles.text}>
          {data[0].name.toUpperCase()}
        </Text>

      </Block>
      <FlatList style={{marginTop:-100}} data={JSON.parse(data[0].type)} renderItem={render}/>
    </Block>
  );
};

const styles = StyleSheet.create({

  imageView: {
    top: -10,
    width: 200,
    height: 200,
  },
  text: {
    fontSize: 50,
    top: -10,
    fontFamily: "Arial",
  },
});

export default PokemonInformations;
