import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';

import Lists from '../components/Lists/Lists';
import ToolButton from '../components/ToolButton/ToolButton';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import LanguageSwitcherButton from '../components/LanguageSwitcherButton/SwitcherButton';

import DoubleTickSvg from '../icons/double-tick.svg';
import TickSvg from '../icons/tick.svg';
import ModeSvg from '../icons/mode.svg';
import PlusSvg from '../icons/plus.svg';
import LearnSvg from '../icons/learn.svg';
import SwitcherSvg from '../icons/switcher.svg';
import DatacategoryLists from '../data/categories.json';
import {userManager} from '../Util/userManager';

function RenderChildren({children}) {
  return <View>{children}</View>;
}

export default function HomeScreenCategoryList({navigation}) {
  const {loading} = userManager();
  const [switcherLang, setSwitcherLang] = useState(false);

  function toggleCallBack() {
    setSwitcherLang(!switcherLang);
  }

  useEffect(() => {
    toggleCallBack();
  }, []);

  let primary = 'en';
  let secondary = 'ma';
  if (switcherLang) {
    primary = 'ma';
    secondary = 'en';
  }

  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <ToolButton
          icon={<PlusSvg />}
          onPress={() => navigation.navigate('LearnScreen')}
        />
        <LanguageSwitcherButton
          icon={<SwitcherSvg />}
          onPress={toggleCallBack}
          primary={primary}
          secondary={secondary}
          style={styles.switch}
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
                  onPressButton={() =>
                    navigation.navigate('LearnScreen', {
                      itemId: item.id,
                    })
                  }
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
  switch: {
    margin: 0,
  },
});
