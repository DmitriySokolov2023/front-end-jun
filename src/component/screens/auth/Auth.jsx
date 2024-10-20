import { useState } from 'react'
import Layout from '../../layout/Layout'
import Form from '../../UI/form/Form'
import Input from '../../UI/input/Input'

const Auth = () => {
	const [type, setType] = useState('login')

	const [email, setEmail] = useState('')

	// const { mutate, isLoading } = useMutation(
	// 	['auth'],
	// 	() => authService.main(type),
	// 	{
	// 		onSuccess: data => {
	// 			alert('success')
	// 		}
	// 	}
	// )

	const handleChange = e => {
		setEmail(e.target.value)
	}
	return (
		<Layout heading='Sign in' bgImage={'/images/auth-bg.png'}>
			<div className='wrapper-inner-page'>
				<Form>
					<Input
						placeholder={'email'}
						type={'email'}
						onChange={handleChange}
						value={email}
					/>
				</Form>
				<div>{email}</div>
			</div>
		</Layout>
	)
}
export default Auth
