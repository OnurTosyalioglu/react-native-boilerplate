import 'react-native'
import React from 'react'
import Favorites from './Favorites'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<Favorites />)
})
