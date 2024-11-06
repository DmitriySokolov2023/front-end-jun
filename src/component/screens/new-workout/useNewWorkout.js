import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import workoutService from '../../../services/workout.service'

export const useNewWorkout = () => {
	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const { mutate, error, isSuccess, isLoading } = useMutation({
		mutationKey: ['create workout'],
		mutationFn: data => workoutService.create(data),
		onSuccess: () => {
			reset()
		}
	})

	const onSubmit = data => {
		mutate({
			name: data.name,
			exerciseIds: data.exerciseIds.map(id => id.value)
		})
	}

	return useMemo(
		() => ({
			register,
			handleSubmit,
			errors,
			onSubmit,
			error,
			isSuccess,
			isLoading,
			control
		}),
		[errors, error, isSuccess, isLoading]
	)
}
