import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const ShippingAddressScreen = ({navigation, route}) => {
  const [namaLengkap, setNamaLengkap] = useState('');
  const [alamatLengkap, setAlamatLengkap] = useState('');
  const [nomorTelepon, setNomorTelepon] = useState('');

  const totalHarga = route?.params?.total || '325.000';

  const handleCheckout = () => {
    // Implementasikan logika checkout di sini
    console.log('Melakukan Checkout dengan alamat:', {
      namaLengkap,
      alamatLengkap,
      nomorTelepon,
      totalHarga,
    });
    // Mungkin navigasi ke halaman pembayaran selanjutnya
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../images/arrow_back.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Alamat Pengiriman</Text>
        <View style={styles.headerRight} />
      </View>

      {/* Formulir Alamat */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Nama lengkap</Text>
        <TextInput
          style={styles.input}
          value={namaLengkap}
          onChangeText={setNamaLengkap}
          placeholder="Masukkan nama lengkap Anda"
          render={props => <Text {...props} />} // Memastikan nilai dirender dalam <Text>
        />

        <Text style={styles.label}>Alamat lengkap</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          value={alamatLengkap}
          onChangeText={setAlamatLengkap}
          placeholder="Masukkan alamat lengkap Anda (jalan, nomor rumah, RT/RW, kelurahan, kecamatan, kota/kabupaten, kode pos)"
          multiline
          numberOfLines={3}
          render={props => <Text {...props} />}
        />

        <Text style={styles.label}>Nomor handphone / Whatsapp</Text>
        <TextInput
          style={styles.input}
          value={nomorTelepon}
          onChangeText={setNomorTelepon}
          placeholder="Masukkan nomor handphone atau Whatsapp Anda"
          keyboardType="phone-pad"
          render={props => <Text {...props} />}
        />
      </View>

      {/* Total Harga */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total - Rp{totalHarga}</Text>
      </View>

      {/* Tombol Checkout */}
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  header: {
    backgroundColor: '#d6df5e',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {fontSize: 18, fontWeight: 'bold', color: '#fff'},
  backIcon: {width: 24, height: 24, tintColor: '#fff'},
  headerRight: {width: 24},
  formContainer: {padding: 16},
  label: {fontSize: 16, marginBottom: 5, color: '#333'},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  multilineInput: {
    minHeight: 80,
    textAlignVertical: 'top',
  },
  totalContainer: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    alignItems: 'flex-end',
  },
  totalText: {fontSize: 18, fontWeight: 'bold', color: '#333'},
  checkoutButton: {
    backgroundColor: '#d6df5e',
    paddingVertical: 15,
    borderRadius: 8,
    margin: 16,
    alignItems: 'center',
  },
  checkoutButtonText: {fontSize: 18, fontWeight: 'bold', color: '#fff'},
});

export default ShippingAddressScreen;
