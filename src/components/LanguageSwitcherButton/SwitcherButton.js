import * as React from 'react';
//Importing elements needed
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function LanguageSwitcherButton({
  icon,
  onPress,
  primary,
  secondary,
}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.wrapper}>
          <Text style={styles.text}>{primary}</Text>
          {icon}
          <Text style={styles.text}>{secondary}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#06B6D4',
    borderRadius: 30,
    justifyContent: 'center',
    maxWidth: 90,
    height: 40,
    margin: 7,
  },

  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },

  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginLeft: 5,
    marginRight: 5,
  },
});
