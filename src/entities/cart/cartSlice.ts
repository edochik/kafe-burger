import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchOrderThunk } from "./thunk/fetchOrderThunk";
import { Cart, InitialState } from "./types";
import { SuccessServer } from "../profile/types.js";

const initialState: InitialState = {
	loading: "idle",
	errorServer: null,
	successServer: null,
	isAppLoaded: false,
	cart: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProductCart: (state, action: PayloadAction<Cart>) => {
			if (!state.cart.some(product => product.id === action.payload.id)) {
				state.cart.push(action.payload)
			}
		},
		incrementProduct: (state, action: PayloadAction<number>) => {
			state.cart.forEach(product => {
				if (product.id === action.payload) {
					product.count += 1
				}
			})
		},
		setCartFromLocalStorage: (state, action: PayloadAction<Cart[]>) => {
			state.isAppLoaded = true
			state.cart = action.payload
		},
		decrementProduct: (state, action: PayloadAction<number>) => {
			const product = state.cart.find(product => product.id === action.payload);
			if (product) {
				if (product.count < 2) {
					state.cart = state.cart.filter(product => product.id !== action.payload);
				} else {
					product.count -= 1
				}
			}
		},
		updateSuccessServer: (state) => {
			state.successServer = null
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchOrderThunk.pending, (state) => {
				state.loading = "pending";
			})
			.addCase(fetchOrderThunk.fulfilled, (state, action: PayloadAction<SuccessServer>) => {
				state.loading = "succeeded";
				state.cart.length = 0;
				state.successServer = action.payload
			})
			.addCase(fetchOrderThunk.rejected, (state, action) => {
				state.loading = "failed";
				state.errorServer = action.payload ?? { status: "error", message: "Unknown error" };
			})
	}
})


export const {
	addProductCart,
	incrementProduct,
	decrementProduct,
	setCartFromLocalStorage,
	updateSuccessServer } = cartSlice.actions

