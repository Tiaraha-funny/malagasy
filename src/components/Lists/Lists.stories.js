import React, {useEffect, useState} from 'react';
import {storiesOf} from '@storybook/react-native';
import Datacategories from '../../data/categories.json';
import Lists from './Lists';
import LearnSvg from '../../icons/learn.svg';

storiesOf('Lists', module).add('list', () => <HandleList />);

function HandleList() {
  const [loading, setLoading] = useState(true);
  const [categoryLists, setcategoryLists] = useState([]);

  useEffect(() => {
    setcategoryLists(Datacategories);
    setLoading(false);
  }, [loading]);

  const getCategories = loading && categoryLists && categoryLists.categories;

  return (
    <Lists
      onPressButton={() => alert('You clicked to learn')}
      text={'Learn'}
      icon={<LearnSvg />}
      data={categoryLists}
      categoryLists={getCategories}
      loading={loading}
    />
  );
}
