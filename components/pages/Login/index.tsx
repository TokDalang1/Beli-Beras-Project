import React, {useState} from 'react';
import {auth} from '../../../src/config/Firebase';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {showMessage} from 'react-native-flash-message';
import Gap from '../../Gap';

const Masuk = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);

      showMessage({
        message: 'Login Berhasil',
        type: 'success',
      });

      navigation.replace('DaftarProduk');
    } catch (error) {
      let errorMessage = 'Login Gagal';
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'Pengguna tidak ditemukan.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Password salah.';
      }
      showMessage({
        message: errorMessage,
        type: 'danger',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../images/beliberas.png')}
        style={styles.logo}
      />
      <Gap height={42} />

      <Text style={styles.title}>Masuk</Text>
      <Gap height={35} />

      <TextInput
        style={styles.input}
        placeholder="Gmail"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />
      <Gap height={19} />

      <TextInput
        style={styles.input}
        placeholder="Kata sandi"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Gap height={25} />

      <TouchableOpacity
        style={styles.button}
        onPress={onLogin}
        disabled={loading}>
        <Text style={styles.buttonText}>{loading ? 'Masuk...' : 'Masuk'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Mendaftar')}>
        <Text style={{marginTop: 16, textAlign: 'center'}}>
          Belum punya akun? Daftar
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Masuk;

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
