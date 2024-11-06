import { useQuery } from '@tanstack/react-query'
import exerciseService from '../../../services/exercise.service'

export const useListExercise = () =>
	useQuery({
		queryKey: ['exercise list'],
		queryFn: () => exerciseService.getAll(),
		select: data => data.data
	})
