import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';

//Importing all the components needed
import ActionButton from '../components/ActionButton/ActionButton';
import LanguageSwitcherButton from '../components/LanguageSwitcherButton/SwitcherButton';
import PhrasesTextarea from '../components/PhrasesTextarea/PhrasesTextarea';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import ToolButton from '../components/ToolButton/ToolButton';

// Importing the json files to get the data
import Datacategories from '../data/categories.json';
import PhrasesLists from '../data/phrases.json';

// Importing all the svg needed
import WrongSvg from '../icons/wrong.svg';
import TickSvg from '../icons/tick.svg';
import LearnSvg from '../icons/learn.svg';
import BackSvg from '../icons/back.svg';
import ModeSvg from '../icons/mode.svg';
import SwitcherSvg from '../icons/switcher.svg';
import ListItems from '../components/ListItem/ListItem';
import {userManager} from '../Util/userManager';
import NextButton from '../components/NextButton/NextButton';

function LearningScreenDisplayPhrases({route, navigation}) {
  // get the variables needed from manager as context
  const {toggleSwitcher, primary, secondary, isEnglish} = userManager();

  // Handle all the states needed
  const [showNextBtn, setShowNextBtn] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(`${(<LearnSvg />)}`);
  const [currentText, setCurrentText] = useState('Pick');
  const [isClicked, setIsClicked] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [displayPhase, setDisplayPhrase] = useState([]);
  const [hasClicked, setHasClicked] = useState(false);

  //To get the id from anywhere
  const paramsId = route.params.itemId;
  // console.log('params', params);

  //For the category title
  const categoryTitle =
    Datacategories &&
    Datacategories.categories &&
    Datacategories.categories.find(categoryId => categoryId.id == paramsId);

  //To get the id in the phrase
  const getPhraseIds = categoryTitle && categoryTitle.phrasesIds;

  const phrases = PhrasesLists.phrases;

  const randomePhrasesIds =
    getPhraseIds[Math.floor(Math.random() * getPhraseIds.length)];

  const matcheTheIds =
    phrases &&
    phrases.filter(phr => phr.id.includes(randomePhrasesIds.substr(0, 3)));

  // Display the phrase which is inside the textArea component
  const displayIdPhrase =
    phrases && matcheTheIds.find(phr => phr.id === randomePhrasesIds);

  // Get more option to shuffle from the data
  const moreOptions =
    matcheTheIds && matcheTheIds.filter(id => id.id !== displayIdPhrase.id);

  const randomOne =
    moreOptions && moreOptions[Math.floor(Math.random() * moreOptions.length)];
  const randomTwo =
    moreOptions && moreOptions[Math.floor(Math.random() * moreOptions.length)];
  const randomThree =
    moreOptions && moreOptions[Math.floor(Math.random() * moreOptions.length)];
  const randomFourth =
    moreOptions && moreOptions[Math.floor(Math.random() * moreOptions.length)];

  const randomeAllOptions = [
    randomOne?.name,
    randomTwo?.name,
    randomThree?.name,
    randomFourth?.name,
  ];

  // Answers which is randoming and shuffled inside the listItems
  const chooseAnswers = randomeAllOptions.sort(function () {
    return 0.5 - Math.random();
  });

  // Handle the text changes after clicking one of the items in the button
  function toggleValidateAnswers() {
    setIsClicked(true);
    setShowNextBtn(true);

    if (displayIdPhrase.id === displayPhase.id) {
      setCorrectAnswer(true);
      setCurrentIcon(`${(<TickSvg />)}`);
      setCurrentText('correct');
    } else if (displayIdPhrase.id !== displayPhase.id) {
      setCorrectAnswer(true);
      setCurrentText('wrong');
      setCurrentIcon(`${(<WrongSvg />)}`);
    }
  }

  //  To show and to hide the next button and handle the shuffling question after clicking next button
  function toggleNextButton() {
    setCorrectAnswer(false);
    setIsClicked(false);
    setHasClicked(true);
    setDisplayPhrase(displayIdPhrase);
    setAnswers(chooseAnswers);
    setShowNextBtn(false);
    if (hasClicked) {
      setCurrentText('pick');
      setCurrentIcon(<LearnSvg />);
    }
  }

  useEffect(() => {
    setDisplayPhrase(displayIdPhrase);
    setAnswers(chooseAnswers);
    toggleNextButton();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <ToolButton
          onPress={() => navigation.navigate('HomeScreen')}
          icon={<BackSvg />}
        />
        <ToolButton
          onPress={() => alert('I am mode button')}
          icon={<ModeSvg />}
        />
        <LanguageSwitcherButton
          icon={<SwitcherSvg />}
          onPress={toggleSwitcher}
          primary={primary}
          secondary={secondary}
        />
      </View>
      <View style={styles.group}>
        <View style={styles.title}>
          <SectionHeading text={isEnglish ? 'Category' : 'Sokajy'} />
          <Text style={{fontSize: 17}}>
            {isEnglish ? categoryTitle.name.en : categoryTitle.name.en}
          </Text>
        </View>
        <SectionHeading text={isEnglish ? 'The phrase' : 'Andian-teny'} />
        <View style={styles.phraseStyle}>
          <PhrasesTextarea
            phrase={
              !isEnglish ? displayPhase?.name?.en : displayPhase?.name?.mg
            }
          />
        </View>
        <SectionHeading
          text={isEnglish ? 'Pick a solution' : 'Fidio ny validy'}
        />

        <View>
          {answers.map(answer => {
            return (
              <TouchableOpacity
                key={answer?.id}
                style={styles.buttonsWrapper}
                onPress={() => {
                  toggleValidateAnswers();
                }}>
                <ListItems category={isEnglish ? answer?.en : answer?.mg} />
                {/* Get the action button */}
                <ActionButton
                  icon={
                    correctAnswer ? (
                      <TickSvg />
                    ) : <LearnSvg /> && correctAnswer ? (
                      <WrongSvg />
                    ) : (
                      <LearnSvg />
                    )
                  }
                  content={
                    correctAnswer
                      ? 'correct'
                      : 'pick' && correctAnswer
                      ? 'wrong'
                      : 'pick'
                  }
                />
              </TouchableOpacity>
            );
          })}
        </View>
        <>
          {showNextBtn ? (
            <NextButton text={'Next'} onPress={toggleNextButton} />
          ) : (
            <Text>{''}</Text>
          )}
        </>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginStart: 10,
  },

  buttonsWrapper: {
    backgroundColor: '#fff',
    marginStart: 20,
    marginEnd: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1,
    borderColor: '#E5E5E5',
    borderWidth: 1,
    borderStyle: 'solid',
  },

  group: {
    paddingTop: 25,
    color: '#111827',
  },

  phraseStyle: {
    marginTop: 0,
  },

  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default LearningScreenDisplayPhrases;
