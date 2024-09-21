import { createSlice } from "@reduxjs/toolkit";
export interface CartItem {
	id: number;
	nameRu: string;
	price: number;
	weight: number;
	imageUrl: string;
	count: number;
}

const initialState: CartItem[] = []

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProductCart: (state, action) => {
			if (!state.some(product => product.id === action.payload.id)) {
				state.push(action.payload)
			}
		},
	},
	// extraReducer
})

export const { addProductCart } = cartSlice.actions

