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
      <Gap height={58} />

      <Text style={styles.title}>Masuk</Text>
      <Gap height={30} />

      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../../images/google.png')}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Masuk Menggunakan Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={require('../../images/facebook.png')}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Masuk Menggunakan Facebook</Text>
        </TouchableOpacity>
      </View>

      <Gap height={25} />

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
      <Gap height={34} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Masuk</Text>
      </TouchableOpacity>
      <Gap height={12} />

      <TouchableOpacity
        style={styles.button}
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
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  socialContainer: {
    height: 30,
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
    fontSize: 9,
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
