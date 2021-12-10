import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Block } from "galio-framework";

const Readme = () => {
  return (
    <ScrollView>
      <View style={{margin:15}}>
        <Block card middle style={{margin:8}}>
          <Text style={{fontSize:20}}># pokedex</Text>
        </Block>
        <Block card middle style={{margin:8}}>
          <Text style={{fontSize:18}}># Comment lancer le projet ?</Text>
        </Block>
        <Block card middle style={{margin:8}}>
          <Text style={{fontSize:16}}>
            Premièrement nous
            devons lancer la commande "yarn metro" dans notre terminale. Cette
            commande active donc notre serveur react en local. - Ensuite il nous
            faut lancer nos émulateurs (IOS et Android venant de Xcode et Android
            Studio) pour tester l'application. Les commandes que nous utilisons sont
            "yarn ios" et "yarn android".</Text>
        </Block>
        <Block card middle style={{margin:8}}>
          <Text style={{fontSize:18}}>## Quelle API est utilisée ?</Text>
        </Block>
        <Block card middle style={{margin:8}}>
          <Text style={{fontSize:16}}>
            l'API que
            nous avons utilisé est "PokéAPI", cette API représente un Pokédex (une
            encyclopédie contenant tous les Pokémon de la franchise du même nom).
          </Text>
        </Block>
        <Block card middle style={{margin:8}}>
          <Text style={{fontSize:16}}>
            Que contient l'application ?
            1 - La première page est la page où se trouve l'authentifaction par Google qui permet à l'utilisateur d'accèder au reste de l'application.
            2 - La deuxième page est une liste contenant tous les Pokémon de toutes les régions avec :
            - Leurs différentes formes
            - Leurs évolutions Une barre de recherche est également présente pour faciliter la recherche de l'utilisateur. Une fois que le Pokémon recherché est trouvé, l'utilisateur peut appuyer dessus afin d'accèder à la troisième page.
            3 - La troisième page contient les informations du Pokémon sélectionné, on y retrouve : - Son nom - Son apparence - Son type ou son double type - Ses capacités spéciales
          </Text>
        </Block>
        <Block card middle style={{margin:8}}>
          <Text style={{fontSize:20}}>Bonus</Text>
        </Block>
        <Block card middle style={{margin:8}}>
          <Text style={{fontSize:16}}>
            - Voix : Comme dit précedemment lorsque vous cliquez sur un Pokemon vous avez accès à sa page d'informations. Dans cette page ce trouve un texte d'écrivant la capacité spéciale du Pokemon. A cet endroit précis, vous trouverez un bouton "Play" lançant une voix qui va vous dicter la capcité du Pokemon. De plus, un bouton "Stop" est également présent pour arrêter la voix selon l'envie de l'utilisateur.
            - Partage : Il est possible pour l'utilisateur de partager un message avec un de ces contacts.
            - Who's that Pokemon ?! : Il s'agit d'un mini-jeu présent dans notre application, accessible depuis la page listente tout les Pokemon. Le joueur arrive sur une page avec un bouton, lorsqu'il appuie dessus, un Pokemon au hasard apparait. L'utilisateur doit saisir le nom du Pokémon pour gagner la partie.
          </Text>
        </Block>
        <Block card middle style={{margin:8}}>
          <Text style={{fontSize:20}}>Team :</Text>
        </Block>
        <Block card middle style={{margin:8}}>
          <Text style={{fontSize:16}}>
             Brian , Francesco , Matteo , Teddy
          </Text>
        </Block>
      </View>
    </ScrollView>
  );
};

export default Readme;
