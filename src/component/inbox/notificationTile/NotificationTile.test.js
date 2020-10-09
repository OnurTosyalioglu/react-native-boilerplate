import 'react-native'
import React from 'react'
import NotificationTile from './NotificationTile'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<NotificationTile />)
})
