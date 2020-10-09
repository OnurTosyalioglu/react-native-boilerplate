import 'react-native'
import React from 'react'
import MessageTile from './MessageTile'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<MessageTile />)
})
