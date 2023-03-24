import {HStack, Pressable, Text, useTheme} from 'native-base';
import React from 'react';
import {ItemQuestions} from '~/type/QuestionType';
type PropsItemQuestions = {
  onPress: () => void;
};
const ItemResult = (props: ItemQuestions & PropsItemQuestions) => {
  const {id, onPress, initialValue} = props;
  const {colors} = useTheme();
  return (
    <Pressable _pressed={{opacity: 0.5}} onPress={onPress}>
      <HStack
        alignItems={'center'}
        w={'full'}
        h={'16'}
        borderRadius={8}
        borderWidth={'1'}
        borderColor={colors.gray[400]}
        bgColor={initialValue ? colors.primary[600] : colors.red[500]}
        mt={2}>
        <Text fontSize={'xl'} color={colors.white} pl={5}>
          Question {id}:
        </Text>
        <Text fontSize={'xl'} color={colors.white} pl={5}>
          {initialValue}
        </Text>
      </HStack>
    </Pressable>
  );
};
export default ItemResult;
