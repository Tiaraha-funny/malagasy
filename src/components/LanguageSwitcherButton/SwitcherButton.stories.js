import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import SwitcherSvg from '../../icons/switcher.svg';
import LanguageSwitcherButton from './SwitcherButton';

storiesOf('Language Switcher Button', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('switch', () => <HandleSwitcherClick />);

function HandleSwitcherClick() {
  const [switcherLang, setSwitcherLang] = useState(false); //The import for thst seems to be missing

  //To handle the switching again and again
  function toggleCallBack() {
    setSwitcherLang(!switcherLang);
  }

  React.useEffect(() => { //Why is this needed?
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
