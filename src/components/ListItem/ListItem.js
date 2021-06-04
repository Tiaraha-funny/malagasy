import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

export default function ListItems({text, category, children}) {
  // I would prefer this function to call the action button instead of getting it passed as a child, it should use onPress
  //displaying the items and get the children of the action button
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text>{category}</Text>
        <View style={styles.group}>
          <Text style={styles.content}>{text}</Text>
          <Text>{children}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  content: {
    padding: 10,
    color: '#06B6D4',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
  },
});
