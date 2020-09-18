import 'react-native'
import React from 'react'
import Login from './Login'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<Login />)
})
