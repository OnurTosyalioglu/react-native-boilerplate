import React from 'react'
import {
	View,
	Text,
} from 'react-native'

import styles from './styles'
import props from './props'
import i18n from '../../../locale/i18n'

const Login = (props) => {  
	return <View>
		<Text>{i18n.t('login')}</Text>
	</View>
}

Login.propTypes = props

export default Login
