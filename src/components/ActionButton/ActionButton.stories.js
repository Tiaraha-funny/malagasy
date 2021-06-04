import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';
import ActionButton from './ActionButton';

//Importing all the svg needed => That is easy enough to understand that no explanatory comments are needed. They are only necessary when you think somebody would have real struggle understanding it otherwise
import PickSvg from './icons/pick.svg';
import WrongSvg from './icons/wrong.svg';
import RightSvg from './icons/right.svg';

//Adding the function to the story  
storiesOf('Action Button', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('Action Buttons', () => {
    return (
      <View>
        <ActionButton
          content="Learn"
          icon={<PickSvg />}
          onPress={() => Click('Learn')}
        />
        <ActionButton
          content="Wrong"
          icon={<WrongSvg />}
          onPress={() => Click('Wrong')}
        />
        <ActionButton
          content="Right"
          icon={<RightSvg />}
          onPress={() => Click('Right')}
        />
        <ActionButton
          content="Pick"
          icon={<PickSvg />}
          onPress={() => Click('Pick')}
        />
      </View>
    );
  });

function Click(content) {
  alert('You clicked action button');
}
