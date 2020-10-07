import React from 'react'

import Home from '../page/home/home/Home'
import Search from '../page/search/search/Search'
import Share from '../page/share/share/Share'
import Inbox from '../page/inbox/chat/Chat'
import Profile from '../page/profile/profile/Profile'
import AntDesign from 'react-native-vector-icons/AntDesign'

import routes from './routes'

const tabIndex = [
  {
    name: routes.home,
    component: Home,
    key: routes.home,
    options: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <AntDesign
          name='home'
          color={color}
          size={size}
        />
      ),
    },
  },
  {
    name: routes.search,
    component: Search,
    key: routes.search,
    options: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ color, size }) => (
        <AntDesign
          name='search1'
          color={color}
          size={size}
        />
      ),
    },
  },
  {
    name: routes.share,
    component: Share,
    key: routes.share,
    options: {
      tabBarLabel: 'Share',
      tabBarIcon: ({ color, size }) => (
        <AntDesign
          name='pluscircleo'
          color={color}
          size={size}
        />
      ),
    },
  },
  {
    name: routes.inbox,
    component: Inbox,
    key: routes.inbox,
    options: {
      tabBarLabel: 'Inbox',
      tabBarIcon: ({ color, size }) => (
        <AntDesign
          name='message1'
          color={color}
          size={size}
        />
      ),
    },
  },
  {
    name: routes.profile,
    component: Profile,
    key: routes.profile,
    options: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ color, size }) => (
        <AntDesign
          name='user'
          color={color}
          size={size}
        />
      ),
    },
  },
]

export default tabIndex
