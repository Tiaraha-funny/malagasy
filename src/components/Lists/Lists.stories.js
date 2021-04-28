import React, {useEffect, useState} from 'react';
import {storiesOf} from '@storybook/react-native';
import Datacategories from '../../data/categories.json';
import Lists from './Lists';
import LearnSvg from '../../icons/learn.svg';

storiesOf('Lists', module).add('list', () => <HandleList />);

function HandleList() {
  const [categories, setcategories] = useState([]);

  useEffect(() => {
    setcategories(Datacategories);
  });

  const getCategories = categories && categories.categories;

  return (
    <Lists
      data={getCategories}
      onPressButton={() => alert('You clicked to learn')}
      text={'Learn'}
      icon={<LearnSvg />}
    />
  );
}
