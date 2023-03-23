import React, {useState} from 'react';
import {VStack, FlatList, HStack} from 'native-base';
import MainLayout from '~/components/MainLayout';
import HeaderComponent from '~/components/Header';
import {MainStackScreenProps} from '~/navigation/AppNavigation';
type Props = MainStackScreenProps<'RESULT_SCREEN'>;
const ResultScreen = ({navigation}: Props) => {
  return (
    <MainLayout safeAreaBottom={0}>
      <HeaderComponent title={'Result'} />

      <HStack mb={10} justifyContent={'space-around'}></HStack>
    </MainLayout>
  );
};
export default ResultScreen;
