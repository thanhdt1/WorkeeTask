import React from 'react';
import {VStack, FlatList} from 'native-base';
import MainLayout from '~/components/MainLayout';
import HeaderComponent from '~/components/Header';
import {listQuestions} from '~/mock/ListQuestionMockup';
import ItemQuestion from '~/components/ItemQuestion';
import * as ScreenName from '~/constants/ScreenName';
import {MainStackScreenProps} from '~/navigation/AppNavigation';
type Props = MainStackScreenProps<'LIST_QUESTIONS_SCREEN'>;
const ListQuestionsScreen = ({navigation}: Props) => {
  const renderItemQuestion = ({item, index}) => {
    return (
      <ItemQuestion
        {...item}
        onPress={() =>
          navigation.navigate(ScreenName.DETAIL_QUESTION_SCREEN, {id: item.id})
        }
      />
    );
  };
  return (
    <MainLayout safeAreaBottom={0}>
      <HeaderComponent title={'List Questions'} />
      <VStack mx={4}>
        <FlatList
          data={listQuestions}
          renderItem={renderItemQuestion}
          keyExtractor={(__, index) => String(index)}
        />
      </VStack>
    </MainLayout>
  );
};
export default ListQuestionsScreen;
