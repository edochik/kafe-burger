import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface ProductCartProps {
	id: number;
	nameRu: string;
	price: number;
	weight: number;
	imageUrl: string;
	count: number;
}

const initialState: ProductCartProps[] = []

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProductCart: (state, action: PayloadAction<ProductCartProps>) => {
			if (!state.some(product => product.id === action.payload.id)) {
				state.push(action.payload)
			}
		},
		incrementProduct: (state, action: PayloadAction<number>) => {
			state.forEach(product => {
				if (product.id === action.payload) {
					product.count += 1
				}
			})
		},
		decrementProduct: (state, action: PayloadAction<number>) => {
			const product = state.find(product => product.id === action.payload);
			if (product) {
				if (product.count < 2) {
					return state.filter(product => product.id !== action.payload)
				} else {
					product.count -= 1
				}
			}
		}
	},
	// extraReducer
})

export const { addProductCart, incrementProduct, decrementProduct } = cartSlice.actions

