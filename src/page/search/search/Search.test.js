import 'react-native'
import React from 'react'
import Search from './Search'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<Search />)
})
