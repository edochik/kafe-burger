import { configureStore } from '@reduxjs/toolkit';
import { listenerMiddleware } from './listenerMiddleware';
import { cartSlice } from '../features/Cart/cartSlice';
import { selectSlice } from '../features/RadioButtons/selectSlice';
import { fetchInitialProductThunk } from '../features/ProductList/fetchInitialProductThunk';
import { productSlice } from '../features/ProductList/productSlice';
import { userSlice } from '../entities/user/userSlice';
import { fetchUserVerificationThunk } from '../entities/user/fetchUserVerificationThunk';

export const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
		selectProduct: selectSlice.reducer,
		products: productSlice.reducer,
		user: userSlice.reducer,
		// historyOrder:
		// historyDoAmin:
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().prepend(listenerMiddleware.middleware),
})
store.dispatch(fetchInitialProductThunk());
store.dispatch(fetchUserVerificationThunk());

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// если user не вошел
// 1. он может складывать и данные будут сохраняться в localStorage, это надо делать через middleware.
// 2. он может сделать заказ по этим данным, и этот заказ должен уйти на сервер, чтобы его обработать


// Если он зарегистрируется, то данные из localStorage мы достаем и отправляем на сервер и в localStorage больше не сохраняем
