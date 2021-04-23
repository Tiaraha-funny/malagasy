
import * as React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';

import MyStoriesComponent from "./myStoriesComponent";


storiesOf('MyStoriesComponent', module)
  .addDecorator(story => <View>{story()}</View>)
  .add('first', () => <MyStoriesComponent content= {'This is my first component'}/>)
  .add('second', () => <MyStoriesComponent content= {'It is just example'} />)
  .add('last', () => <MyStoriesComponent content= {'I understood it a little bit'} />)
