import React, {useState} from 'react';
import Gap from '../../Gap';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import {showMessage} from 'react-native-flash-message';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const Mendaftar = ({navigation}) => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onRegister = async () => {
    setLoading(true);
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: nama,
      });

      showMessage({
        message: 'Pendaftaran Berhasil',
        type: 'success',
      });
      navigation.replace('Login');
    } catch (error) {
      let errorMessage = 'Pendaftaran Gagal';
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'Email sudah terdaftar.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Email tidak valid.';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Kata sandi terlalu lemah (minimal 6 karakter).';
      }
      showMessage({
        message: errorMessage,
        type: 'danger',
      });
      console.error('Error Mendaftar:', error);
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

      <Text style={styles.title}>Daftar</Text>
      <Gap height={35} />

      <View style={styles.socialContainer}>
        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => alert('Fitur Daftar Google belum tersedia')}>
          <Image
            source={require('../../images/google.png')}
            style={styles.socialIcon}
          />
          <Text style={styles.socialText}>Daftar Menggunakan Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.socialButton}
          onPress={() => alert('Fitur Daftar Facebook belum tersedia')}>
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
        value={nama}
        onChangeText={text => setNama(text)}
      />
      <Gap height={19} />

      <TextInput
        style={styles.input}
        placeholder="Gmail"
        placeholderTextColor="#999"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <Gap height={19} />

      <TextInput
        style={styles.input}
        placeholder="Kata sandi"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Gap height={25} />

      <TouchableOpacity
        style={styles.button}
        onPress={onRegister}
        disabled={loading}>
        <Text style={styles.buttonText}>
          {loading ? 'Mendaftarkan...' : 'Mendaftar'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttons}
        onPress={() => navigation.navigate('Login')}
      />
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
  buttons: {
    paddingRight: 30,
    // borderWidth: 1,
    width: 40,
    height: 40,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});
