import React from 'react';

//import all the files needed

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreenCategoryList from '../../src/Screens/U1CategoryLists';
import LearningScreenDisplayPhrases from '../../src/Screens/U8DisplayPhrases';

//create stack Navigator from navigation
const Stack = createStackNavigator();

//get the separating screens from home screen to the detail screen
const ScreenSatck = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* Home Screen */}
        <Stack.Screen name="HomeScreen" component={HomeScreenCategoryList} />
        {/* Learn screen as detail screen */}
        <Stack.Screen
          name="DisplayPhrases"
          component={LearningScreenDisplayPhrases}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenSatck;
