import * as React from 'react';
import {View} from 'react-native';
import {storiesOf} from '@storybook/react-native';

import SectionHeading from './SectionHeading';

storiesOf('SectionHeading', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('headings', () => (
    <View>
      <SectionHeading text="Select a category"/>
      <SectionHeading text="Seen phrases"/>
      <SectionHeading text="Learnt phrases"/>
      <SectionHeading text="Category"/>
      <SectionHeading text="The phrase"/>
      <SectionHeading text="Pick a solution"/>
      <SectionHeading text="The phrase in English"/>
      <SectionHeading text="The phrase in Malagasy"/>
    </View>
  ));