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

const Mendaftar = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../images/beliberas.png')}
        style={styles.logo}
      />
      <Gap height={96} />

      <Text style={styles.title}>Masuk</Text>
      <Gap height={34} />

      <TextInput
        style={styles.input}
        placeholder="Masukkan nama"
        placeholderTextColor="#999"
      />
      <Gap height={21} />

      <TextInput
        style={styles.input}
        placeholder="Gmail"
        placeholderTextColor="#999"
      />
      <Gap height={21} />
      <TextInput
        style={styles.input}
        placeholder="Kata sandi"
        placeholderTextColor="#999"
        secureTextEntry
      />
      <Gap height={28} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('DaftarProduk')}>
        <Text style={styles.buttonText}>Mendaftar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Mendaftar;

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
