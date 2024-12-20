import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserVerificationThunk } from "./fetchUserVerificationThunk";

export interface User {
	id: number | null;
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

export const initialState: User = {
	id: null,
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
		},
		updateUser: (state, action: PayloadAction<{ key: keyof User; value: string }>) => {
			const { key, value } = action.payload;
			(state[key] as string) = value;
		},
		logoutUser: (state) => {
			for (const key in state) {
				if (key === 'isAuthorization') {
					state[key] = false;
				} else if (key === 'id') {
					state[key] = null;
				} else {
					(state[key as keyof User] as string) = '';
				}
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

export const { registerUser, updateUser, logoutUser } = userSlice.actions;
