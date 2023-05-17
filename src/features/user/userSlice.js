import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const backendURL = 'http://127.0.0.1:8000'

export const registerUser = createAsyncThunk(
	'auth/register',
	async ({ firstname, email, password }, { rejectedValue }) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json'
				}
			}

			await axios.post(
				`${backendURL}/api/users/register`,
				{ firstname, email, password },
				config
			)
		} catch (error) {
			if (error.response && error.response.data.message) {
				return rejectedValue(error.response.data.message)
			} else {
				return rejectedValue(error.message)
			}
		}
	}
)

const initialState = {
	loading: false,
	userInfo: {},
	userToken: null,
	error: null,
	success: false
}

const userSlice = createSlice({
	name: 'User',
	initialState,
	reducers: {},
	extraReducers: {}
})

export default userSlice.reducer
