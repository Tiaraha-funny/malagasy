import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function NextButton({text, disabled, onPress}) {
  return (
    <View
      style={
        disabled ? styles.containerDisabled : styles.containerNonedisabled
      }>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={styles.textWrapper}>
        <Text style={disabled ? styles.textDisabled : styles.textNonedisabled}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerDisabled: {
    backgroundColor: '#ffffff',
    borderRadius: 30,
    borderColor: '#06B6D4',
    borderStyle: 'solid',
    borderWidth: 1,
    margin: 10,
    height: 40,
    width: '20%',
    justifyContent: 'center',
  },
// Use consistent casing (containerNoneDisabled, but containerEnabled would be better), prevent duplication of style objects 
  containerNonedisabled: {
    backgroundColor: '#06B6D4',
    height: 40,
    width: '20%',
    borderRadius: 30,
    margin: 10,
    justifyContent: 'center',
  },

  textDisabled: {
    color: '#06B6D4',
    lineHeight: 19,
    fontSize: 16,
    fontWeight: '600',
  },

  textNonedisabled: {
    color: '#ffffff',
    lineHeight: 19,
    fontSize: 16,
    fontWeight: '600',
  },

  textWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
