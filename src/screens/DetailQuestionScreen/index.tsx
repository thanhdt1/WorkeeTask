import React, {useState} from 'react';
import {
  VStack,
  FlatList,
  Text,
  Input,
  HStack,
  Button,
  ChevronRightIcon,
  useTheme,
  ChevronLeftIcon,
  Radio,
} from 'native-base';
import MainLayout from '~/components/MainLayout';
import HeaderComponent from '~/components/Header';
import {MainStackScreenProps} from '~/navigation/AppNavigation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {listQuestions} from '~/mock/ListQuestionMockup';
import {ChooseAnswerType} from '~/type/QuestionType';
import ItemChooseAnswer from '~/components/ItemChooseAnswer';
type Props = MainStackScreenProps<'DETAIL_QUESTION_SCREEN'>;
const DetailQuestionScreen = ({route}: Props) => {
  const {colors} = useTheme();
  const [id, setId] = useState(route?.params?.id);
  const dataQuestion = listQuestions.find(e => e?.id === id);
  const [answer, setAnswer] = useState('');
  const [valueChoose, setValueChoose] = useState<string>('');

  const renderItemAnswer = (item: ChooseAnswerType, index) => {
    return (
      <ItemChooseAnswer
        key={index}
        {...item}
        onPress={() => setValueChoose(item.value.toString())}
      />
    );
  };
  const onNext = () => {
    const indexQuestion = listQuestions.findIndex(e => e.id === id);
    setId(listQuestions[indexQuestion + 1].id);
  };
  const onPrev = () => {
    const indexQuestion = listQuestions.findIndex(e => e.id === id);
    setId(listQuestions[indexQuestion - 1].id);
  };
  return (
    <MainLayout safeAreaBottom={0}>
      <HeaderComponent title={'Questions' + id} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}
        enableOnAndroid>
        <VStack mx={4}>
          <Text
            flexWrap={'wrap'}
            alignSelf={'center'}
            fontSize={'3xl'}
            bold
            mt={10}
            textAlign={'center'}>
            {dataQuestion?.questionText}
          </Text>
          <Text
            flexWrap={'wrap'}
            alignSelf={'center'}
            fontSize={'md'}
            mt={5}
            textAlign={'center'}>
            ({dataQuestion?.descriptionText})
          </Text>
          {dataQuestion?.answers.length === 0 ? (
            <Input
              mt={5}
              h={12}
              placeholder={'Enter your answer'}
              fontSize={'xl'}
              onChange={text => setAnswer(text.toString())}
              value={answer}
            />
          ) : (
            <Radio.Group
              defaultValue={valueChoose}
              name="myRadioGroup"
              accessibilityLabel="Choose your answer"
              onChange={val => setValueChoose(val.toString())}>
              {dataQuestion?.answers.map(renderItemAnswer)}
            </Radio.Group>
          )}
        </VStack>
      </KeyboardAwareScrollView>
      <HStack mb={10} justifyContent={'space-around'}>
        <Button
          size={'lg'}
          w={'1/4'}
          startIcon={<ChevronLeftIcon />}
          mt={20}
          isDisabled={listQuestions.findIndex(e => e?.id === id) === 0}
          onPress={onPrev}>
          <Text fontSize={'xl'} color={colors.white}>
            Prev
          </Text>
        </Button>
        <Button
          size={'lg'}
          w={'1/4'}
          endIcon={<ChevronRightIcon />}
          mt={20}
          isDisabled={
            listQuestions.findIndex(e => e?.id === id) ===
            listQuestions.length - 1
          }
          onPress={onNext}>
          <Text fontSize={'xl'} color={colors.white}>
            Next
          </Text>
        </Button>
      </HStack>
    </MainLayout>
  );
};
export default DetailQuestionScreen;
