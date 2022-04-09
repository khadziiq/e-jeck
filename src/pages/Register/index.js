import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {PictureRegister} from '../../assets';
import {Button, Input} from '../../components';
import {setForm} from '../../redux';
import {colors} from '../../utils/colors';

const Register = ({navigation}) => {
  const {form} = useSelector(state => state.RegisterReducer);
  const dispatch = useDispatch();

  const sendData = () => {
    console.log('data yang dikirim', form);
  };
  const onInputChange = (value, input) => {
    // setForm({
    //   ...form,
    //   [input]: value,
    // });
    dispatch(setForm(input, value));
  };
  return (
    <View style={styles.wrapper.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Button type="icon" name="back" onPress={() => navigation.goBack()} />
        <Text style={styles.text.desc}>
          Mohon untuk mengisi beberapa data untuk validasi data anda
        </Text>
        <View style={styles.space(50)} />
        <Input placeholder={'Email.......'} />
        <View
          style={styles.space(20)}
          value={form.email}
          onChangeText={value => onInputChange(value, 'email')}
        />
        <Input
          placeholder={'Nama Lengkap.......'}
          value={form.fullName}
          onChangeText={value => onInputChange(value, 'fullName')}
        />
        <View style={styles.space(20)} />
        <Input
          placeholder={'Password.......'}
          value={form.password}
          onChangeText={value => onInputChange(value, 'password')}
          secureTextEntry={true}
        />
        <View style={styles.space(50)} />
        <Button title="Daftar" onPress={sendData} />
        <View style={styles.space(20)} />
        <PictureRegister style={styles.illustration} />
      </ScrollView>
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
  illustration: {width: 223, height: 139},

  space: value => {
    return {
      height: value,
    };
  },
});
