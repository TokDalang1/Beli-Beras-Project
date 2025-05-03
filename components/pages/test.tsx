import React from 'react';
import Gap from '../Gap';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const Test = ({navigation}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>Test field</Text>
      </View>
      <View style={styles.icon}>
        <Image source={require('../images/beliberas.png')} />
      </View>
    </View>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#383838',
    // paddingVertical: 20,
    height: 61,
    width: 425,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    paddingLeft: 11,
  },
  icon: {
    alignItems: 'center',
    width: 290,
    height: 100,
    marginRight: 142,
  },
});
