import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Title from '../components/Title';

const Result = ({route, navigation}) => {
  const {score} = route.params;
  // console.warn(score);
  const resultBanner =
    score > 40
      ? 'https://cdni.iconscout.com/illustration/premium/thumb/job-victory-7646024-6178703.png'
      : 'https://cdni.iconscout.com/illustration/premium/thumb/business-failure-5565421-4648176.png';

  return (
    <View style={styles.container}>
      <View>
        <Title titleText="RESULTS" />
        <Text style={styles.scorevalue}>Score You Get : {score}</Text>
        {/* <Text>This is Result</Text> */}
      </View>

      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: resultBanner,
          }}
          resizeMode="contain"
          style={styles.banner}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>GO TO HOME</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    alignItems: 'center',
    height: '100%',
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  banner: {
    height: 400,
    width: 400,
  },
  // buttonContainer:{
  //   justifyContent:'center',
  //   alignItems:'center',
  // },
  button: {
    backgroundColor: '#1a759f',
    marginBottom: 12,
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    maxWidth: '25%',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  scorevalue: {
    fontWeight: '800',
    fontSize: 24,
    alignSelf: 'center',
    color: 'black',
  },
});
