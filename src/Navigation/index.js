import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreenCategoryList from '../../src/Screens/U1CategoryLists';
import LearningScreenDisplayPhrases from '../../src/Screens/U8DisplayPhrases';

const Stack = createStackNavigator();

const ScreenSatck = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreenCategoryList} />
        <Stack.Screen
          name="LearnScreen"
          component={LearningScreenDisplayPhrases}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenSatck;
