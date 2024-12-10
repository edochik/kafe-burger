import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserVerificationThunk } from "./fetchUserVerificationThunk";

export interface User {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	address: string;
	floor: string;
	apartment: string;
	login: string;
	isAuthorization: boolean;
}

const initialState: User = {
	id: '',
	firstName: '',
	lastName: '',
	email: '',
	phone: '',
	address: '',
	floor: '',
	apartment: '',
	login: '',
	isAuthorization: false,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		registerUser: (state, action) => {
			return {
				...action.payload, isAuthorization: true
			}
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUserVerificationThunk.fulfilled, (state, action) => {
				if (action.payload.user === undefined) {
					return
				}
				const { user } = action.payload;
				return {
					...user, isAuthorization: true
				};
			})
			.addCase(fetchUserVerificationThunk.rejected, (state, action) => {
				state.isAuthorization = false;
			})
	}
})

export const { registerUser } = userSlice.actions;
