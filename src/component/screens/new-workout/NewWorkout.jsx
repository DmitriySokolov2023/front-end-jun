import { Link } from 'react-router-dom'
import Layout from '../../layout/Layout'
import Alert from '../../UI/alert/Alert'
import Button from '../../UI/button/Button'
import Input from '../../UI/input/Input'
import Loader from '../../UI/Loader'
import SelectExercises from './SelectExercises'
import { useNewWorkout } from './useNewWorkout'

const NewWorkout = () => {
	const {
		control,
		error,
		errors,
		handleSubmit,
		isLoading,
		isSuccess,
		onSubmit,
		register
	} = useNewWorkout()

	return (
		<div>
			<Layout
				heading='new workout'
				bgImage={'/images/new-workout-bg.jpg'}
			></Layout>
			<div className='wrapper-inner-page'>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Workout created' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input
						error={errors?.name?.message}
						placeholder={'Enter name workout'}
						type={'text'}
						register={register}
						name={'name'}
						options={{ required: 'Name is required' }}
					/>
					<Link className='dark-link' to={'/new-exercise'}>
						Add new exercise
					</Link>
					<SelectExercises control={control} />
					<Button onClick={() => {}}>Create</Button>
				</form>
			</div>
		</div>
	)
}
export default NewWorkout
