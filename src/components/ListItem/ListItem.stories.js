import React from 'react';
import {storiesOf} from '@storybook/react-native';

import ActionButton from '../ActionButton/ActionButton';
import ListItems from './ListItem';
import LearnSvg from '../../icons/learn.svg';

storiesOf('List item', module).add('Item', () => (
  <>
    <Items category={'All'} categoryText={'Learn'} itemId={''} />
    <Items category={'All'} categoryText={'Pick'} itemId={''} />
  </>
));

function Items({categoryText, category, content, onPress, itemId}) {
  return (
    <ListItems category={category} text={categoryText} itemId={itemId}>
      <ActionButton content={content} icon={<LearnSvg />} onPress={onPress} />
    </ListItems>
  );
}
