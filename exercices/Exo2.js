import React, {useState, useEffect, useMemo, useCallback} from 'react';

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

const Exo2 = () => {
  const [firstName, setfirstName] = useState(null);
  const [lastName, setlastName] = useState(null);
  const [password, setpassword] = useState(false);
  const [confirmPassword, setconfirmPassword] = useState(null);
  const [verifPassword, setverifPassword] = useState(true);

  useEffect(() => {
    setverifPassword(password.length > 3);
  }, [password]);

  const verifConfirmPassword = useMemo(() => {
    return password === confirmPassword;
  }, [password, confirmPassword]);

  const alerteButton = useCallback(() => {
    return Alert.alert(
      'Bonjour  ' +
        firstName +
        '  ' +
        lastName +
        ' votre Mot De Passe est : ' +
        password,
    );
  }, [firstName, lastName, password]);

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
        <TextInput
          placeholder="Prénom"
          style={styles.inputs}
          value={firstName}
          onChangeText={e => setfirstName(e)}
        />
        <TextInput
          placeholder="Nom"
          style={styles.inputs}
          value={lastName}
          onChangeText={e => setlastName(e)}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Mot de passe"
          style={verifPassword ? styles.inputs : styles.inputserror}
          value={password}
          onChangeText={e => setpassword(e)}
        />
        <TextInput
          secureTextEntry={true}
          placeholder="Retaper mot de passe"
          style={verifConfirmPassword ? styles.inputs : styles.inputserror}
          value={confirmPassword}
          onChangeText={e => setconfirmPassword(e)}
        />
        <TouchableOpacity style={styles.alerteButton} onPress={alerteButton}>
          <Text style={styles.alerteButtonText}>Envoyer</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

let styles = StyleSheet.create({
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
    padding: 6,
    marginTop: 40,
    borderWidth: 2.5,
    borderRadius: 3,
  },
  inputserror: {
    height: 40,
    width: '80%',
    backgroundColor: 'grey',
    borderColor: 'red',
    padding: 6,
    marginTop: 40,
    borderWidth: 2.5,
    borderRadius: 3,
  },
  formulaireView: {
    width: '100%',
    alignItems: 'center',
  },
  alerteButton: {
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
  alerteButtonText: {
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default Exo2;
