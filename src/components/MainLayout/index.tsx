import {useTheme, VStack} from 'native-base';
import {IVStackProps} from 'native-base/lib/typescript/components/primitives/Stack/VStack';
import React, {PropsWithChildren} from 'react';

const MainLayout: React.FC<PropsWithChildren<IVStackProps>> = props => {
  const {children, ...rest} = props;
  const {colors} = useTheme();

  return (
    <VStack safeArea flex={1} bg={colors.white} {...rest}>
      {children}
    </VStack>
  );
};

export default MainLayout;
