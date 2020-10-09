import Account from '../page/profile/account/Account'
import Information from '../page/profile/information/Information'

import routes from './routes'

const profileTabs = [
	{
		name: routes.information,
		component: Information,
		key: routes.information,
		options: {},
	},
	{
		name: routes.account,
		component: Account,
		key: routes.account,
		options: {},
	},
]

export default profileTabs
