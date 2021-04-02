import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [sentence, setSentence] = useState('');
  const [average, setAverage] = useState('');

  const calcul = sentence => sentence.split(' ').map(w => w && w.length).join(' ');

  const onPressReverse = () => {
    if (sentence != '') {
      setSentence(
        sentence.split(' ')
          .map(w => w.split('').reverse().join(''))
          .join(' ')
      );
    }
  }

  const calculAverage = () => {
    if (sentence != '') {
      let nbWord = 0 ;
      const sum = sentence.split(' ').reduce((acc, curr) => {
        nbWord++;
        return acc + curr.length;
      }, 0);
      setAverage(Math.floor((sum / nbWord) * 100) / 100);
    }

  }

  const clear = () => setSentence('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.blue} >
        <Text>Calcul </Text>
        <TextInput
          onChangeText={sentence => setSentence(sentence)}
          defaultValue={sentence}
        />
      </View>
      { sentence != '' && (
        <>
          <View style={styles.blue} >
            <Text>{calcul(sentence)}</Text>
            { average != '' && (
              <Text>{average}</Text>
            )}
          </View>
          <View style={styles.btn}>
            <Button
              onPress={onPressReverse}
              title="reverse"
              color="#000"
              accessibilityLabel="Reverse sentense"
            />
            <Button
              onPress={clear}
              title="clear"
              color="#000"
              accessibilityLabel="Clear sentense"
            />
            <Button
              onPress={calculAverage}
              title="average"
              color="#000"
              accessibilityLabel="Average sentense"
            />
          </View>
        </>
      )}

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blue: {
    height: 50,
    width: 200,
    backgroundColor: 'powderblue'
  },
  btn: {
    height: 50,
    backgroundColor: 'skyblue',
    padding: 2
  }
});
