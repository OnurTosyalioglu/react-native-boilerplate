import 'react-native'
import React from 'react'
import Notifications from './Notifications'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<Notifications />)
})
