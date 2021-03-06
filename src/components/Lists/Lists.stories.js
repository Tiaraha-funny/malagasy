import React, {useEffect, useState} from 'react';
import {storiesOf} from '@storybook/react-native';
import Datacategories from '../../data/categories.json';
import Lists from './Lists';
import LearnSvg from '../../icons/learn.svg';

storiesOf('Lists', module).add('list', () => <HandleList />);

function HandleList() {
  //Hnadling the data category from json file
  const [categoryLists, setcategoryLists] = useState([]);

  useEffect(() => {
    setcategoryLists(Datacategories);
  }, []);

  return (
    <Lists
      onPressButton={() => alert('You clicked to learn')}
      text={'Learn'}
      icon={<LearnSvg />}
      data={categoryLists}
      itemId={categoryLists && categoryLists?.categoryLists}
    />
  );
}
