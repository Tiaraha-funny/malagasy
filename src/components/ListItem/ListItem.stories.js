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

function Items({categoryText, category, content, icon, onPress}) {
  return (
    <ListItems category={category} text={categoryText}>
      <ActionButton content={content} icon={<LearnSvg />} onPress={onPress} />
    </ListItems>
  );
}