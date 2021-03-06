import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

//importing all the components needed

import Lists from '../components/Lists/Lists';
import ToolButton from '../components/ToolButton/ToolButton';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import LanguageSwitcherButton from '../components/LanguageSwitcherButton/SwitcherButton';

//import all the svg needed

import LeftArrowSvg from '../icons/left-arrow.svg';
import DoubleTickSvg from '../icons/double-tick.svg';
import TickSvg from '../icons/tick.svg';
import ModeSvg from '../icons/mode.svg';
import PlusSvg from '../icons/plus.svg';
import LearnSvg from '../icons/learn.svg';
import SwitcherSvg from '../icons/switcher.svg';
import DatacategoryLists from '../data/categories.json';
import {userManager} from '../Util/userManager';

//Get the children of the importing files
function RenderChildren({children}) {
  return <View>{children}</View>;
}

export default function HomeScreenCategoryList({navigation}) {
  //get variabls from the manages as context
  const {toggleSwitcher, primary, secondary, isEnglish} = userManager();

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
            {/* Mapping the data from json file */}
            {DatacategoryLists &&
              DatacategoryLists.categories.map((item, index) => (
                <Lists
                  key={item.id}
                  onPressButton={() =>
                    navigation.navigate('DisplayPhrases', {
                      itemId: item.id,
                    })
                  }
                />
              ))}
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
});
