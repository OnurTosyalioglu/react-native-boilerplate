import 'react-native'
import React from 'react'
import IntroWord from './IntroWord'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<IntroWord />)
})
