import 'react-native'
import React from 'react'
import Chat from './Chat'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<Chat />)
})
