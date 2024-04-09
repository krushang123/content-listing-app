import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import { type Dict } from '@chakra-ui/utils';

import { styles } from './style';

const customTheme: Dict = extendTheme(
  {
    styles,
  },
  {},
  withDefaultColorScheme({
    colorScheme: 'primary',
  })
);

export default customTheme;
