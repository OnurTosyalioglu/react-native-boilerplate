import 'react-native'
import React from 'react'
import Conversation from './Conversation'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<Conversation />)
})
