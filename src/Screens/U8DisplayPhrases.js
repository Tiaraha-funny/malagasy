import React, {useState, useCallback, useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import ActionButton from '../components/ActionButton/ActionButton';
import LanguageSwitcherButton from '../components/LanguageSwitcherButton/SwitcherButton';
import PhrasesTextarea from '../components/PhrasesTextarea/PhrasesTextarea';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import ToolButton from '../components/ToolButton/ToolButton';

import Datacategories from '../data/categories.json';

import LearnSvg from '../icons/learn.svg';
import BackSvg from '../icons/back.svg';
import ModeSvg from '../icons/mode.svg';
import SwitcherSvg from '../icons/switcher.svg';
import ListItems from '../components/ListItem/ListItem';
import {userManager} from '../Util/userManager';

function LearningScreenDisplayPhrases({route, navigation}) {
  const {
    toggleCallBack,
    primary,
    secondary,
    categoryList,
    getCategory,
    loading,
  } = userManager();

  //To get the id from anywhere
  const {itemId} = route.params;

  console.log('params', itemId);

  //For the category title
  const categoryTitle =
    Datacategories &&
    Datacategories.categories &&
    Datacategories.categories.find(categoryId => categoryId.id === itemId);

  //To get the id in the phrase
  const getPhraseIds = categoryTitle.id;
  console.log('id', itemId);

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
          onPress={toggleCallBack}
          primary={primary}
          secondary={secondary}
        />
      </View>
      <View style={styles.group}>
        <View style={styles.title}>
          <SectionHeading text={'Category'} />
          <Text>{categoryTitle.name.en}</Text>
        </View>
        <SectionHeading text={'The phrase'} />
        <View style={styles.phraseStyle}>
          <PhrasesTextarea phrase={'roa'} />
        </View>
        <SectionHeading text={'Pick a solution'} />

        <View style={styles.buttonsWrapper}>
          <ListItems
            category={'five'}
            onPress={() => alert('action true or false')}
          />
          <ActionButton icon={<LearnSvg />} content={'pick'} />
        </View>
        <View style={styles.buttonsWrapper}>
          <ListItems
            category={'two'}
            onPress={() => alert('action true or false')}
          />
          <ActionButton icon={<LearnSvg />} content={'pick'} />
        </View>
        <View style={styles.buttonsWrapper}>
          <ListItems
            category={'one'}
            onPress={() => alert('action true or false')}
          />
          <ActionButton icon={<LearnSvg />} content={'pick'} />
        </View>
        <View style={styles.buttonsWrapper}>
          <ListItems
            category={'thre'}
            onPress={() => alert('action true or false')}
          />
          <ActionButton icon={<LearnSvg />} content={'pick'} />
        </View>
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

  buttonsWrapper: {
    backgroundColor: '#fff',
    marginStart: 20,
    marginEnd: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderStyle: 'solid',
  },

  group: {
    paddingTop: 25,
    color: '#111827',
  },

  phraseStyle: {
    marginTop: 0,
  },

  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
export default LearningScreenDisplayPhrases;
