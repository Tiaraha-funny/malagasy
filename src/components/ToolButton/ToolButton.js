import React from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';

export default function ToolButton({onPress, icon}) {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        style={styles.content}
        onPress={onPress}
        activeOpacity={0.6}>
        {icon}
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  content: {
    backgroundColor: '#06B6D4',
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 100,
  },
});