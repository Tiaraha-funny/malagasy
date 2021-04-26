import * as React from 'react';
import {StyleSheet, Text, View, Touchable} from 'react-native';

export default function LanguageSwitcherButton({icon, onPress}) {
  return (
    <View style={styles.TextWrapper}>
      <View onPress={onPress}>
        <View style={styles.container}>
          <Text style={styles.text}>en</Text>
          {icon}
          <Text style={styles.text}>ma</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TextWrapper: {
    backgroundColor: '#06B6D4',
    borderRadius: 30,
    justifyContent: 'center',
    maxWidth: 90,
    height: 40,
  },
  container: {
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
