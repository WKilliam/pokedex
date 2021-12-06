import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [onAuthStateChanged]);
  if (initializing) {
    return null;
  }

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  } else {
    return (
      <View>
        <Text>Welcome {user.email}</Text>
      </View>
    );
  }
};

function App() {}
