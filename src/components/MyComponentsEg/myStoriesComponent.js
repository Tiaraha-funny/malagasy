// components/Task.js
import * as React from 'react';
import { Text, SafeAreaView, Button } from 'react-native';
// import { styles } from '../constants/globalStyles';

export default function MyStoriesComponent({content}) {

  return (
    <SafeAreaView >
      <Text>{content}</Text>
      <Text>{content}</Text>
    </SafeAreaView>
  );
}