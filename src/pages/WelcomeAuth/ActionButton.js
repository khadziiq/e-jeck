import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../../components';
import {colors} from '../../utils/colors';

const ActionButton = ({desc, title, onPress}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text.desc}>{desc}</Text>
      <Button title={title} onPress={onPress} />
    </View>
  );
};

export default ActionButton;

const styles = StyleSheet.create({
  wrapper: {marginBottom: 43, maxWidth: 225},
  text: {
    desc: {
      fontSize: 10,
      color: colors.textColor.default,
      textAlign: 'center',
      paddingHorizontal: '15%',
      marginBottom: 10,
    },
  },
});
