import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import ToolButton from '../components/ToolButton/ToolButton';
import LanguageSwitcherButton from '../components/LanguageSwitcherButton/SwitcherButton';
import PhrasesTextarea from '../components/PhrasesTextarea/PhrasesTextarea';
import SectionHeading from '../components/SectionHeading/SectionHeading';

import Datacategories from '../data/categories.json';
import PhrasesLists from '../data/phrases.json';

import LearnSvg from '../icons/learn.svg';
import BackSvg from '../icons/back.svg';
import ModeSvg from '../icons/mode.svg';
import SwitcherSvg from '../icons/switcher.svg';

import {userManager} from '../Util/userManager';
import {useRoute} from '@react-navigation/core';

function ValidateAnswers({route, navigation}) {
  const {toggleSwitcher, primary, secondary, isEnglish} = userManager();

  const {phraseId} = route.params;
  console.log('route U9', phraseId);
  // const {param} = useRoute().params ?? {};
  // const {paramsId} = route?.params;
  // console.log('params U9(', param);

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
          onPress={toggleSwitcher}
          primary={primary}
          secondary={secondary}
        />
      </View>

      <View>
        <View style={styles.title}>
          <SectionHeading text={isEnglish ? 'Category' : 'Sokajy'} />
          <Text>
            {/* {isEnglish ? categoryTitle.name.en : categoryTitle.name.en} */}
          </Text>
        </View>
        <SectionHeading text={isEnglish ? 'The phrase' : 'Andian-teny'} />
        <View style={styles.phraseStyle}>
          <PhrasesTextarea
          // phrase={
          //   !isEnglish ? displayIdPhrase?.name?.en : displayIdPhrase?.name?.mg
          // }
          />
        </View>
        <SectionHeading
          text={isEnglish ? 'Pick a solution' : 'Fidio ny validy'}
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
  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phraseStyle: {
    marginTop: 0,
  },
});

export default ValidateAnswers;
