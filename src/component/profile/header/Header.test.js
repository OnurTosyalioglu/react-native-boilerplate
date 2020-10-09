import 'react-native'
import React from 'react'
import Header from './Header'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<Header />)
})
