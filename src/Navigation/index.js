import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreenCategoryList from '../Screens/U1CategoryLists';

const Stack = createStackNavigator();

const ScreenSatck = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreenCategoryList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ScreenSatck;
