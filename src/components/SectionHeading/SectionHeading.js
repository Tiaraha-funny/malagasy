import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default function SectionHeading({text}) {
  return <Text style={styles.text}>{text}:</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 22,
    color: '#111827',
    padding: 10,
    marginStart: 10,
  },
});