import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function LanguageSwitcherButton({icon, onPress, switcherLang}) {
  let primary = 'en';
  let secondary = 'ma';

  if (switcherLang) {
    primary = 'ma';
    secondary = 'en';
  }

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
    margin: 20,
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
  },
});
