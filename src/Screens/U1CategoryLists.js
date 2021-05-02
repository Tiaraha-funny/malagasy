import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
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
function RenderChildren({children}) {
  // console.log('children', children);
  return <View>{children}</View>;
}
export default function HomeScreenCategoryList() {
  const [switcherLang, setSwitcherLang] = useState(false);
  const toggleCallBack = useCallback(() => setSwitcherLang(!switcherLang));
  const [categoryLists, setCategoryLists] = useState([]);

  let primary = 'en';
  let secondary = 'ma';
  if (switcherLang) {
    primary = 'ma';
    secondary = 'en';
  }

  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <ToolButton icon={<PlusSvg />} onPress={() => alert('I am clicked')} />
        <LanguageSwitcherButton
          icon={<SwitcherSvg />}
          onPress={toggleCallBack}
          primaryText={primary}
          secondaryText={secondary}
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
          <SectionHeading text={'Select a category'} />
          <ScrollView>
            {DatacategoryLists &&
              DatacategoryLists.categories.map((item, index) => (
                <Lists
                  key={item.id}
                  onPressButton={() => alert('Clicked button')}
                  data={item.name.en}
                  text={'Learn'}
                  icon={<LearnSvg />}
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