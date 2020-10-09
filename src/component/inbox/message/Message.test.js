import 'react-native'
import React from 'react'
import Message from './Message'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<Message />)
})
