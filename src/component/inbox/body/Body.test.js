import 'react-native'
import React from 'react'
import Body from './Body'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<Body />)
})
