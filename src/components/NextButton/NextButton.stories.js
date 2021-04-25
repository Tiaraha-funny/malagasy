import * as React from 'react';
import {View} from 'react-native';

import {storiesOf} from '@storybook/react-native';

import NextButton from './NextButton';

storiesOf('Next Button', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('next', () => <NextButton onPress={() => HandleClick('Next')} text="Next" disabled={false} />)
  .add('add', () => <NextButton onPress={() => HandleClick('Add')} text="Add" disabled={false} />)
  .add('add disabled', () => (<NextButton onPress={() => HandleClick()} text="Add" disabled={true} />))

  function HandleClick(content) {
  console.log('You clicked', content);
}
