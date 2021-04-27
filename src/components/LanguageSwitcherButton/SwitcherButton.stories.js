import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import SwitcherSvg from '../../icons/switcher.svg';
import LanguageSwitcherButton from './SwitcherButton';

storiesOf('Language Switcher Button', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('switch', () => <HandleSwitcherClick />);

function HandleSwitcherClick() {
  const [switcherLang, setSwitcherLang] = React.useState(false);
  const toggleCallBack = React.useCallback(() =>
    setSwitcherLang(!switcherLang),
  );

  return (
    <LanguageSwitcherButton
      icon={<SwitcherSvg />}
      onPress={toggleCallBack}
      switcherLang={switcherLang}
    />
  );
}
