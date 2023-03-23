import {HStack, Pressable, Radio, Text, useTheme} from 'native-base';
import React from 'react';
import {ChooseAnswerType} from '~/type/QuestionType';
type PropsItemChooseAnswer = {
  onPress: () => void;
};
const ItemChooseAnswer = (props: PropsItemChooseAnswer & ChooseAnswerType) => {
  const {value, label, onPress} = props;
  const {colors} = useTheme();
  return (
    <Pressable _pressed={{opacity: 0.5}} onPress={onPress}>
      <HStack alignItems={'center'} w={'full'} minH={'16'} mt={2} mx={5}>
        <Radio value={value}>
          <Text fontSize={'xl'} color={colors.black} flexWrap={'wrap'}>
            {label}
          </Text>
        </Radio>
      </HStack>
    </Pressable>
  );
};
export default ItemChooseAnswer;
