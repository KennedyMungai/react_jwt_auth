import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

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
