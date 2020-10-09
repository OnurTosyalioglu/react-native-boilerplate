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
			tabBarIcon: (props) => (<AntDesign name='home' />)
    },
  },
  {
    name: routes.search,
    component: Search,
    key: routes.search,
    options: {
      tabBarLabel: 'Search',
			tabBarIcon: (props) => (<AntDesign name='search1' />)
    },
  },
  {
    name: routes.share,
    component: Share,
    key: routes.share,
    options: {
      tabBarLabel: 'Share',
			tabBarIcon: (props) => (<AntDesign name='pluscircleo' />)
    },
  },
  {
    name: routes.inbox,
    component: Inbox,
    key: routes.inbox,
    options: {
      tabBarLabel: 'Inbox',
			tabBarIcon: (props) => (<AntDesign name='message1' />)
    },
  },
  {
    name: routes.profile,
    component: Profile,
    key: routes.profile,
    options: {
      tabBarLabel: 'Profile',
			tabBarIcon: (props) => (<AntDesign name='user' />)
    },
  },
]

export default tabIndex
