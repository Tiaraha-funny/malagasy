import React, {useEffect, useState} from 'react';
import {storiesOf} from '@storybook/react-native';
import Lists from './Lists';
import LearnSvg from '../../icons/learn.svg';

storiesOf('Lists', module).add('list', () => <HandleList />);

function HandleList() {
  return (
    <Lists
      onPressButton={() => alert('You clicked to learn')}
      text={'Learn'}
      icon={<LearnSvg />}
    />
  );
}
