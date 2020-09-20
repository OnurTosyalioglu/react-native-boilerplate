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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'

import {
	ThemeProvider,
} from 'react-native-elements'

import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import theme from './src/style/theme'

import index from './src/route/index'
const { Navigator, Screen } = createStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
				<NavigationContainer>
					<Navigator 
						initialRouteName={index.initialRouteName}
						headerMode={index.headerMode}>
						{
							index.map((v) => <Screen 
								name={v.name} 
								component={v.component} 
								key={v.key}
								options={v.options}/>
							)
						}
					</Navigator>
				</NavigationContainer>
			</ThemeProvider>
		</Provider>
  )
}

export default App
