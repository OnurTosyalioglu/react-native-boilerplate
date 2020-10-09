import 'react-native'
import React from 'react'
import ImageContainer from './ImageContainer'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<ImageContainer />)
})
