import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

//test
const Exo1 = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
      }}>
      <View style={{flex: 1, backgroundColor: 'red'}} />
      <View style={{flex: 1, backgroundColor: 'green', flexDirection: 'row', justifyContent: 'space-evenly',alignItems: 'center'}}>
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
      </View>
      <View style={{flex: 3, backgroundColor: 'blue'}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  square: {
    backgroundColor: 'yellow',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2.5,
    width: 50,
    height: 50,
  },
});

export default Exo1;
