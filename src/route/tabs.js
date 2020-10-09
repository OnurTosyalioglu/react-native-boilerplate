import Tabs from '../page/main/tabs/Tabs'
import routes from './routes'

const tabs = [
	{
		name: routes.tabs,
		key: routes.tabs,
		component: Tabs,
		options: {
			headerShown: false,
		}
	}
]

export default tabs
