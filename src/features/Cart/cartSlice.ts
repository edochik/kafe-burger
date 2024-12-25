import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface ICart {
	id: number;
	nameRu: string;
	price: number;
	weight: number;
	imageUrl: string;
	count: number;
}

const extractCartLocalStorage = () => {
	const data = localStorage.getItem('cartYourMeal');
	try {
		if (data === null) {
			return []
		}
		const cart: ICart[] = JSON.parse(data);
		return cart
	} catch (error) {
		return []
	}
}

const initialState: ICart[] = extractCartLocalStorage()

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProductCart: (state, action: PayloadAction<ICart>) => {
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
		clearCart: (state) => {
			state.length = 0;
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

export const { addProductCart, incrementProduct, decrementProduct, clearCart } = cartSlice.actions

