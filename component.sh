comp=$1

echo "import React from 'react'
import {
	View,
	Text,
} from 'react-native'
import styles from './styles'
import props from './props'

const $1 = (props) => {  
	return <View>
	</View>
}

$1.propTypes = props

export default $1" > ./$1/$1.js

echo "import React from 'react'
import $1 from './$1'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<$1 />)
})" > ./$1/$1.test.js

echo "import propTypes from 'prop-types'

export default {

}
" > ./$1/props.js

echo "import {
	StyleSheet,
} from 'react-native'

const styles = {

}

export default StyleSheet.create(styles)
" > ./$1/styles.js
