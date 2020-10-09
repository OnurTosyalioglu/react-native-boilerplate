import 'react-native'
import React from 'react'
import LocaleSwitcher from './LocaleSwitcher'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<LocaleSwitcher />)
})
