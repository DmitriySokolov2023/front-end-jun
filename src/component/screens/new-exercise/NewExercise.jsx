import cn from 'clsx'
import { Controller } from 'react-hook-form'
import Layout from '../../layout/Layout'
import Alert from '../../UI/alert/Alert'
import Button from '../../UI/button/Button'
import Input from '../../UI/input/Input'
import { getIconPath } from './icon-path.util'
import styles from './NewExercise.module.scss'
import { useNewExercise } from './useNewExercise'

const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']
const NewExercise = () => {
	const {
		isLoading,
		isSuccess,
		error,
		errors,
		onSubmit,
		register,
		handleSubmit,
		control
	} = useNewExercise()
	return (
		<>
			<Layout
				heading='Create new exercise'
				bgImage={'./images/new-exercise-bg.jpg'}
				backLink='/new-workout'
			></Layout>
			<div className={'wrapper-inner-page'}>
				{error && <Alert type='error' text={error} />}
				{isSuccess && <Alert text='Exercise created' />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input
						error={errors?.name?.message}
						placeholder={'Enter name exercise'}
						type={'text'}
						register={register}
						name={'name'}
						options={{ required: 'Name is required' }}
					/>
					<Input
						error={errors?.times?.message}
						placeholder={'Enter times by exercise'}
						type={'text'}
						register={register}
						name={'times'}
						options={{
							valueAsNumber: true,
							validate: value => value > 0 || 'Times must be number',
							required: 'Times is required'
						}}
					/>
					<Controller
						name='iconPath'
						control={control}
						render={({ field: { value, onChange } }) => (
							<div className={styles.images}>
								{data.map(name => (
									<img
										key={`ex img ${name}`}
										src={`${import.meta.env.VITE_SERVER_URL}${getIconPath(name)}`}
										alt={name}
										className={cn({
											[styles.active]: value === getIconPath(name)
										})}
										onClick={() => onChange(getIconPath(name))}
										draggable={false}
										height='45'
									/>
								))}
							</div>
						)}
					/>
					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}
					<Button onClick={() => {}}>Create</Button>
				</form>
			</div>
		</>
	)
}
export default NewExercise
