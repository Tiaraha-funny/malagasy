import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

// Importing all the components needed
import ToolButton from '../components/ToolButton/ToolButton';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import LanguageSwitcherButton from '../components/LanguageSwitcherButton/SwitcherButton';

// Importing all the Svg needed
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

//Rendring the children of the ListItems and some othe components
function RenderChildren({children}) {
  return <View>{children}</View>;
}

export default function HomeScreenCategoryList({navigation}) {
  //Get all the variable needed from manager as context
  const {toggleSwitcher, primary, secondary, isEnglish} = userManager();

  //Get the data category from category lists
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
            {/* Mapping the data from the category lists */}
            {dataLists.map(item => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() =>
                    navigation.navigate('LearnScreen', {
                      itemId: item.id,
                    })
                  }
                  style={styles.buttonsWrapper}>
                  <ListItems
                    category={isEnglish ? item.name.en : item.name.mg}
                  />
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
