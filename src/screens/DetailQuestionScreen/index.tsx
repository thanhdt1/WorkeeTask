import React, {useEffect, useState} from 'react';
import {
  VStack,
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
import {useQuestion} from '~/slices/questionSlice';
import {useSelector} from 'react-redux';
type Props = MainStackScreenProps<'DETAIL_QUESTION_SCREEN'>;
const DetailQuestionScreen = ({route, navigation}: Props) => {
  const {questionList} = useSelector(state => state.question);
  const {colors} = useTheme();
  const [id, setId] = useState(route?.params?.id);
  const dataQuestion = questionList.find(e => e?.id === id);
  const [answer, setAnswer] = useState<any>(
    dataQuestion?.answers.length === 0 ? dataQuestion?.initialValue : '',
  );

  const [valueChoose, setValueChoose] = useState<string>(
    dataQuestion?.initialValue,
  );
  const {updateQuestion} = useQuestion();
  useEffect(() => {
    if (answer === '') {
      const data = {...dataQuestion, initialValue: answer, skipable: true};
      updateQuestion(data);
    } else {
      const data = {...dataQuestion, initialValue: answer, skipable: false};
      updateQuestion(data);
    }
  }, [answer]);
  useEffect(() => {
    if (valueChoose === '') {
      const data = {...dataQuestion, initialValue: valueChoose, skipable: true};
      updateQuestion(data);
    } else {
      const data = {
        ...dataQuestion,
        initialValue: valueChoose,
        skipable: false,
      };

      updateQuestion(data);
    }
  }, [valueChoose]);

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
  const handleSave = () => {
    navigation.navigate('RESULT_SCREEN');
  };
  return (
    <MainLayout safeAreaBottom={0}>
      <HeaderComponent
        title={'Questions ' + id}
        saveButton
        hasRightIcon
        handleSave={handleSave}
      />
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
              onChangeText={text => setAnswer(text)}
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
