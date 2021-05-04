import {useEffect, useState} from 'react';
import DatacategoryLists from '../data/categories.json';
import PhrasesLists from '../data/phrases.json';

export const userManager = () => {
  const [switcherLang, setSwitcherLang] = useState(false);
  const [loading, setLoading] = useState(true);
  const [categoryList, setCategoryList] = useState([]);
  const [phrases, setPhrases] = useState([]);

  function toggleCallBack() {
    setSwitcherLang(!switcherLang);
  }

  const getCategory = categoryList.categories;

  useEffect(() => {
    setCategoryList(DatacategoryLists);
    setPhrases(PhrasesLists.phrases);
    setLoading(false);
  }, []);

  useEffect(() => {
    toggleCallBack();
  }, [categoryList]);

  let primary = 'en';
  let secondary = 'ma';
  if (switcherLang) {
    primary = 'ma';
    secondary = 'en';
  }

  return {
    primary,
    secondary,
    toggleCallBack,
    loading,
    categoryList,
    phrases,
    categoryList,
    getCategory,
  };
};
