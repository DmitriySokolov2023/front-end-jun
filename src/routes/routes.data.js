import Auth from '../component/screens/auth/Auth'
import Home from '../component/screens/home/Home'
import NewWorkout from '../component/screens/new-workout/NewWorkout'
import Profile from '../component/screens/profile/Profile'
export const routes = [
	{
		path: '/',
		component: Home,
		auth: false
	},
	{
		path: '/auth',
		component: Auth,
		auth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		auth: true
	},
	{
		path: '/profile',
		component: Profile,
		auth: true
	}
	/*{
		path: '/new-exercise',

		component: NewExercise,
		auth: true,
	},

	{
		path: '/workout/:id',

		component: SingleWorkout,
		auth: true,
	},
	{
		path: '/workouts',

		component: ListWorkouts,
		auth: true,
	},
	{
		path: '/exercise/:id',

		component: SingleExercise,
		auth: true,
	}, */
]
