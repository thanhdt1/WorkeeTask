import React, {useEffect} from 'react';
import {VStack, Text, Button, ChevronRightIcon, useTheme} from 'native-base';
import MainLayout from '~/components/MainLayout';
import * as ScreenName from '~/constants/ScreenName';
import {MainStackScreenProps} from '~/navigation/AppNavigation';
import {useQuestion} from '~/slices/questionSlice';
import {listQuestions} from '~/mock/ListQuestionMockup';
import {useSelector} from 'react-redux';
type Props = MainStackScreenProps<'HOME_SCREEN'>;

const HomeScreen = ({navigation}: Props) => {
  const {colors} = useTheme();
  const {setListQuestion} = useQuestion();
  const {questionList} = useSelector(state => state.question);
  useEffect(() => {
    if (questionList.length === 0) {
      setListQuestion(listQuestions);
    }
  }, []);
  return (
    <MainLayout safeAreaBottom={0}>
      <VStack justifyContent={'center'} flex={1} alignItems={'center'}>
        <Text alignSelf={'center'} fontSize={36} bold>
          Workee Task
        </Text>
        <Button
          size={'lg'}
          w={'1/4'}
          endIcon={<ChevronRightIcon />}
          mt={20}
          onPress={() => navigation.navigate(ScreenName.LIST_QUESTIONS_SCREEN)}>
          <Text fontSize={'xl'} color={colors.white}>
            Start
          </Text>
        </Button>
      </VStack>
    </MainLayout>
  );
};
export default HomeScreen;
