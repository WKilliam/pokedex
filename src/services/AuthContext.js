import {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (exception) {
            console.log(exception);
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (exception) {
            console.log(exception);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (exception) {
            console.log(exception);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
