import 'react-native'
import React from 'react'
import ForgotPassword from './ForgotPassword'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<ForgotPassword />)
})
