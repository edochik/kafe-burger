import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from '../features/Cart/cartSlice'
import { selectSlice } from '../features/RadioButtons/selectSlice'

export const store = configureStore({
	reducer: {
		productsInCart: cartSlice.reducer,
		selectProduct: selectSlice.reducer,
		// historyOrder:
		// historyDoAmin:
		// user ? 
		// admin ? 
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch