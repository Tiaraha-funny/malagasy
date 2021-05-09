import {useCallback, useEffect, useState} from 'react';
import DatacategoryLists from '../data/categories.json';
import PhrasesLists from '../data/phrases.json';

export const userManager = () => {
  const [switcherLang, setSwitcherLang] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isEnglish, setIsEnglish] = useState(false);
  const [mode, setMode] = useState(true);
  const [categoryList, setCategoryList] = useState([]);
  const [phrases, setPhrases] = useState([]);

  const toggleSwitcher = useCallback(() => {
    return setSwitcherLang(!switcherLang), setIsEnglish(!isEnglish);
  });

  let primary = 'en';
  let secondary = 'ma';
  if (!switcherLang) {
    primary = 'ma';
    secondary = 'en';
  }

  function toggleModeBacground() {
    setMode(!mode);
  }
  // get the category lists from json
  const getCategory = categoryList.categories;

  useEffect(() => {
    setCategoryList(DatacategoryLists);
    setPhrases(PhrasesLists.phrases);
    setLoading(false);
  }, []);

  useEffect(() => {
    toggleSwitcher();
  }, []);

  return {
    primary,
    secondary,
    toggleSwitcher,
    toggleModeBacground,
    mode,
    isEnglish,
    loading,
    categoryList,
    phrases,
    categoryList,
    getCategory,
  };
};
