import React, {useEffect} from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Mendaftar from './components/pages/Mendaftar/index';
import Login from './components/pages/Login/index';
import DaftarProduk from './components/pages/DaftarProduk';
import DetailProduk from './components/pages/DetailProduk';
import Keranjang from './components/pages/Keranjang';
import ShippingAddressScreen from './components/pages/AlamatPengiriman';
import Profile from './components/pages/Profile';
import FlashMessage from 'react-native-flash-message';
import './src/config/Firebase';

const Stack = createNativeStackNavigator();

const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Mendaftar');
    }, 3000); // 3 detik

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.logo}
          source={require('./components/images/beliberas.png')}
        />
      </View>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Mendaftar" component={Mendaftar} />
        <Stack.Screen name="DaftarProduk" component={DaftarProduk} />
        <Stack.Screen name="DetailProduk" component={DetailProduk} />
        <Stack.Screen name="Keranjang" component={Keranjang} />
        <Stack.Screen
          name="ShippingAddressScreen"
          component={ShippingAddressScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#D7DF6A',
  },
  content: {
    paddingLeft: 48,
  },
  logo: {
    width: 316,
    height: 128,
  },
});
