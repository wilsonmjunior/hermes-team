// import * as SplashScreen from 'expo-splash-screen';
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts
} from '@expo-google-fonts/roboto';
import { View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import { Loading } from '@components/Loading';
import { Groups } from '@screens/Groups';

import { theme } from './src/theme';

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <View>
        <Groups />
      </View>
    </ThemeProvider>
  );
}
