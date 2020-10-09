import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'

import { ThemeProvider } from 'react-native-elements'
import theme from './src/style/theme'

import store from './src/redux/store/index'
import { Provider } from 'react-redux'

import Main from './src/page/main/main/Main'

const App = () => {
  return (
    <Provider store={store}>
			<ThemeProvider theme={theme}>
				<Main />
			</ThemeProvider>
    </Provider>
  )
}

export default App
