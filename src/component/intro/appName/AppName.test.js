import 'react-native'
import React from 'react'
import AppName from './AppName'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<AppName />)
})
