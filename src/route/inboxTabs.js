import Favorites from '../page/inbox/favorites/Favorites'
import Notifications from '../page/inbox/notifications/Notifications'

import routes from './routes'

const inboxTabs = [
	{
		name: routes.favorites,
		component: Favorites,
		key: routes.favorites,
		options: {},
	},
	{
		name: routes.notifications,
		component: Notifications,
		key: routes.notifications,
		options: {},
	},
]

export default inboxTabs
