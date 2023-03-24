import React from 'react';
import {VStack, FlatList, HStack, Button, Text, useTheme} from 'native-base';
import MainLayout from '~/components/MainLayout';
import HeaderComponent from '~/components/Header';
import {MainStackScreenProps} from '~/navigation/AppNavigation';
import * as ScreenName from '~/constants/ScreenName';
import {useSelector} from 'react-redux';
import ItemResult from '~/components/ItemResultComponent';
type Props = MainStackScreenProps<'RESULT_SCREEN'>;
const ResultScreen = ({navigation}: Props) => {
  const {questionList} = useSelector(state => state.question);
  const {colors} = useTheme();
  const renderItemResult = ({item, index}) => {
    return (
      <ItemResult
        {...item}
        onPress={() =>
          navigation.navigate(ScreenName.DETAIL_QUESTION_SCREEN, {id: item.id})
        }
      />
    );
  };
  return (
    <MainLayout safeAreaBottom={0}>
      <HeaderComponent title={'Result'} />
      <VStack mx={4} flex={1}>
        <FlatList
          data={questionList}
          renderItem={renderItemResult}
          keyExtractor={(__, index) => String(index)}
        />
      </VStack>
      <HStack mb={10} justifyContent={'space-around'}>
        <Button
          size={'lg'}
          w={'1/4'}
          mt={20}
          onPress={() => navigation.popToTop()}>
          <Text fontSize={'xl'} color={colors.white}>
            Home
          </Text>
        </Button>
      </HStack>
    </MainLayout>
  );
};
export default ResultScreen;
