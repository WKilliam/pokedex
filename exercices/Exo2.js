import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';

const onSubmit = () => {
  console.log('Touched');

  Alert.alert(
    'Inscription',
    'Inscription enregistrée',
    [
      {
        text: 'Fermer',
        style: 'cancel',
      },
    ],
    {
      cancelable: true,
    },
  );
};

const Exo2 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.formulaireView}>
        <Text style={styles.title}>Inscription</Text>
        <Image
          source={{
            uri: 'https://previews.123rf.com/images/salamatik/salamatik1801/salamatik180100019/92979836-ic%C3%B4ne-de-visage-anonyme-de-profil-personne-silhouette-grise-avatar-par-d%C3%A9faut-masculin-photo-placeho.jpg',
          }}
          style={styles.profileImg}
        />
        <TextInput placeholder="Prenom" style={styles.inputs} />
        <TextInput placeholder="Nom" style={styles.inputs} />
        <TextInput
          secureTextEntry={true}
          placeholder="Mot de passe"
          style={styles.inputs}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Retaper mot de passe"
          style={styles.inputs}
        />
        <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
          <Text style={styles.submitButtonText}>Envoyer</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 35,
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
  },
  profileImg: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'lightgrey',
    marginTop: 40,
  },
  inputs: {
    height: 40,
    width: '80%',
    backgroundColor: 'grey',
    borderColor: 'darkgrey',
    padding: 6,
    marginTop: 40,
    borderRadius: 3,
  },
  formulaireView: {
    width: '100%',
    alignItems: 'center',
  },
  submitButton: {
    borderColor: 'grey',
    color: 'black',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    width: '40%',
    padding: 2,
    marginTop: 40,
    marginBottom: 20,
  },
  submitButtonText: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default Exo2;
