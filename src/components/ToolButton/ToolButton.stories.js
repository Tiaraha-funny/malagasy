import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import ToolButton from './ToolButton';

import LeftArrowSvg from '../../icons/left-arrow.svg';
import DoubleTickSvg from '../../icons/double-tick.svg';
import TickSvg from '../../icons/tick.svg';
import ModeSvg from '../../icons/mode.svg';
import PlusSvg from '../../icons/plus.svg';

storiesOf('ToolButton', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Tool Buttons', () => (
    <>
      <ToolButton
        icon={<PlusSvg />}
        onPress={() => HandleClickToolButton('add')}
      />
      <ToolButton
        icon={<TickSvg />}
        onPress={() => HandleClickToolButton('Learn')}
      />
      <ToolButton
        icon={<DoubleTickSvg />}
        onPress={() => HandleClickToolButton('Learnt')}
      />
      <ToolButton
        icon={<LeftArrowSvg />}
        onPress={() => HandleClickToolButton('back')}
      />
      <ToolButton
        icon={<ModeSvg />}
        onPress={() => HandleClickToolButton('Mode')}
      />
    </>
  ));

function HandleClickToolButton(toolBtn) {
  console.log('I clicked', toolBtn);
}
