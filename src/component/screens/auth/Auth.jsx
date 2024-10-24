import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../../../hooks/useAuth'
import authService from '../../../services/auth.service'
import Layout from '../../layout/Layout'
import Button from '../../UI/button/Button'
import Input from '../../UI/input/Input'
import Loader from '../../UI/Loader'
import styles from './Auth.module.scss'

const Auth = () => {
	const [type, setType] = useState('login')
	const [isLoading, setIsLoading] = useState(true)
	const isLoadingAuth = true

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const {} = useMutation(['auth'], () => authService.main(type), {
		onSuccess: data => {
			alert('done')
		}
	})

	const onSubmit = data => {
		console.log(data)
	}
	return (
		<>
			<Layout heading='Sign in' bgImage={'/images/auth-bg.png'} />
			<div className='wrapper-inner-page'>
				{(isLoading || isLoadingAuth) && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Input
						error={errors?.email?.message}
						placeholder={'Enter email'}
						type={'email'}
						register={register}
						name={'email'}
						options={{ required: 'Email is required' }}
					/>
					<Input
						error={errors?.password?.message}
						placeholder={'Enter password'}
						type={'password'}
						register={register}
						name={'password'}
						options={{ required: 'Password is required' }}
					/>
					<div className={styles.wrapperButtons}>
						<Button
							onClick={() => {
								useAuth(true)
								setType('auth')
							}}
						>
							Sign in
						</Button>
						<Button onClick={() => setType('register')}>Sign up</Button>
					</div>
				</form>
			</div>
		</>
	)
}
export default Auth
