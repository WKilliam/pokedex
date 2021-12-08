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
  View,
  FlatList,
  Button,
} from 'react-native';

// créer un objet item
// modifier l'objet item
// afficher dans une todolist un item
const item = props => {
  // Création d'un objet
  const myObject = {name: 'teddy', age: 700};
  const [tableItem, settableItem] = useState([]);

  // .push pour ajouter des données
  useEffect(() => {
    settableItem();
  }, [tableItem]);
};
