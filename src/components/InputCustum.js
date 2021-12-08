import React from 'react';
import {StyleSheet} from 'react-native';
import {Input} from 'galio-framework';
import {argonTheme} from '../config';
import Icon from 'react-native-vector-icons/AntDesign';

const InputCustum = props => {
  Icon.loadFont();
  const {shadowless, success, error, icon} = props;

  const inputStyles = [
    styles.input,
    !shadowless && styles.shadow,
    success && styles.success,
    error && styles.error,
    {...props.style},
  ];

  return (
    <Input
      placeholder="write something here"
      placeholderTextColor={argonTheme.COLORS.MUTED}
      style={inputStyles}
      color={argonTheme.COLORS.HEADER}
      iconContent={
        icon || (
          <Icon
            size={14}
            color={argonTheme.COLORS.ICON}
            name="link"
            family="AntDesign"
          />
        )
      }
      {...props}
      icon={undefined}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 4,
    borderColor: argonTheme.COLORS.BORDER,
    height: 44,
    backgroundColor: '#FFFFFF',
  },
  success: {
    borderColor: argonTheme.COLORS.INPUT_SUCCESS,
  },
  error: {
    borderColor: argonTheme.COLORS.INPUT_ERROR,
  },
  shadow: {
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 0.05,
    elevation: 2,
  },
});

export default InputCustum;
