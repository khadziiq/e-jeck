import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {PictureLogin} from '../../assets';
import {Button, Input} from '../../components';
import {setForm} from '../../redux';
import {colors} from '../../utils/colors';

const Login = ({navigation}) => {
  const {form} = useSelector(state => state.LoginReducer);
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
        <PictureLogin style={{width: 238, height: 165, marginTop: 20}} />
        <Text style={styles.text.desc}>
          Mohon untuk mengisi data untuk masuk ke Aplikasi
        </Text>
        <View style={styles.space(30)} />
        <Input placeholder={'Email.......'} />
        <View
          style={styles.space(20)}
          value={form.email}
          onChangeText={value => onInputChange(value, 'email')}
        />
        <View style={styles.space(20)} />
        <Input
          placeholder={'Password.......'}
          value={form.password}
          onChangeText={value => onInputChange(value, 'password')}
          secureTextEntry={true}
        />
        <View style={styles.space(50)} />
        <Button title="Login" onPress={sendData} />
        <View style={styles.space(30)} />
      </ScrollView>
    </View>
  );
};

export default Login;

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
  // illustration: {width: 138, height: 65},

  space: value => {
    return {
      height: value,
    };
  },
});
