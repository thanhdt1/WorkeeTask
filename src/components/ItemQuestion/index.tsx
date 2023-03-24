import {HStack, Pressable, Text, useTheme} from 'native-base';
import React from 'react';
import {ItemQuestions} from '~/type/QuestionType';
type PropsItemQuestions = {
  onPress: () => void;
};
const ItemQuestion = (props: ItemQuestions & PropsItemQuestions) => {
  const {id, questionText, descriptionText, skipable, onPress, initialValue} =
    props;
  const {colors} = useTheme();
  return (
    <Pressable _pressed={{opacity: 0.5}} onPress={onPress}>
      {initialValue === '' || initialValue === null ? (
        <HStack
          alignItems={'center'}
          w={'full'}
          h={'16'}
          borderRadius={8}
          borderWidth={'1'}
          borderColor={colors.gray[400]}
          bgColor={colors.white}
          mt={2}>
          <Text fontSize={'xl'} color={colors.black} pl={5}>
            Question {id}
          </Text>
        </HStack>
      ) : (
        <HStack
          alignItems={'center'}
          w={'full'}
          h={'16'}
          borderRadius={8}
          borderWidth={'1'}
          borderColor={colors.gray[400]}
          bgColor={skipable ? colors.red[500] : colors.primary[600]}
          mt={2}>
          <Text fontSize={'xl'} color={colors.white} pl={5}>
            Question {id}
          </Text>
        </HStack>
      )}
    </Pressable>
  );
};
export default ItemQuestion;
