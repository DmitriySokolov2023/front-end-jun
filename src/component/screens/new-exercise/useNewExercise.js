import { useMutation } from '@tanstack/react-query'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import exerciseService from '../../../services/exercise.service'

export const useNewExercise = () => {
	const { mutate, isSuccess, error, isLoading } = useMutation({
		mutationKey: ['create exercise'],
		mutationFn: data => exerciseService.createExercise(data),
		onSuccess: () => {
			reset()
		}
	})

	const {
		register,
		handleSubmit,
		reset,
		control,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})
	const onSubmit = data => {
		mutate(data)
	}

	return useMemo(
		() => ({
			isLoading,
			isSuccess,
			error,
			errors,
			onSubmit,
			register,
			handleSubmit,
			control
		}),
		[onSubmit]
	)
}
