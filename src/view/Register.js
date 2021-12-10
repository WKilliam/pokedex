import React, {useEffect, useState} from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text} from 'react-native';
import {Block, theme} from 'galio-framework';
import {argonTheme, Images} from '../config';
import {ButtonCustum, InputCustum} from '../components';
import Icon from 'react-native-vector-icons/AntDesign';

import {AuthService} from '../services/api/auth';
const {width, height} = Dimensions.get('screen');

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isHidePassword, setIsHidePassword] = useState(true);
  const [isHideConfirmPassword, setIsHideConfirmPassword] = useState(true);
  const [message, setMessage] = useState('');

  const useAuthService = AuthService();
  const register = async () => {
    setMessage('');

    if (password.length < 6)
      setMessage('Le mot de passe doit faire minimum 6 caractères');

    if (password.normalize() === confirmPassword.normalize()) {
      auth = await useAuthService.register(email, password);
      navigation.navigate('Login', {email});
    } else {
      setMessage('Les mots de passe ne correspondent pas');
    }
  };

  return (
    <Block flex middle>
      <ImageBackground
        source={Images.RegisterBackground}
        style={{width, height, zIndex: 1}}>
        <Block safe flex middle>
          <Block style={styles.registerContainer}>
            <Block flex={1} middle>
              <Text style={styles.SignText}>◓ S'enregistrer ◓</Text>
              <Block row style={{marginTop: theme.SIZES.BASES}}>
                <Block width={width * 0.8}>
                  <InputCustum
                    borderless
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                    icon={
                      <Icon
                        size={14}
                        color={argonTheme.COLORS.ICON}
                        name="user"
                        family="AntDesign"
                      />
                    }
                  />
                </Block>
              </Block>
              <Block row style={{marginTop: theme.SIZES.BASES}}>
                <Block width={width * 0.8}>
                  <InputCustum
                    borderless
                    secureTextEntry={isHidePassword}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Password"
                    icon={
                      <Icon
                        size={16}
                        onPress={() => setIsHidePassword(!isHidePassword)}
                        color={argonTheme.COLORS.ICON}
                        name="lock"
                        style={styles.inputIcons}
                      />
                    }
                  />
                </Block>
              </Block>

              <Block row style={{marginTop: theme.SIZES.BASES}}>
                <Block width={width * 0.8}>
                  <InputCustum
                    borderless
                    secureTextEntry={isHideConfirmPassword}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    placeholder="Confirm Password"
                    icon={
                      <Icon
                        size={16}
                        onPress={() =>
                          setIsHideConfirmPassword(!isHideConfirmPassword)
                        }
                        color={argonTheme.COLORS.ICON}
                        name="lock"
                        style={styles.inputIcons}
                      />
                    }
                  />
                </Block>
              </Block>
              <Text style={styles.SignText} />
              <Block row style={{marginTop: theme.SIZES.BASE}}>
                <ButtonCustum
                  disabled={
                    registerChampsAreSet(password, confirmPassword, email)
                      ? false
                      : true
                  }
                  style={
                    registerChampsAreSet(password, confirmPassword, email)
                      ? styles.activeButton
                      : styles.disabledButton
                  }
                  style={styles.socialButtons}
                  onPress={() => register()}>
                  <Block row>
                    <Text style={styles.socialTextButtons}>Sign Up</Text>
                  </Block>
                </ButtonCustum>
              </Block>

              <Block>
                <Text style={styles.error}> {message} </Text>
              </Block>

              <Block flex={0.5} middle>
                <Text style={styles.SignText}>◓ Se connecter ◓</Text>
                <ButtonCustum
                  style={styles.socialButtons}
                  onPress={() => navigation.navigate('Login')}>
                  <Block row>
                    <Text style={styles.socialTextButtons}>Sign In</Text>
                  </Block>
                </ButtonCustum>
              </Block>
            </Block>
          </Block>
        </Block>
      </ImageBackground>
    </Block>
  );
};

const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.875,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: 'hidden',
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: '#ffffff',
  },
  disabledButton: {
    opacity: 0.1,
  },
  activeButton: {
    opacity: 1,
  },
  error: {
    color: 'red',
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: '#fff',
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: '800',
    fontSize: 14,
  },
  socialButtonsGoogle: {
    width: 120,
    height: 40,
    backgroundColor: argonTheme.COLORS.SIGNGOOGLE,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  socialTextButtonsGoogle: {
    color: argonTheme.COLORS.WHITE,
    fontWeight: '800',
    fontSize: 14,
  },
  socialButtonsFacebook: {
    width: 120,
    height: 40,
    backgroundColor: argonTheme.COLORS.SIGNFACEBOOK,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  socialTextButtonsFacebook: {
    color: argonTheme.COLORS.WHITE,
    fontWeight: '800',
    fontSize: 14,
  },
  SignText: {
    borderRadius: 5,
    height: 27,
    width: 250,
    textAlign: 'center',
    color: argonTheme.COLORS.WHITE,
    fontWeight: '800',
    fontSize: 23,
  },
  inputIcons: {
    marginRight: 12,
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30,
  },
  createButton: {
    width: width * 1.5,
    marginTop: 25,
  },
});

export default Register;
function registerChampsAreSet(password, confirmPassword, email) {
  return password.length > 0 && confirmPassword.length > 0 && email.length > 0;
}
