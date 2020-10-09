import 'react-native'
import React from 'react'
import FavoritesTile from './FavoritesTile'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<FavoritesTile />)
})
