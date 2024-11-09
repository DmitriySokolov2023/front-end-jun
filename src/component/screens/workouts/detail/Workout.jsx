import { useQuery } from '@tanstack/react-query'
import React, { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import workoutLogService from '../../../../services/log/workout-log.service'
import Loader from '../../../UI/Loader'
import ExerciseItem from './ExerciseItem'
import HeaderWorkout from './HeaderWorkout'
import styles from './Workout.module.scss'
const Workout = () => {
	const { id } = useParams()
	const { data, isSuccess, isLoading } = useQuery({
		queryKey: ['get workout log', id],
		queryFn: () => workoutLogService.getById(id),
		select: ({ data }) => data
	})
	console.log(data?.exerciseLogs)
	return (
		<>
			<HeaderWorkout workoutLog={data} isSuccess={isSuccess} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}>
					{/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
				</div>
				{isLoading ? (
					<Loader />
				) : (
					<div className={styles.wrapper}>
						{data?.exerciseLogs?.map((exerciseLog, index) => (
							<Fragment key={exerciseLog.id}>
								<ExerciseItem exerciseLog={exerciseLog} />
								{index !== data.exerciseLogs.length - 1 && (
									<div className={styles.line} />
								)}
							</Fragment>
						))}
					</div>
				)}
			</div>
		</>
	)
}
export default Workout
