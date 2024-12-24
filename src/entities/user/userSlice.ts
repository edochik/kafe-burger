import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserVerificationThunk } from "./thunks/fetchUserVerificationThunk";
import { InitialStateUser, User } from "./types";
import { fetchAuthorizationThunk } from "./thunks/fetchAuthorizationThunk";
import { fetchLogoutThunk } from "./thunks/fetchLogoutThunk";

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

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		updateUser: (state, action: PayloadAction<{ key: keyof User; value: string }>) => {
			const { key, value } = action.payload;
			(state.data.user[key] as string) = value;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchAuthorizationThunk.pending, (state) => {
				state.loading = "pending";
			})
			.addCase(fetchAuthorizationThunk.fulfilled, (state, action: PayloadAction<User | null>) => {
				state.loading = "succeeded";
				if (action.payload === null) {
					return
				}
				state.isAuthorization = true;
				state.data.user = {
					...action.payload,
				};
			})
			.addCase(fetchAuthorizationThunk.rejected, (state) => {
				state.loading = "failed";
				state.isAuthorization = false;
			})
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
					...action.payload,
				};
			})
			.addCase(fetchUserVerificationThunk.rejected, (state) => {
				state.loading = "failed";
				state.isAuthorization = false;
			})
			.addCase(fetchLogoutThunk.pending, (state) => {
				state.loading = "pending";
			})
			.addCase(fetchLogoutThunk.fulfilled, (state) => {
				state.loading = "succeeded";
				state.isAuthorization = false;
				for (const key in state) {
					if (key === 'id') {
						state.data.user[key] = null;
					} else {
						(state.data.user[key as keyof User] as string) = '';
					}
				}
			})
			.addCase(fetchLogoutThunk.rejected, (state) => {
				state.loading = "failed";
				state.isAuthorization = false;
			})
	}
})

export const { updateUser, 
	// logoutUser 
} = profileSlice.actions;
