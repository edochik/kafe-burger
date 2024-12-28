import { configureStore } from '@reduxjs/toolkit';
import { listenerMiddleware } from './listenerMiddleware';
import { cartSlice } from '../entities/cart/cartSlice';
import { productSlice } from '../entities/product/productSlice';
import { profileSlice } from '../entities/user/userSlice';
import { fetchUserVerificationThunk } from '../entities/user/thunks/fetchUserVerificationThunk';
import { fetchInitialProductsThunk } from '../entities/product/thunk/fetchInitialProductsThunk';
import { historyOrdersSlice } from '../pages/HistoryOrders/historyOrdersSlice';
import { categoriesSlice } from '../features/RadioButtons/categoriesSlice';

export const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
		categories: categoriesSlice.reducer,
		products: productSlice.reducer,
		profile: profileSlice.reducer,
		historyOrder: historyOrdersSlice.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

store.dispatch(fetchInitialProductsThunk());
store.dispatch(fetchUserVerificationThunk());

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
