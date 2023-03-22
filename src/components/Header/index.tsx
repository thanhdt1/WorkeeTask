import {useNavigation} from '@react-navigation/native';
import {
  ChevronLeftIcon,
  HStack,
  ITextProps,
  Pressable,
  Text,
  useTheme,
  VStack,
} from 'native-base';
import {IHStackProps} from 'native-base/lib/typescript/components/primitives/Stack/HStack';
import {IColors} from 'native-base/lib/typescript/theme/base/colors';
import React, {useRef} from 'react';
import {Animated} from 'react-native';

type Props = {
  title: string;
  titleStyle: ITextProps;
  hasBackButton: Boolean;
  backIconColor: IColors;
  customHandleBack: () => void;
  headerStyle: IHStackProps;
  backgroundColor: IColors;
  saveButton: Boolean;
  handleSave: () => void;
  hasRightIcon: Boolean;
  customRightIcon: () => void;
  opacityHeader: any;
};

const HeaderComponent = ({
  title,
  titleStyle,
  hasBackButton = true,
  customHandleBack,
  headerStyle,
  backgroundColor,
  saveButton,
  handleSave,
  hasRightIcon,
  customRightIcon,
  opacityHeader,
}: Partial<Props>) => {
  const navigation = useNavigation();
  const {colors} = useTheme();
  const containerRef = useRef(0);

  const getRightIcon = () => {
    if (customRightIcon) {
      return customRightIcon?.();
    }
    if (saveButton) {
      return (
        <Pressable
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          mr="4"
          bg={backgroundColor}
          py={'2'}
          px="2"
          onPress={handleSave}
          _pressed={{bg: 'dark.500'}}
          borderRadius="8">
          <Text bold color={colors.primary[600]} fontSize={16}>
            Save
          </Text>
        </Pressable>
      );
    }
    return (
      <Pressable
        hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
        mr="6"
        _pressed={{opacity: 0.8}}></Pressable>
    );
  };

  return (
    <>
      {opacityHeader ? (
        <Animated.View
          style={{
            position: 'absolute',
            top: 0,
            opacity: opacityHeader,
            height: containerRef.current,
            width: '100%',
            backgroundColor: 'black',
            zIndex: 1,
          }}
        />
      ) : null}
      <HStack
        onLayout={e => (containerRef.current = e.nativeEvent.layout.height)}
        justifyContent={'center'}
        alignItems="center"
        minH={'50px'}
        bg={backgroundColor}
        {...headerStyle}>
        {hasBackButton && (
          <Pressable
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            bg={backgroundColor}
            px={'2'}
            py={'2'}
            onPress={
              customHandleBack ? customHandleBack : () => navigation.goBack()
            }
            _pressed={{opacity: 0.5}}
            borderRadius="4">
            <ChevronLeftIcon size={'22'} />
          </Pressable>
        )}
        <VStack flex="1" alignItems="center">
          {title && title.length ? (
            <Text
              color={colors.black}
              fontSize={22}
              fontWeight="500"
              {...titleStyle}>
              {title}
            </Text>
          ) : null}
        </VStack>
        {hasRightIcon ? getRightIcon() : <VStack w="8" />}
      </HStack>
    </>
  );
};

export default HeaderComponent;
