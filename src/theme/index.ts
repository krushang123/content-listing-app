import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react';
import { type Dict } from '@chakra-ui/utils';

import { styles } from './style';

const customTheme: Dict = extendTheme(
  {
    styles,
    fonts: {
      heading: 'var(--font-titillium-web)',
      body: 'var(--font-titillium-web)',
    },
  },
  {},
  withDefaultColorScheme({
    colorScheme: 'gray',
  })
);

export default customTheme;
