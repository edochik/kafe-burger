import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserVerificationThunk } from "./thunks/fetchUserVerificationThunk";
import { InitialState, SuccessServer, User } from "./types";
import { fetchAuthorizationThunk } from "./thunks/fetchAuthorizationThunk";
import { fetchLogoutThunk } from "./thunks/fetchLogoutThunk";
import { fetchUpdateUserThunk } from "./thunks/fetchUpdateUserThunk";
import { fetchRegistrationThunk } from "./thunks/fetchRegistrationThunk";
import { fetchOrdersThunk } from "./thunks/fetchOrdersThunk";

export const initialState: InitialState = {
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
			role: ""
		},
		orders: [],
		orderDetails: []
	}
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		resetServerResponsesProfile: (state) => {
			state.errorServer = null
			state.successServer = null
		},
		updateUser: (state, action: PayloadAction<{ key: keyof User; value: string }>) => {
			const { key, value } = action.payload;
			(state.data.user[key] as string) = value;
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
				const { orderDetails, orders, user } = action.payload
				state.data = { orderDetails, orders, user }
			})
			.addCase(fetchAuthorizationThunk.rejected, (state, action) => {
				state.loading = "failed";
				state.isAuthorization = false;
				state.errorServer = action.payload ?? { status: "error", message: "fetchAuthorizationThunk error" };
			})

			.addCase(fetchUserVerificationThunk.pending, (state) => {
				state.loading = "pending";
			})
			.addCase(fetchUserVerificationThunk.fulfilled, (state, action: PayloadAction<SuccessServer>) => {
				state.loading = "succeeded";
				state.isAuthorization = true;
				const { orderDetails, orders, user } = action.payload
				state.data = { orderDetails, orders, user }
			})
			.addCase(fetchUserVerificationThunk.rejected, (state, action) => {
				const { code } = action.payload!;
				if (code === 401) {
					state.loading = "failed";
					return
				}
				state.loading = "failed";
				state.isAuthorization = false;
				state.errorServer = action.payload ?? { status: "error", message: "fetchUserVerificationThunk error" };
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
				state.errorServer = action.payload ?? { status: "error", message: "fetchUpdateUserThunk error" };
			})

			.addCase(fetchRegistrationThunk.pending, (state) => {
				state.loading = "pending";
			})
			.addCase(fetchRegistrationThunk.fulfilled, (state, action: PayloadAction<SuccessServer>) => {
				state.loading = "succeeded";
				state.successServer = action.payload
			})
			.addCase(fetchRegistrationThunk.rejected, (state, action) => {
				state.loading = "failed";
				state.errorServer = action.payload ?? { status: "error", message: "fetchRegistrationThunk error" };
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

			.addCase(fetchOrdersThunk.pending, (state) => {
				state.loading = "pending";
			})
			.addCase(fetchOrdersThunk.fulfilled, (state, action: PayloadAction<SuccessServer>) => {
				state.loading = "succeeded";
				state.data.orders = action.payload.orders
				state.data.orderDetails = action.payload.orderDetails
			})
			.addCase(fetchOrdersThunk.rejected, (state) => {
				state.loading = "failed";
			})

	}
})

export const { updateUser, resetServerResponsesProfile } = profileSlice.actions;
