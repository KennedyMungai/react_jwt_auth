import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../features/user/userSlice'

const LoginScreen = () => {
	const { register, handleSubmit } = useForm()
	const dispatch = useDispatch()
	const { loading, error } = useSelector((state) => state.users)

	const submitForm = (data) => {
		console.log(data)
		dispatch(loginUser(data))
	}

	return (
		<form onSubmit={handleSubmit(submitForm)}>
			<div className='form-group'>
				<label htmlFor='email'>Email</label>
				<input
					type='email'
					className='form-input'
					{...register('email')}
					required
				/>
			</div>
			<div className='form-group'>
				<label htmlFor='password'>Password</label>
				<input
					type='password'
					className='form-input'
					{...register('password')}
					required
				/>
			</div>
			<button type='submit' className='button'>
				Login
			</button>
		</form>
	)
}

export default LoginScreen
