import {useCallback, useEffect, useState} from 'react';
import DatacategoryLists from '../data/categories.json';
import PhrasesLists from '../data/phrases.json';
// I like you planning ahead, but we don't want to have useless code in the codebase. Only add stuff here when necessary/actually used
export const userManager = () => {// rename it to useSomeWordHere as the warnings in the following lines say.
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

  useEffect(() => { // why?
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
