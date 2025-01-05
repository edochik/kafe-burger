import { configureStore } from '@reduxjs/toolkit';
import { listenerMiddleware } from './listenerMiddleware';
import { cartSlice } from '../entities/cart/cartSlice';
import { productSlice } from '../entities/product/productSlice';
import { fetchInitialProductsThunk } from '../entities/product/thunk/fetchInitialProductsThunk';
// import { historyOrdersSlice } from '../pages/HistoryOrders/historyOrdersSlice';
import { categoriesSlice } from '../entities/categories/categoriesSlice';
import { fetchUserVerificationThunk } from '../entities/profile/thunks/fetchUserVerificationThunk';
import { profileSlice } from '../entities/profile/userSlice';

export const store = configureStore({
	reducer: {
		products: productSlice.reducer,
		cart: cartSlice.reducer,
		categories: categoriesSlice.reducer,
		profile: profileSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

store.dispatch(fetchInitialProductsThunk());
store.dispatch(fetchUserVerificationThunk());

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
