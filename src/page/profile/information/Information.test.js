import 'react-native'
import React from 'react'
import Information from './Information'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<Information />)
})
