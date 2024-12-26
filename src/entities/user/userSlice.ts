import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserVerificationThunk } from "./thunks/fetchUserVerificationThunk";
import { InitialStateUser, SuccessServer, User } from "./types";
import { fetchAuthorizationThunk } from "./thunks/fetchAuthorizationThunk";
import { fetchLogoutThunk } from "./thunks/fetchLogoutThunk";
import { fetchUpdateUserThunk } from "./thunks/fetchUpdateUserThunk";

export const initialState: InitialStateUser = {
	loading: "idle",
	errorServer: null,
	successServer: null,
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
			state.errorServer = null
		},
		resetMessage: (state) => {
			state.successServer = null
		},
		updateUser: (state, action: PayloadAction<{ key: keyof User; value: string }>) => {
			const { key, value } = action.payload;
			(state.data.user[key] as string) = value;
		},
		userClear: (state) => {
			for (const key in state.data.user) {
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
			.addCase(fetchAuthorizationThunk.pending, (state) => {
				state.loading = "pending";
			})
			.addCase(fetchAuthorizationThunk.fulfilled, (state, action: PayloadAction<SuccessServer>) => {
				state.loading = "succeeded";
				state.isAuthorization = true;
				state.data.user = { ...action.payload.user };
			})
			.addCase(fetchAuthorizationThunk.rejected, (state, action) => {
				state.loading = "failed";
				state.isAuthorization = false;
				state.errorServer = action.payload ?? { status: "error", message: "Unknown error" };
			})

			.addCase(fetchUserVerificationThunk.pending, (state) => {
				state.loading = "pending";
			})
			.addCase(fetchUserVerificationThunk.fulfilled, (state, action: PayloadAction<SuccessServer>) => {
				state.loading = "succeeded";
				state.isAuthorization = true;
				state.data.user = { ...action.payload.user };
			})
			.addCase(fetchUserVerificationThunk.rejected, (state, action) => {
				state.loading = "failed";
				state.isAuthorization = false;
				state.errorServer = action.payload ?? { status: "error", message: "Unknown error" };
			})

			.addCase(fetchLogoutThunk.pending, (state) => {
				state.loading = "pending";
			})
			.addCase(fetchLogoutThunk.fulfilled, (state, action: PayloadAction<SuccessServer>) => {
				state.loading = "succeeded";
				state.isAuthorization = false;
				for (const key in state.data.user) {
					if (key === 'id') {
						state.data.user[key] = null;
					} else {
						(state.data.user[key as keyof User] as string) = '';
					}
				}
			})
			.addCase(fetchLogoutThunk.rejected, (state) => {
				state.loading = "failed";
			})

			.addCase(fetchUpdateUserThunk.pending, (state) => {
				state.loading = "pending";
			})
			.addCase(fetchUpdateUserThunk.fulfilled, (state, action: PayloadAction<SuccessServer>) => {
				state.loading = "succeeded";
				state.isAuthorization = true;
				state.successServer = action.payload
			})
			.addCase(fetchUpdateUserThunk.rejected, (state, action) => {
				state.loading = "failed";
				state.isAuthorization = false;
				state.errorServer = action.payload ?? { status: "error", message: "Unknown error" };
			})
	}
})

export const { updateUser, resetError, resetMessage, userClear } = profileSlice.actions;
