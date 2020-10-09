import React from 'react'
import {
	View,
	Text,
} from 'react-native'

import styles from './styles'
import props from './props'

import i18n from '../../../locale/i18n'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const { Navigator, Screen } = createBottomTabNavigator()

import Home from '../../home/home/Home'
import Search from '../../search/search/Search'

import tabIndex from '../../../route/tabIndex'

const Tabs = (props) => {  
	return <Navigator>
		{
			tabIndex.map((v) => {  
				return <Screen 
						name={v.name}
						key={v.key}
						component={v.component}
						options={v.options}
					/>
			})
		}
	</Navigator>
}

Tabs.propTypes = props

export default Tabs
