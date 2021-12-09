import api from './api';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from 'react-native-google-signin';

import AuthReducerFunctions from '../redux/actions/auth';
import {useDispatch} from 'react-redux';
import {CLIENT_ID} from '@env';
export const AuthService = () => {
  const dispatch = useDispatch();

  const _login = () => dispatch(AuthReducerFunctions.login());

  return {
    googleLogin: async () => {
      try {
        GoogleSignin.configure({
          androidClientId:
            '782202255687-dbn6mqfe2urjfgrd0pqamsuhmjjbrebk.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
          offlineAccess: true, //
          webClientId:
            '782202255687-d2egrbc7sd946lijr4d3le529cscou58.apps.googleusercontent.com',
        });

        const data = await GoogleSignin.hasPlayServices();
        _login({login: 'maaaaaaaaaa'});

        const {user} = await GoogleSignin.signIn();
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
          alert('Cancel');
        } else if (error.code === statusCodes.IN_PROGRESS) {
          alert('Signin in progress');
          // operation (f.e. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          alert('PLAY_SERVICES_NOT_AVAILABLE');
          // play services not available or outdated
        } else {
          alert('ERROR : ');
          console.log('error :', error);

          // some other error happened
        }
      }
    },

    googleLogout: async () => {
      try {
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        AuthReducerFunctions.logout();
      } catch (error) {
        console.error(error);
      }
    },
  };

  // localLogin: async (email, password) => {
  //   try {
  //     await auth().signInWithEmailAndPassword(email, password);
  //   } catch (exception) {
  //     console.log(exception);
  //   }
  // },
  // register: async (email, password) => {
  //   try {
  //     await auth().createUserWithEmailAndPassword(email, password);
  //   } catch (exception) {
  //     console.log(exception);
  //   }
  // },
  // localLlogout: async () => {
  //   try {
  //     await auth().signOut();
  //   } catch (exception) {
  //     console.log(exception);
  //   }
  // },
};
