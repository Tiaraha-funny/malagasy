import * as React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default function ActionButton({content, icon, onPress}) {
  //Checking the changes after clicking the buttons and follow its own color
  let textColor = '#06B6D4';
  if (content === 'Right') {
    textColor = '#06D440';
  } else if (content === 'Wrong') {
    textColor = '#D4068E';
  }

  //how the action buttons look like in the detail screen
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.touchButton}>
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
    // backgroundColor: '#FFFFFF',
    // borderColor: '#E5E5E5',
    // borderWidth: 1,
    // borderRadius: 3,
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
