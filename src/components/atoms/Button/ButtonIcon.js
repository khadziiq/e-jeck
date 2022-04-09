import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconBack} from '../../../assets';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ButtonIcon = ({...rest}) => {
  return (
    <TouchableOpacity {...rest}>
      {rest.name === 'back' && <IconBack height={25} width={25} />}
    </TouchableOpacity>
  );
};

export default ButtonIcon;

const styles = StyleSheet.create({});
