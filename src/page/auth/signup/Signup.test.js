import 'react-native'
import React from 'react'
import Signup from './Signup'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<Signup />)
})
