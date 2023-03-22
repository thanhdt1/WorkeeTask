import React from 'react';
import {VStack, Text, Button, ChevronRightIcon, useTheme} from 'native-base';
import MainLayout from '~/components/MainLayout';
import * as ScreenName from '~/constants/ScreenName';
import {MainStackScreenProps} from '~/navigation/AppNavigation';
type Props = MainStackScreenProps<'HOME_SCREEN'>;

const HomeScreen = ({navigation}: Props) => {
  const {colors} = useTheme();
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
