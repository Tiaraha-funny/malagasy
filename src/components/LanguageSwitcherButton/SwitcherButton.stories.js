import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import SwitcherSvg from '../../icons/switcher.svg';
import LanguageSwitcherButton from './SwitcherButton';

storiesOf('Language Switcher Button', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('switch', () => (
    <LanguageSwitcherButton
      icon={<SwitcherSvg />}
      onPress={() => HandleSwitcherClick()}
    />
  ));

function HandleSwitcherClick() {
  console.log('You switched language');
}
