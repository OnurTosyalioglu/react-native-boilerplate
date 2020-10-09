import 'react-native'
import React from 'react'
import CatchWord from './CatchWord'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<CatchWord />)
})
