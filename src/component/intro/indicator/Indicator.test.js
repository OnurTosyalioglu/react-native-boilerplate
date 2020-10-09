import 'react-native'
import React from 'react'
import Indicator from './Indicator'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<Indicator />)
})
