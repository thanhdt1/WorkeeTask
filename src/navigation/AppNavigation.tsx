import {
  CompositeScreenProps,
  NavigationContainer,
} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import * as ScreenName from '~/constants/ScreenName';
import DetailQuestionScreen from '~/screens/DetailQuestionScreen';
import HomeScreen from '~/screens/HomeScreen';
import ListQuestionsScreen from '~/screens/ListQuestionsScreen';
import {navigationRef} from '~/services/navigationServices';
import {RootStackRoutes, RootStackScreenProps} from '~/type/types';

export type MainStackParamList = {
  [ScreenName.HOME_SCREEN]: undefined;
  [ScreenName.DETAIL_QUESTION_SCREEN]: {id: string} | undefined;
  [ScreenName.LIST_QUESTIONS_SCREEN]: undefined;
};
const Stack = createNativeStackNavigator<MainStackParamList>();
export type MainStackScreenProps<T extends keyof MainStackParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<MainStackParamList, T>,
    RootStackScreenProps<RootStackRoutes.main>
  >;

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={ScreenName.HOME_SCREEN}>
        <Stack.Screen name={ScreenName.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen
          name={ScreenName.LIST_QUESTIONS_SCREEN}
          component={ListQuestionsScreen}
        />
        <Stack.Screen
          name={ScreenName.DETAIL_QUESTION_SCREEN}
          component={DetailQuestionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
