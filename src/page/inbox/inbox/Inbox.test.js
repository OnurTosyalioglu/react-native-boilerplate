import 'react-native'
import React from 'react'
import Inbox from './Inbox'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<Inbox />)
})
