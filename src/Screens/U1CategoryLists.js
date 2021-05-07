import React, {useCallback, useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Lists from '../components/Lists/Lists';
import ToolButton from '../components/ToolButton/ToolButton';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import LanguageSwitcherButton from '../components/LanguageSwitcherButton/SwitcherButton';

import LeftArrowSvg from '../icons/left-arrow.svg';
import DoubleTickSvg from '../icons/double-tick.svg';
import TickSvg from '../icons/tick.svg';
import ModeSvg from '../icons/mode.svg';
import PlusSvg from '../icons/plus.svg';
import LearnSvg from '../icons/learn.svg';
import SwitcherSvg from '../icons/switcher.svg';
import DatacategoryLists from '../data/categories.json';
import {userManager} from '../Util/userManager';
import ListItems from '../components/ListItem/ListItem';
import ActionButton from '../components/ActionButton/ActionButton';

function RenderChildren({children}) {
  return <View>{children}</View>;
}

export default function HomeScreenCategoryList({navigation}) {
  const {toggleSwitcher, primary, secondary, isEnglish} = userManager();

  const dataLists = DatacategoryLists.categories;

  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <ToolButton
          icon={<PlusSvg />}
          onPress={() =>
            alert(
              'Hi!!, Please, you have to click one of the list to get an id!!',
            )
          }
        />

        <LanguageSwitcherButton
          icon={<SwitcherSvg />}
          onPress={toggleSwitcher}
          primary={primary}
          secondary={secondary}
        />

        <ToolButton icon={<TickSvg />} onPress={() => alert('I am clicked')} />
        <ToolButton
          icon={<DoubleTickSvg />}
          onPress={() => alert('I am clicked')}
        />
        <ToolButton icon={<ModeSvg />} onPress={() => alert('I am clicked')} />
      </View>

      <View style={styles.listcategoryWrapper}>
        <RenderChildren>
          <SectionHeading
            text={isEnglish ? 'Select a category' : 'Fidio ny sokajy'}
          />
          <ScrollView>
            {dataLists.map(item => {
              // const getAnswerId = item.phrasesIds[Math.floor(Math.random())];
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() =>
                    navigation.navigate('LearnScreen', {
                      itemId: item.id,
                      // phraseId: getAnswerId,
                    })
                  }
                  style={styles.buttonsWrapper}>
                  <ListItems category={item.name.en} />
                  <ActionButton icon={<LearnSvg />} content={'Learn'} />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </RenderChildren>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
    paddingStart: 15,
  },
  listcategoryWrapper: {
    paddingTop: 20,
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
});
