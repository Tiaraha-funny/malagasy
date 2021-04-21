// components/Task.js
import * as React from 'react';
import { Text, SafeAreaView, Button } from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function MyStoriesComponent({content, clickBtn}) {

  function PressBtn() {
    return(
      <Text style={{backgroundColor: "red"}}>Hello</Text>
    )
  }

  return (
    <SafeAreaView >
      <Text>{content}</Text>
      <Text>{content}</Text>
      <Button onPress={PressBtn}>{clickBtn}</Button>
    </SafeAreaView>
  );
}