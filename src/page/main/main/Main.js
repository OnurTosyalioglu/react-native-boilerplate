import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import props from './props'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const { Navigator, Screen } = createStackNavigator()

import index from '../../../route/index'
import routes from '../../../route/routes'

const Main = (props) => {
  return (
    <NavigationContainer>
			<Navigator initialRouteName={routes.tabs}>
        {index.map((v) => (
          <Screen
            name={v.name}
            component={v.component}
            key={v.key}
            options={v.options}
          />
        ))}
      </Navigator>
    </NavigationContainer>
  )
}

Main.propTypes = props

export default Main
