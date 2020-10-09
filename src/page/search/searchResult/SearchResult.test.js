import 'react-native'
import React from 'react'
import SearchResult from './SearchResult'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<SearchResult />)
})
