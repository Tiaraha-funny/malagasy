import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import ToolButton from '../components/ToolButton/ToolButton';
import LanguageSwitcherButton from '../components/LanguageSwitcherButton/SwitcherButton';

import LearnSvg from '../icons/learn.svg';
import BackSvg from '../icons/back.svg';
import ModeSvg from '../icons/mode.svg';
import SwitcherSvg from '../icons/switcher.svg';

function ValidateAnswers({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <ToolButton
          onPress={() => navigation.navigate('HomeScreen')}
          icon={<BackSvg />}
        />
        <ToolButton
          onPress={() => alert('I am mode button')}
          icon={<ModeSvg />}
        />
        <LanguageSwitcherButton
          icon={<SwitcherSvg />}
          onPress={() => alert('here I am ')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginStart: 10,
  },
});

export default ValidateAnswers;
