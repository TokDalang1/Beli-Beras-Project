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
      <Gap height={42} />

      <Text style={styles.title}>Daftar</Text>
      <Gap height={35} />

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../../images/google.png')}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Daftar Menggunakan Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../../images/facebook.png')}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Daftar Menggunakan Facebook</Text>
        </TouchableOpacity>
      </View>

      <Gap height={20} />

      <TextInput
        style={styles.input}
        placeholder="Masukkan nama"
        placeholderTextColor="#999"
      />
      <Gap height={19} />

      <TextInput
        style={styles.input}
        placeholder="Gmail"
        placeholderTextColor="#999"
      />
      <Gap height={19} />

      <TextInput
        style={styles.input}
        placeholder="Kata sandi"
        placeholderTextColor="#999"
        secureTextEntry
      />
      <Gap height={25} />

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
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 20,
    flex: 1,
    marginHorizontal: 5,
  },
  socialIcon: {
    width: 20,
    height: 20,

    resizeMode: 'contain',
    paddingLeft: 9,
  },
  socialText: {
    fontSize: 10,
    flexShrink: 1,
    fontWeight: 'bold',
    paddingLeft: 18,
  },
  input: {
    height: 40,
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
  buttonText: {
    fontWeight: 'bold',
  },
});
