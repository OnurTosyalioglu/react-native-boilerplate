import 'react-native'
import React from 'react'
import Redirect from './Redirect'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<Redirect />)
})
