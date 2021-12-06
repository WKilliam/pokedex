import React from 'react';

import {
  Alert,
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Exo3 = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          'Soléne',
          'Judfdlien',
          'Sylvie',
          'Soléne',
          'Julien',
          'Syldfdfvie',
          'Soléne',
          'Julien',
          'Syldfdfvie',
          'Soléne',
          'Julien',
          'Sylvie',
          'Soléne',
          'Julien',
          'Sylvie',
          'Soléne',
          'Julien',
          'Sylvie',
          'Sylvie',
          'Soléne',
          'Julien',
          'Sylvie',
          'Soléne',
          'Julien',
          'Sylvie',
          'Sylvie',
          'Soléne',
          'Julien',
          'Sylvie',
          'Soléne',
          'Julien',
          'Sylvie',
        ]}
        renderItem={({item, index}) => {
          return (
            // <Text ref={index}>{item}</Text>
            <Button
              color="r#841584"
              onPress={() => {
                texteur(item);
              }}
              accessibilityLabel="Learn more about this purple button"
              title={item}
            />
          );
        }}
      />
    </View>
  );
};

let texteur = param => {
  const showAlert = name => {
    Alert.alert('Bonjour ' + name);
  };

  return (
    <TouchableOpacity onPress={showAlert(param)} style={styles.button}>
      <Text>Alert</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4ba37b',
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 100,
  },
});

export default Exo3;
