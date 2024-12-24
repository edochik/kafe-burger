import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserVerificationThunk } from "./thunks/fetchUserVerificationThunk";
import { InitialStateUser, ServerSuccess, User } from "./types";
import { fetchAuthorizationThunk } from "./thunks/fetchAuthorizationThunk";
import { fetchLogoutThunk } from "./thunks/fetchLogoutThunk";
import { IResponseServer } from "../../shared/domain/responseServer.js";

export const initialState: InitialStateUser = {
	loading: "idle",
	error: null,
	message: null,
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
		resetError: (state) => {
			state.error = null
		},
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
			.addCase(fetchAuthorizationThunk.fulfilled, (state, action: PayloadAction<ServerSuccess>) => {
				console.log('succeeded');
				state.loading = "succeeded";
				state.isAuthorization = true;
				state.data.user = { ...action.payload.user };
			})
			.addCase(fetchAuthorizationThunk.rejected, (state, action) => {
				console.log('failed');
				state.loading = "failed";
				state.isAuthorization = false;
				state.error = action.payload ?? { status: "error", message: "Unknown error" };
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

export const { updateUser, resetError } = profileSlice.actions;
