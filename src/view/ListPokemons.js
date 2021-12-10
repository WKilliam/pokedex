import React from "react";
import { FlatList } from "react-native";
import Cards from "../components/Cards";
import {Block, Button} from "galio-framework";

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
  {
    id: 2,
    name: "ivysaur",
    url: "https://pokeapi.co/api/v2/pokemon/2/",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    type: "[\"grass\",\"poison\"]",
    abilities:
      "[{\"effect\":\"When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage.\",\"language\":\"en\"},{\"effect\":\"This Pokémon's Speed is doubled during strong sunlight.\\n\\nThis bonus does not count as a stat modifier.\",\"language\":\"en\"}]",
  },
  {
    id: 3,
    name: "venusaur",
    url: "https://pokeapi.co/api/v2/pokemon/3/",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    type: "[\"grass\",\"poison\"]",
    abilities:
      "[{\"effect\":\"When this Pokémon has 1/3 or less of its HP remaining, its grass-type moves inflict 1.5× as much regular damage.\",\"language\":\"en\"},{\"effect\":\"This Pokémon's Speed is doubled during strong sunlight.\\n\\nThis bonus does not count as a stat modifier.\",\"language\":\"en\"}]",
  },
  {
    id: 4,
    name: "charmander",
    url: "https://pokeapi.co/api/v2/pokemon/4/",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    type: "[\"fire\"]",
    abilities:
      "[{\"effect\":\"When this Pokémon has 1/3 or less of its HP remaining, its fire-type moves inflict 1.5× as much regular damage.\",\"language\":\"en\"},{\"effect\":\"During strong sunlight, this Pokémon has 1.5× its Special Attack but takes 1/8 of its maximum HP in damage after each turn.\",\"language\":\"en\"}]",
  },
  {
    id: 5,
    name: "charmeleon",
    url: "https://pokeapi.co/api/v2/pokemon/5/",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    type: "[\"fire\"]",
    abilities:
      "[{\"effect\":\"When this Pokémon has 1/3 or less of its HP remaining, its fire-type moves inflict 1.5× as much regular damage.\",\"language\":\"en\"},{\"effect\":\"During strong sunlight, this Pokémon has 1.5× its Special Attack but takes 1/8 of its maximum HP in damage after each turn.\",\"language\":\"en\"}]",
  }
];

const ListPokemons = ({navigation}) => {

  const renderItem = ({ item }) => <Cards onPress={() => navigation.navigate('Info', item)} data={item} />;
  return (
    <Block>
      <FlatList
        style={{ margin: 5 }}
        data={data}
        numColumns={2}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
      />
    </Block>
  );


};

export default ListPokemons;
