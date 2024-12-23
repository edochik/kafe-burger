import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserVerificationThunk } from "./thunks/fetchUserVerificationThunk";
import { InitialStateUser, User } from "./types";

export const initialState: InitialStateUser = {
	loading: "idle",
	error: null,
	isAuthorization: false,
	data: {
		user: {
			id: null,
			firstName: "",
			lastName: "",
			email: "",
			phone: "",
			address: "",
			floor: "",
			apartment: "",
			login: "",
		},
		// orders: [],
		// orderDetails: []
	}
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
			(state.data.user[key] as string) = value;
		},
		logoutUser: (state) => {
			state.isAuthorization = false;
			for (const key in state) {
				if (key === 'id') {
					state.data.user[key] = null;
				} else {
					(state.data.user[key as keyof User] as string) = '';
				}
			}
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchUserVerificationThunk.pending, (state) => {
				state.loading = "pending";
			})
			.addCase(fetchUserVerificationThunk.fulfilled, (state, action: PayloadAction<User | null>) => {
				state.loading = "succeeded";
				if (action.payload === null) {
					return
				}
				state.isAuthorization = true;
				state.data.user = {
					...action.payload
				};
			})
			.addCase(fetchUserVerificationThunk.rejected, (state, action) => {
				state.loading = "failed";
				state.isAuthorization = false;
			})
	}
})

export const { registerUser, updateUser, logoutUser } = userSlice.actions;
