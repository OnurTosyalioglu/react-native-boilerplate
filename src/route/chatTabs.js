import Messages from '../page/inbox/messages/Messages'
import Notifications from '../page/inbox/notifications/Notifications'

import routes from './routes'

const chatTabs = [
	{
		name: routes.messages,
		component: Messages,
		key: routes.messages,
		options: {},
	},
	{
		name: routes.notifications,
		component: Notifications,
		key: routes.notifications,
		options: {},
	},
]

export default chatTabs
