import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'background',
        color: 'text.dark'
      }
    }
  },
  colors: {
    background: '#F5F8FA',
    highlight: '#FFBA08',
    text: {
      dark: '#47585B',
      light: '#F5F8FA'
    },
    info: {
      dark: '#999999',
      light: '#DADADA'
    }
  }
});
