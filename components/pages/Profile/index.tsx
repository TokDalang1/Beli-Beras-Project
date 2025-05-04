import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Text,
  TextInput as RNTextInput,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

// Komponen Gap sederhana
const Gap = ({height}) => <View style={{height}} />;

// Komponen Header sederhana
const Header = ({title, onPress}) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={onPress} style={styles.backButton}>
      <Text>Kembali</Text>
    </TouchableOpacity>
    <Text style={styles.headerTitle}>{title}</Text>
  </View>
);

// Komponen TextInput sederhana
const TextInput = ({label, value, editable, style}) => (
  <View>
    <Text style={styles.label}>{label}</Text>
    <RNTextInput
      style={[styles.input, !editable && styles.disabledInput, style]}
      value={value}
      editable={editable}
    />
  </View>
);

// Komponen Button sederhana
const Button = ({label, onPress, color = '#d6df5e', textColor = '#fff'}) => (
  <TouchableOpacity
    style={[styles.button, {backgroundColor: color}]}
    onPress={onPress}>
    <Text style={[styles.buttonText, {color: textColor}]}>{label}</Text>
  </TouchableOpacity>
);

const SimpleProfileScreen = ({navigation}) => {
  const [photo, setPhoto] = useState(
    require('../../images/defaultprofile.png'),
  );
  const [photoBased64, setPhotoBased64] = useState('');
  const [localUserName, setLocalUserName] = useState('Nama Pengguna');
  const [localUserEmail, setLocalUserEmail] = useState('email@example.com');

  const getImage = async () => {
    const result = await launchImageLibrary({
      maxHeight: 100,
      maxWidth: 100,
      quality: 0.5,
      includeBase64: true,
      mediaType: 'photo',
    });

    if (result.didCancel) {
      showMessage({
        message: 'Pilih foto dibatalkan',
        type: 'danger',
      });
    } else if (result.assets && result.assets.length > 0) {
      const assets = result.assets[0];
      const base64 = `data:${assets.type};base64, ${assets.base64}`;
      const source = {uri: base64};
      setPhotoBased64(base64);
      setPhoto(source);
    }
  };

  const handleEditProfile = () => {
    Alert.alert('Info', 'Edit profil akan datang!');
  };

  const handleLogout = () => {
    Alert.alert('Info', 'Logout akan diimplementasikan');
  };

  return (
    <View style={styles.pageContainer}>
      <Header title="Profil" onPress={() => navigation.goBack()} />
      <View style={styles.contentContainer}>
        <View style={styles.profileHeader}>
          <Image source={photo} style={styles.profileImage} />
          <TouchableOpacity
            style={styles.cameraIconContainer}
            onPress={getImage}>
            <Image
              source={require('../../images/edit.png')}
              style={styles.cameraIcon}
            />
          </TouchableOpacity>
        </View>
        <Gap height={24} />
        <TextInput label="Nama" value={localUserName} editable={false} />
        <Gap height={16} />
        <TextInput label="Email" value={localUserEmail} editable={false} />
        <Gap height={24} />
        <Button label="Edit Profil" onPress={handleEditProfile} />
        <Gap height={12} />
        <Button
          label="Alamat"
          onPress={() => navigation.navigate('AlamatPengiriman')}
        />
        <Gap height={12} />
        <Button
          label="Logout"
          color="#F44336"
          textColor="#FFFFFF"
          onPress={handleLogout}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {flex: 1, backgroundColor: '#FFFFFF'},
  headerContainer: {
    backgroundColor: '#d6df5e',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {padding: 8, marginRight: 16},
  headerTitle: {fontSize: 18, fontWeight: 'bold', color: '#fff'},
  contentContainer: {flex: 1, paddingHorizontal: 24, marginTop: 24},
  profileHeader: {alignItems: 'center', marginBottom: 20},
  profileImage: {width: 100, height: 100, borderRadius: 50, marginBottom: 10},
  cameraIconContainer: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 20,
    padding: 5,
    position: 'absolute',
    bottom: 10,
    right: '38%',
  },
  cameraIcon: {width: 20, height: 20, tintColor: '#fff'},
  label: {fontSize: 16, color: '#333', marginBottom: 8},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 16,
  },
  disabledInput: {backgroundColor: '#f0f0f0', color: '#777'},
  button: {
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {fontSize: 16, fontWeight: 'bold', color: '#fff'},
});

export default SimpleProfileScreen;
