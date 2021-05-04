import {useEffect, useState} from 'react';
import DatacategoryLists from '../data/categories.json';
import PhrasesLists from '../data/phrases.json';

export const userManager = () => {
  const [switcherLang, setSwitcherLang] = useState(false);
  const [loading, setLoading] = useState(true);

  const [categoryList, setCategoryList] = useState([]);

  const [phrases, setPhrases] = useState([]);
  const [title, setTitle] = useState([]);
  const [randomOptions, setRandomOptions] = useState([]);
  const [randomTitle, setRandomTitle] = useState({});

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

  function getRandomAnswers() {
    if (phrases.length == 0) return null;

    const randomOne = phrases[Math.floor(Math.random() * phrases.length)];
    const randomTwo = phrases[Math.floor(Math.random() * phrases.length)];
    const randomThree = phrases[Math.floor(Math.random() * phrases.length)];
    const randomFourth = phrases[Math.floor(Math.random() * phrases.length)];

    //To get the names from the randoms

    const randomAllOptions = [
      randomOne.name,
      randomTwo.name,
      randomThree.name,
      randomFourth.name,
    ];

    randomAllOptions.sort(() => {
      return 0.5 - Math.random();
    });

    setRandomTitle(randomOne);
    setRandomOptions(randomAllOptions);
  }

  function getPhrasesIds(id) {
    setTitle(findName);
  }

  return {
    primary,
    secondary,
    toggleCallBack,
    loading,
    categoryList,
    getPhrasesIds,
    randomOptions,
    randomTitle,
    getRandomAnswers,
    categoryList,
    getCategory,
  };
};
