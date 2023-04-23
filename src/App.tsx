import { Groups } from '@screens/Groups';

import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { theme } from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Groups />
      </View>
    </ThemeProvider>
  );
}
