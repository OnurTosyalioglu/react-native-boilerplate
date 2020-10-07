import React from 'react'
import {
	View,
} from 'react-native'

import styles from './styles'
import props from './props'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import tabIndex from '../../../route/tabIndex'

const { Navigator, Screen } = createBottomTabNavigator()

const Home = (props) => {  
	return <View>
	</View>
}

Home.propTypes = props

export default Home
