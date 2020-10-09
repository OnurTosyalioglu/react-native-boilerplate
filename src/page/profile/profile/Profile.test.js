import 'react-native'
import React from 'react'
import Profile from './Profile'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<Profile />)
})
