import React, { useState } from "react";
import { Block } from "galio-framework";
import { Dimensions, Image, Text } from "react-native";
import SafeAreaView from "react-native/Libraries/Components/SafeAreaView/SafeAreaView";


const CardsType = ({ text,color,imageData }) => {

  return(
    <SafeAreaView>
      <Block>
        <Block middle>
          <Text>{text}</Text>
        </Block>
        <Block
          card
          style={{
            margin:10,
            backgroundColor :color
          }}
        >
          <Image
            style={{
              width:50,
              height:50
            }}
            source={{
              uri:imageData,
            }}
          />
        </Block>
      </Block>
    </SafeAreaView>
  )
}

export default CardsType;
