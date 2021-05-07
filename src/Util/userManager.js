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
  const [showNextBtn, setShowNextBtn] = useState(false);

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

  function toggleShowNextButton() {
    setShowNextBtn(true);
  }

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
    toggleShowNextButton,
    showNextBtn,
    mode,
    isEnglish,
    loading,
    categoryList,
    phrases,
    categoryList,
  };
};
