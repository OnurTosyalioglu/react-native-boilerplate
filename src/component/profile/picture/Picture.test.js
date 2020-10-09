import 'react-native'
import React from 'react'
import Picture from './Picture'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<Picture />)
})
