import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import ActionButton from './ActionButton';
import PickSvg from "./icons/pick.svg";
import WrongSvg from "./icons/wrong.svg";
import RightSvg from "./icons/right.svg";

storiesOf('Action Button', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Action Buttons', () => {
      return (
          <View>
            <ActionButton
                content="Learn"
                icon={<PickSvg/>}
                onPress={() => Click('Learn')}
            />
            <ActionButton
                content="Wrong"
                icon={<WrongSvg/>}
                onPress={() => Click('Wrong')}
            />
            <ActionButton
                content="Right"
                icon={<RightSvg/>}
                onPress={() => Click('Right')}
            />
            <ActionButton
                content="Pick"
                icon={<PickSvg/>}
                onPress={() => Click('Pick')}
            />
          </View>
      )
  }
  );

  function Click(content) {
  console.log('You clicked', content);
}

const wrongIcon = require('./icons/wrong.svg');
const rightIcon = require('./icons/right.svg');
const pickIcon = require('./icons/pick.svg');

