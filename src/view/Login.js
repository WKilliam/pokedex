import React from 'react';
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import {Block, Input, theme} from 'galio-framework';
import {argonTheme, Images} from '../config';
import {ButtonCustum, InputCustum} from '../components';
import Icon from 'react-native-vector-icons/AntDesign';

const {width, height} = Dimensions.get('screen');

const Login = () => {
  return (
    <Block flex middle>
      <ImageBackground
        source={Images.RegisterBackground}
        style={{width, height, zIndex: 1}}>
        <Block safe flex middle>
          <Block style={styles.registerContainer}>
            <Block flex={1} middle>
              <Text color="" size={12}>
                Sign up with
              </Text>
              <Block row style={{marginTop: theme.SIZES.BASES}}>
                <Block width={width * 0.8}>
                  <InputCustum
                    borderless
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
                    placeholder="Email"
                    icon={
                      <Icon
                        size={16}
                        color={argonTheme.COLORS.ICON}
                        name="padlock-unlocked"
                        family="ArgonExtra"
                        style={styles.inputIcons}
                      />
                    }
                  />
                </Block>
              </Block>
              <Text color="#8898AA" size={12}>
                Sign up with
              </Text>
              <Block flex={0.5} middle>
                <Text color="#8898AA" size={12}>
                  Sign up with
                </Text>
                <Block row style={{marginTop: theme.SIZES.BASE}}>
                  <ButtonCustum style={styles.socialButtons}>
                    <Block row>
                      <Text style={styles.socialTextButtons}>Google</Text>
                    </Block>
                  </ButtonCustum>
                  <ButtonCustum style={styles.socialButtons}>
                    <Block row>
                      <Text style={styles.socialTextButtons}>FaceBook</Text>
                    </Block>
                  </ButtonCustum>
                </Block>
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

export default Login;
