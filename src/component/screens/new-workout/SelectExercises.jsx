import { Controller } from 'react-hook-form'
import ReactSelect from 'react-select'
import { useListExercise } from './useListExercise'

const SelectExercises = ({ control }) => {
	const { data = [] } = useListExercise()

	return (
		<Controller
			name='exerciseIds'
			control={control}
			render={({ field: { value, onChange } }) => (
				<div>
					<ReactSelect
						classNamePrefix='select2-selection'
						placeholder='Exercise...'
						title='Exercise'
						options={data?.map(exercise => ({
							value: exercise.id,
							label: exercise.name
						}))}
						value={value}
						onChange={onChange}
						isMulti
					/>
				</div>
			)}
		/>
	)
}
export default SelectExercises
