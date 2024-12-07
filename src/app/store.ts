import { configureStore } from '@reduxjs/toolkit';
import { listenerMiddleware } from './listenerMiddleware';
import { cartSlice } from '../features/Cart/cartSlice';
import { selectSlice } from '../features/RadioButtons/selectSlice';
import { fetchInitialProductThunk } from '../features/ProductList/thunk';
import { productSlice } from '../features/ProductList/productSlice';

export const store = configureStore({
	reducer: {
		productsInCart: cartSlice.reducer,
		selectProduct: selectSlice.reducer,
		products: productSlice.reducer,
		// userData: userSlice.reducer
		// historyOrder:
		// historyDoAmin:
		// user ? 
		// admin ? 
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().prepend(listenerMiddleware.middleware),
})
store.dispatch(fetchInitialProductThunk());

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// если user не вошел
// 1. он может складывать и данные будут сохраняться в localStorage, это надо делать через middleware.
// 2. он может сделать заказ по этим данным, и этот заказ должен уйти на сервер, чтобы его обработать


// Если он зарегистрируется, то данные из localStorage мы достаем и отправляем на сервер и в localStorage больше не сохраняем
