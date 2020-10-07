import 'react-native'
import React from 'react'
import Messages from './Messages'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<Messages />)
})
