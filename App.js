import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native'
import store from './src/redux/store/index'
import { Provider } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import 'react-native-gesture-handler'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'
import Main from './src/page/home/main/Main'

const Stack = createStackNavigator()

// refactor & injectible router
// theme wrapper
const App = () => {
  return (
    <Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator>
				</Stack.Navigator>
			</NavigationContainer>
    </Provider>
  )
}

export default App
