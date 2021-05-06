import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import SwitcherSvg from '../../icons/switcher.svg';
import LanguageSwitcherButton from './SwitcherButton';

storiesOf('Language Switcher Button', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('switch', () => <HandleSwitcherClick />);

function HandleSwitcherClick() {
  const [switcherLang, setSwitcherLang] = useState(false);

  function toggleCallBack() {
    setSwitcherLang(!switcherLang);
  }

  React.useEffect(() => {
    toggleCallBack();
  }, []);

  let primary = 'en';
  let secondary = 'ma';

  if (switcherLang === true) {
    primary = 'ma';
    secondary = 'en';
  }

  return (
    <LanguageSwitcherButton
      icon={<SwitcherSvg />}
      onPress={toggleCallBack}
      primary={primary}
      secondary={secondary}
      switcherLang={switcherLang}
    />
  );
}
