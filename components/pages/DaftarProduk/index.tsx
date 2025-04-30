import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const products = [
  {id: '1', name: 'Beras Porang', price: 329000},
  {id: '2', name: 'Beras LION Premium', price: 126000},
  {id: '3', name: 'Naturel Brown Rice', price: 179000},
  {id: '4', name: 'Beras Merah', price: 119000},
  {id: '5', name: 'Daawat Basmati', price: 245000},
  {id: '6', name: 'Zam-Zam Hitam', price: 245000},
];

const ProductListScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../../images/image.png')} style={styles.logo} />
        <Image
          source={require('../../images/image.png')}
          style={styles.cartIcon}
        />
      </View>

      {/* Search */}
      <View style={styles.searchContainer}>
        <TextInput placeholder="Beras Pulen" style={styles.searchInput} />
        <TouchableOpacity style={styles.searchButton}>
          <Text style={{color: '#fff'}}>Cari</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Daftar Produk</Text>

      {/* Product List */}
      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('DetailProduk', {product: item})
            }>
            <Image
              source={require('../../images/image.png')}
              style={styles.productImage}
            />
            <Text style={styles.price}>
              Rp{item.price.toLocaleString('id-ID')}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, padding: 16, backgroundColor: '#fff'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#DCE775',
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  logo: {width: 100, height: 40, resizeMode: 'contain'},
  cartIcon: {width: 24, height: 24},
  searchContainer: {flexDirection: 'row', marginTop: 16},
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    borderRadius: 6,
    backgroundColor: '#f2f2f2',
  },
  searchButton: {
    backgroundColor: '#999',
    marginLeft: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderRadius: 6,
  },
  sectionTitle: {marginTop: 20, fontWeight: 'bold', fontSize: 16},
  productList: {marginTop: 12},
  card: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    margin: 6,
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  productImage: {width: 120, height: 120, resizeMode: 'contain'},
  price: {marginTop: 10, fontWeight: 'bold'},
});

export default ProductListScreen;
