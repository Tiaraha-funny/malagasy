import * as React from 'react';
import {SafeAreaView, TextInput, StyleSheet} from 'react-native';

export default function PhrasesTextarea({
  phrase,
  editable,
  onChange = () => null,
}) {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={editable ? styles.input : styles.textarea}
        value={phrase}
        editable={editable}
        onChangeText={onChange}
        multiline={true}
        placeholder={'Enter text'}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    margin: 20,
    marginTop: 4,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    borderWidth: 1,
    textAlign: 'center',
  },
  input: {
    color: '#111827',
    textAlign: 'center',
  },
  textarea: {
    color: '#111827',
    maxWidth: 360,
    marginHorizontal: 'auto',
    fontSize: 20,
    lineHeight: 24.3,
    textAlign: 'center',
  },
});
