import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreenCategoryList from '../../src/Screens/U1CategoryLists';
import LearningScreenDisplayPhrases from '../../src/Screens/U8DisplayPhrases';
// import ValidateAnswers from '../Screens/U9ValidateAnswers';

const Stack = createStackNavigator();

const ScreenSatck = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreenCategoryList} />
        <Stack.Screen
          name="DisplayPhrases"
          component={LearningScreenDisplayPhrases}
        />
        {/* <Stack.Screen name="ValidateAnswer" component={ValidateAnswers} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenSatck;
