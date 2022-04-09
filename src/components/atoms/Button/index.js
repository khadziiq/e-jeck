import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../../utils/colors';
import ButtonIcon from './ButtonIcon';

const Button = ({title, onPress, type, name}) => {
  if (type === 'icon') {
    return <ButtonIcon name={name} onPress={onPress} />;
  }
  return (
    <TouchableOpacity style={styles.wrapper.component} onPress={onPress}>
      <Text style={styles.text.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: {
    component: {
      backgroundColor: colors.defaultColor,
      borderRadius: 25,
      paddingVertical: 13,
    },
  },
  text: {
    title: {
      fontSize: 12,
      color: 'black',
      textTransform: 'uppercase',
      textAlign: 'center',
    },
  },
});
