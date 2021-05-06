import React from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import ListItems from '../ListItem/ListItem';
import datacategoryLists from '../../data/categories.json';

function Lists({text, icon, children, onPressButton}) {
  const dataLists = datacategoryLists.categories;
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {dataLists.map((item, index) => (
          <TouchableOpacity
            style={styles.listItem}
            key={item.id}
            onPress={onPressButton}>
            <ListItems category={item.name.en}>
              <View style={styles.group}>
                <Text style={styles.content}>{text}</Text>
                {icon}
              </View>
              <Text>{children}</Text>
            </ListItems>
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
}
export default Lists;

const styles = StyleSheet.create({
  container: {
    marginStart: 15,
    marginEnd: 15,
  },

  listItem: {
    fontSize: 20,
    color: '#111827',

    backgroundColor: '#FFFFFF',
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderRadius: 3,
    borderStyle: 'solid',
  },

  content: {
    color: '#06B6D4',
    margin: 10,
  },

  group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
