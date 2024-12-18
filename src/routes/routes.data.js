import Auth from '../component/screens/auth/Auth'
import ExerciseLog from '../component/screens/exercise-log/ExerciseLog'
import Home from '../component/screens/home/Home'
import NewExercise from '../component/screens/new-exercise/NewExercise'
import NewWorkout from '../component/screens/new-workout/NewWorkout'
import Profile from '../component/screens/profile/Profile'
import Workout from '../component/screens/workouts/detail/Workout'
import ListWorkouts from '../component/screens/workouts/list/ListWorkout'
export const routes = [
	{
		path: '/',
		component: Home,
		auth: true
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
	},
	{
		path: '/new-exercise',

		component: NewExercise,
		auth: true
	},
	{
		path: '/workouts',

		component: ListWorkouts,
		auth: true
	},

	{
		path: '/workout/:id',

		component: Workout,
		auth: true
	},

	{
		path: '/exercise/:id',

		component: ExerciseLog,
		auth: true
	}
]
