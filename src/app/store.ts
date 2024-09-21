import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from '../features/Cart/cartSlice'

export const store = configureStore({
	reducer: {
		productsInCart: cartSlice.reducer
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch