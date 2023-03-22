import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ItemQuestions} from './QuestionType';

export enum RootStackRoutes {
  main = 'Main',
}

export type RootStackParamsList = {
  [RootStackRoutes.main]: ItemQuestions;
};

export type RootStackScreenProps<T extends keyof RootStackParamsList> =
  NativeStackScreenProps<RootStackParamsList, T>;
