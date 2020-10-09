import 'react-native'
import React from 'react'
import Tabs from '../Tabs'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<Tabs />)
})
