import 'react-native'
import React from 'react'
import Info from './Info'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<Info />)
})
