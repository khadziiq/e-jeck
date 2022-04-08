import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Input} from '../../components';
import {colors} from '../../utils/colors';
import {IconBack} from '../../assets';

const Register = () => {
  return (
    <View style={styles.wrapper.page}>
      <IconBack style={{height: 25, width: 25}} />
      <Text style={styles.text.desc}>
        Mohon untuk mengisi beberapa data untuk validasi data anda
      </Text>
      <View style={styles.space(50)} />
      <Input placeholder={'Email.......'} />
      <View style={styles.space(20)} />
      <Input placeholder={'Nama Lengkap.......'} />
      <View style={styles.space(20)} />
      <Input placeholder={'Password.......'} />

      <View style={styles.illustration}></View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  wrapper: {
    page: {
      padding: 20,
    },
  },
  iconBack: {
    width: 25,
    height: 25,
    backgroundColor: 'orange',
  },
  text: {
    desc: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.defaultColor,
      marginTop: 24,
      maxWidth: 230,
    },
  },
  illustration: {width: 223, height: 139, backgroundColor: 'orange'},

  space: value => {
    return {
      height: value,
    };
  },
});
