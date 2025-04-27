import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./components/images/beliberas.png')}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#DFD0B8',
  },

  logo: {
    resizeMode: 'center',
  },
});
