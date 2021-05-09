import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function ActionButton({content, icon}) {
  let textColor = '#06B6D4';
  if (content === 'correct') {
    textColor = '#06D440';
  } else if (content === 'wrong') {
    textColor = '#D4068E';
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchButton}>
        <View style={styles.wrapper}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 16,
              color: textColor,
              paddingRight: 16,
              lineHeight: 19.36,
            }}>
            {content}
          </Text>
          {icon}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginEnd: 10,
    marginStart: 10,
    textAlign: 'center',
  },

  touchButton: {
    height: 57,
  },

  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  images: {
    maxWidth: '100%',
  },
});
