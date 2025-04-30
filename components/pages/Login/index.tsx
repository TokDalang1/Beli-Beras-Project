import React from 'react';
import Gap from '../../Gap';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../images/beliberas.png')}
        style={styles.logo}
      />
      <Gap height={96} />

      <Text style={styles.title}>Masuk</Text>
      <Gap height={34} />

      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          placeholder="Gmail"
          placeholderTextColor="#999"
        />
      </View>
      <Gap height={21} />

      <View style={styles.inputs}>
        <TextInput
          style={styles.input}
          placeholder="Kata sandi"
          placeholderTextColor="#999"
          secureTextEntry
        />
      </View>
      <Gap height={34} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Masuk</Text>
      </TouchableOpacity>
      <Gap height={12} />

      <TouchableOpacity
        style={styles.buttonOutline}
        onPress={() => navigation.navigate('Mendaftar')}>
        <Text style={styles.buttonText}>Mendaftar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 290,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 55,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    height: 36,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  inputs: {
    height: 36,
  },

  button: {
    backgroundColor: '#d6df5e',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: '#d6df5e',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
});
