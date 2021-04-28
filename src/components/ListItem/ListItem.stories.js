import React from 'react';
import {storiesOf} from '@storybook/react-native';

import ActionButton from '../ActionButton/ActionButton';
import ListItems from './ListItem';
import LearnSvg from '../../icons/learn.svg';

storiesOf('List item', module).add('Item', () => (
  <>
    <Items category={'All'} categoryText={'Learn'} />
    <Items category={'All'} categoryText={'Pick'} />
  </>
));

function Items({categoryText, category}) {
  return (
    <ListItems category={category} text={categoryText}>
      <ActionButton
        icon={<LearnSvg />}
        onPress={() => alert('You clicked to learn button')}
      />
    </ListItems>
  );
}
