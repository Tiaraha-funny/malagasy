const categoriesData = require('./categories.json');
const phrasesData = require('./phrases.json');

export const LANGUAGE_NAMES = {
  MG: 'mg',
  EN: 'en',
};

export const getAllCategoriesNames = lang => {
  return categoriesData.categories.map(cat => cat.name[lang]);
};

export const getAllCategoriesIds = () => {
  return categoriesData.categories.map(cat => cat.id);
};

export const getPhraseIdsForCategory = catId => {
  const category = categoriesData.categories.find(cat => cat.id === catId);
  return (category && category.phrasesIds) || null;
};

export const getAllPhrases = () => {
  return phrasesData.phrases;
};

export const findPhraseCategories = phraseId => {
  const phraseData = phrasesData.phrases;
  return phrasesData && phrasesData.find(item => item.id === phraseId);
};

export function findCategoryById(id) {
  const category = categoriesData.categories;
  return (category && category.find(cat => cat.id === id)) || null;
  // throw 'not implemented!';
  // TODO implement
}
export function findPhraseById(id) {
  const phrase = phrasesData.phrases;
  return (phrase && phrase.find(item => item.id === id)) || null;
  // throw 'not implemented!';
  // TODO implement
}
