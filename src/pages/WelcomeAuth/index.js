import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {welcomeAuth} from '../../assets';
import {colors} from '../../utils/colors';
import ActionButton from './ActionButton';

const WelcomeAuth = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };
  return (
    <View style={styles.wrapperPage}>
      <Image source={welcomeAuth} style={styles.illustration} />
      <Text style={styles.text.welcome}>Selamat Datang di E-JECK</Text>
      <ActionButton
        desc="Silahkan Login jika anda sudah memiliki Akun"
        title="Login"
        onPress={() => handleGoTo('Login')}
      />
      <ActionButton
        desc="Belum memiliki Akun? Registrasi disini"
        title="Register"
        onPress={() => handleGoTo('Register')}
      />
    </View>
  );
};

export default WelcomeAuth;

const styles = StyleSheet.create({
  wrapperPage: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  illustration: {
    width: 237,
    height: 186,
    marginBottom: 10,
  },
  text: {
    welcome: {
      fontWeight: 'bold',
      fontSize: 20,
      color: colors.defaultColor,
      marginBottom: 76,
    },
  },
});
