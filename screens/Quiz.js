import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Video from 'react-native-video';

// shuffle array For generating random shuffled options
const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const Quiz = ({navigation}) => {
  const [questions, setQuestions] = useState();
  const [ques, setQues] = useState(0);
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getQuiz = async () => {
    setIsLoading(true);
    const url =
      'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple&encode=url3986';
    const res = await fetch(url);
    const data = await res.json();
    setQuestions(data.results);
    setOptions(generateOptionsAndShuffle(data.results[0]));
    setIsLoading(false);
  };

  useEffect(() => {
    getQuiz();
  }, []);

  const generateOptionsAndShuffle = _question => {
    const options = [..._question.incorrect_answers];
    options.push(_question.correct_answer);
    shuffleArray(options);
    return options;
  };

  const handleSelectedOptions = _option => {
    if (_option === questions[ques].correct_answer) {
      setScore(score + 10);
    }
    if (ques !== 9) {
      // set question number by incrementing 1. 
      setQues(ques + 1);
      // setting options for next question.
      setOptions(generateOptionsAndShuffle(questions[ques + 1]));
    }
    if (ques === 9) {
      handleShowResult();
    }
  };

  const handleSkipPress = () => {
    setQues(ques + 1);
    setOptions(generateOptionsAndShuffle(questions[ques + 1]));
  };

  const handleShowResult = () => {
    navigation.navigate('Result', {
      score: score,
    });
  };

  return (
    <View style={styles.container}>
      {isLoading ? 
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={80} color="#1a759f" />
        </View>
       : (
        questions && (
          <View style={styles.parent}>
            <View style={styles.top}>
              <Text style={styles.question}>
                Q.{ques + 1} {decodeURIComponent(questions[ques].question)}
              </Text>
            </View>

            <View style={styles.options}>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOptions(options[0])}>
                <Text style={styles.option}>
                  {decodeURIComponent(options[0])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOptions(options[1])}>
                <Text style={styles.option}>
                  {decodeURIComponent(options[1])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOptions(options[2])}>
                <Text style={styles.option}>
                  {decodeURIComponent(options[2])}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.optionButton}
                onPress={() => handleSelectedOptions(options[3])}>
                <Text style={styles.option}>
                  {decodeURIComponent(options[3])}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottom}>
              {/* <TouchableOpacity style={styles.button} onPress={() => null}>
              <Text style={styles.buttonText}>PREV</Text>
            </TouchableOpacity> */}

              {ques !== 9 && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleSkipPress}>
                  <Text style={styles.buttonText}>SKIP</Text>
                </TouchableOpacity>
              )}

              {ques === 9 && (
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleShowResult}>
                  <Text style={styles.buttonText}>SHOW RESULT</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )
      )}
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    // alignItems: 'center',
    height: '100%',
  },
  top: {
    marginVertical: 16,
  },
  options: {
    marginVertical: 16,
    flex: 1,
  },
  bottom: {
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#1a759f',
    marginBottom: 12,
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  question: {
    fontSize: 28,
  },
  option: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  optionButton: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#34A0A4',
    borderRadius: 12,
  },
  parent: {
    height: '100%',
  },
});
