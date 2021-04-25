import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import ActionButton from './ActionButton';

storiesOf('Action Button', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Action Buttons', () => {
      return (
          <View>
            <ActionButton
                content="Learn"
                icon={pickIcon}
                onPress={() => Click('Learn')}
            />
            <ActionButton
                content="Wrong"
                icon={wrongIcon}
                onPress={() => Click('Wrong')}
            />
            <ActionButton
                content="Right"
                icon={rightIcon}
                onPress={() => Click('Right')}
            />
            <ActionButton
                content="Pick"
                icon={pickIcon}
                onPress={() => Click('Pick')}
            />
          </View>
      )
  }
  );

  function Click(content) {
  console.log('You clicked', content);
}

const wrongIcon = require('./icons/wrong.png');
const rightIcon = require('./icons/right.png');
const pickIcon = require('./icons/pick.png');