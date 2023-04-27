import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Title from '../components/Title';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Title of Home Screen */}
      <Title titleText='QUIZZZY' />

      {/* Illustrator of Home Screen */}
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://www.sopconsultants.com/wp-content/uploads/2022/05/table-img01.png',
          }}
          resizeMode="contain"
          style={styles.banner}
        />
      </View>

      {/* Button for start of Home Screen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Quiz')}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    alignItems: 'center',
    height:'100%'
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
  },
  banner: {
    height: 400,
    width: 400,
  },
  button: {
    width: '90%',
    backgroundColor: '#1a759f',
    marginBottom:12,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
});
