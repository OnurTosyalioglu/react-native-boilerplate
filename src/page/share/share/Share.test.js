import 'react-native'
import React from 'react'
import Share from './Share'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<Share />)
})
