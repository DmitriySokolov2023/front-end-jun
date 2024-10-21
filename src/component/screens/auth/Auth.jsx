import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../../layout/Layout'
import Button from '../../UI/button/Button'
import Input from '../../UI/input/Input'

const Auth = () => {
	const [type, setType] = useState('login')

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {
		console.log(data)
	}
	return (
		<Layout heading='Sign in' bgImage={'/images/auth-bg.png'}>
			<div className='wrapper-inner-page'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input
						error={errors?.email?.message}
						placeholder={'Enter email'}
						type={'email'}
						register={register}
						name={'email'}
						options={{ required: 'Email is required' }}
					/>
					<Button>Lets go</Button>
				</form>
			</div>
		</Layout>
	)
}
export default Auth
