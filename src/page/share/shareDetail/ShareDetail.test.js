import 'react-native'
import React from 'react'
import ShareDetail from './ShareDetail'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<ShareDetail />)
})
