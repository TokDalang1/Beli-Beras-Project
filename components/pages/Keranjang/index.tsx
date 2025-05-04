import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const Keranjang = ({navigation}) => {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      title: 'Twin Pack: Tropicana Slim Beras Porang Instan 1000gr',
      price: 329000,
      quantity: 1,
      image: require('../../images/produk/berasporang.png'), // Ganti path sesuai lokasi gambar Anda
    },
    // Anda bisa menambahkan item keranjang lainnya di sini
  ]);

  const increaseQuantity = id => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? {...item, quantity: item.quantity + 1} : item,
    );
    setCartItems(updatedCart);
  };

  const decreaseQuantity = id => {
    const updatedCart = cartItems.map(item =>
      item.id === id && item.quantity > 1
        ? {...item, quantity: item.quantity - 1}
        : item,
    );
    setCartItems(updatedCart);
  };

  const removeItem = id => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  return (
    <View style={styles.container}>
      {/* Header (tidak diubah) */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../images/arrow_back.png')} // Ganti path ikon kembali jika ada
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Keranjang</Text>
        <View style={styles.headerRight} />
        {/* Untuk menjaga tata letak tetap seimbang */}
      </View>

      {/* Daftar Item Keranjang */}
      {cartItems.map(item => (
        <View key={item.id} style={styles.cartItem}>
          <Image source={item.image} style={styles.itemImage} />
          <View style={styles.itemDetails}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <View style={styles.quantityControl}>
              <TouchableOpacity
                style={styles.qtyButton}
                onPress={() => decreaseQuantity(item.id)}>
                <Text style={styles.qtyText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.qtyValue}>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.qtyButton}
                onPress={() => increaseQuantity(item.id)}>
                <Text style={styles.qtyText}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.itemPrice}>
              Rp{(item.price * item.quantity).toLocaleString()}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.removeButton}
            onPress={() => removeItem(item.id)}>
            <Image
              source={require('../../images/delete.png')} // Ganti path ikon hapus jika ada
              style={styles.removeIcon}
            />
          </TouchableOpacity>
        </View>
      ))}

      {/* Total Harga dan Tombol Checkout */}
      {cartItems.length > 0 && (
        <View style={styles.checkoutSection}>
          <Text style={styles.totalPrice}>
            Total: Rp{calculateTotal().toLocaleString()}
          </Text>
          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={() =>
              navigation.navigate('ShippingAddressScreen', {
                total: calculateTotal().toLocaleString(),
              })
            }>
            <Text style={styles.checkoutButtonText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Pesan Jika Keranjang Kosong */}
      {cartItems.length === 0 && (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyCartText}>Keranjang Anda Kosong</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f4f4f4'},
  header: {
    backgroundColor: '#d6df5e',
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  backIcon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  headerRight: {
    width: 24, // Untuk menjaga keseimbangan header
  },
  cartItem: {
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2, // Untuk memberikan sedikit efek shadow
  },
  itemImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  qtyButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
  },
  qtyText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  qtyValue: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
  itemPrice: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  removeButton: {
    marginLeft: 8,
  },
  removeIcon: {
    width: 24,
    height: 24,
    tintColor: '#f44336',
  },
  checkoutSection: {
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'right',
  },
  checkoutButton: {
    backgroundColor: '#d6df5e',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  emptyCart: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 18,
    color: '#757575',
  },
});

export default Keranjang;
