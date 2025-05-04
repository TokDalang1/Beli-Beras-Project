import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const DetailProduk = ({route, navigation}) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity(prev => prev + 1);
  const decreaseQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const product = {
    title: 'Twin Pack: Tropicana Slim Beras Porang Instan 1000gr',
    price: 329000,
    image: require('../../images/produk/berasporang.png'),
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={require('../../images/beliberas.png')}
          style={styles.logo}
        />
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => navigation.navigate('Keranjang')}>
            <Image
              source={require('../../images/shopbag.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../../images/defaultprofile.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Image source={product.image} style={styles.productImage} />

      <View style={styles.details}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>
          Beras porang instan, tinggal diseduh air panas, nikmat dan penuh
          serat, cocok untuk diet & diabetes.
        </Text>
        <Text style={styles.description}>
          Cara Penyajian 1 - Instant {'\n'} 1. Siapkan wadah dengan tutup {'\n'}{' '}
          2. Tuangkan 1 takar beras dan 1 takar air panas mendidih {'\n'}{' '}
          (perbandingan 1:1) ke dalam wadah {'\n'} 3. Tutup rapat wadah, tunggu
          20-25 menit atau sampai matang {'\n'} 4. Tropicana Slim Beras Porang
          Instant, siap disantap. {'\n'} 5. Tambahkan topping/lauk favorit anda
          agar lebih nikmat. {'\n'}
          {'\n'}
          Cara Penyajian 2 - Rebus dan Saring{'\n'}1. Masak air di dalam panci
          sampai mendidih.{'\n'}2. Masukkan Tropicana Slim Beras Porang Instant
          ke dalam panci{'\n'}dengan perbandingan beras dan air sebesar 1:3 (1
          takar beras{'\n'}dan 3 takar air), masak selama 6 menit, aduk berkala
          dengan{'\n'} spatula sampai air menyusut.{'\n'}3. Saring dan tiriskan,
          Tropicana Slim Beras Porang Instant siap{'\n'}disantap
          {'\n'}
          {'\n'}
          baca selengkapnya
        </Text>

        <Text style={styles.price}>Rp{product.price.toLocaleString()}</Text>

        {/* Quantity Selector */}
        <View style={styles.qtyContainer}>
          <TouchableOpacity onPress={decreaseQty} style={styles.qtyButton}>
            <Text style={styles.qtyText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.qtyValue}>{quantity}</Text>
          <TouchableOpacity onPress={increaseQty} style={styles.qtyButton}>
            <Text style={styles.qtyText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Buttons */}
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buttonText}>Beli</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => navigation.navigate('Keranjang')}>
            <Text style={styles.buttonText}>Tambah ke keranjang</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailProduk;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  header: {
    backgroundColor: '#d6df5e',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain',
    paddingLeft: 11,
    paddingTop: 12,
    paddingBottom: 9,
  },
  icons: {flexDirection: 'row'},
  icon: {width: 25, height: 25, marginLeft: 15},
  productImage: {width: '100%', height: 250, resizeMode: 'contain'},
  details: {padding: 16},
  title: {fontSize: 18, fontWeight: 'bold', marginBottom: 8},
  description: {fontSize: 13, color: '#333', marginBottom: 12},
  price: {fontSize: 18, fontWeight: 'bold', color: '#000', marginBottom: 12},
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  qtyButton: {
    backgroundColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  qtyText: {fontSize: 18, fontWeight: 'bold'},
  qtyValue: {fontSize: 16, marginHorizontal: 12},
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buyButton: {
    backgroundColor: '#d6df5e',
    padding: 12,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    marginRight: 8,
  },
  cartButton: {
    backgroundColor: '#333',
    padding: 12,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {color: '#fff', fontWeight: 'bold'},
});
