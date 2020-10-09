import Login from '../page/auth/login/Login'
import Signup from '../page/auth/signup/Signup'
import Recover from '../page/auth/recover/Recover'

import routes from './routes'

const auth = [
	{
		name: routes.login,
		component: Login,
		key: routes.login,
		options: {},
	},
	{
		name: routes.signup,
		component: Signup,
		key: routes.signup,
		options: {},
	},
	{
		name: routes.recover,
		component: Recover,
		key: routes.recover,
		options: {},
	},
]

export default auth
