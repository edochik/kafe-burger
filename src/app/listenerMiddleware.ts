import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store";
import { selectCategory } from "../features/RadioButtons/selectSlice";
import { addProductCart, decrementProduct, incrementProduct, setCartFromLocalStorage } from "../entities/cart/cartSlice";
import { fetchUserVerificationThunk } from "../entities/user/thunks/fetchUserVerificationThunk";
import { fetchHistoryOrdersThunk } from "../features/RenderLinkOrUser/fetchHistoryOrdersThunk";
import { fetchAuthorizationThunk } from "../entities/user/thunks/fetchAuthorizationThunk";
import { Cart } from "../entities/cart/types";
import { fetchOrderThunk } from "../entities/cart/thunk/fetchOrderThunk";

export const listenerMiddleware = createListenerMiddleware();
export const startAppListening = listenerMiddleware.startListening.withTypes<
	RootState,
	AppDispatch
>();

// обновление состояния при изменение корзины
startAppListening({
	matcher: isAnyOf(
		selectCategory,
		addProductCart,
		incrementProduct,
		decrementProduct
	),
	effect: async (action, listenerApi) => {
		const { cart } = listenerApi.getState().cart
		localStorage.setItem('cartYourMeal', JSON.stringify(cart))
	}
});

// очистка корзины в localStorage
startAppListening({
	matcher: isAnyOf(
		fetchOrderThunk.fulfilled,
	),
	effect: async (action, listenerApi) => {
		const { id } = listenerApi.getState()?.profile?.data?.user
		localStorage.removeItem('cartYourMeal');
		if (id !== null) {
			await listenerApi.dispatch(fetchHistoryOrdersThunk(id))
		}
	}
});


// обновление данных по истории заказа
startAppListening({
	matcher: isAnyOf(fetchUserVerificationThunk.fulfilled, fetchAuthorizationThunk.fulfilled),
	effect: async (action, listenerApi) => {
		const { profile } = listenerApi.getState();
		const userId = profile.data.user.id;
		if (typeof userId === 'number') {
			await listenerApi.dispatch(fetchHistoryOrdersThunk(userId));
		}
	}
});

//загрузка данных с локал стораж при перезагрузке страницы
startAppListening({
	predicate: (action, listenerApi) => {
		const state = listenerApi
		return !state.cart.isAppLoaded;
	},
	effect: async (action, listenerApi) => {
		const cartLocalStorage = localStorage.getItem('cartYourMeal');
		if (cartLocalStorage) {
			try {
				const cart: Cart[] = JSON.parse(cartLocalStorage);
				listenerApi.dispatch(setCartFromLocalStorage(cart))
			} catch (error) {
				listenerApi.dispatch(setCartFromLocalStorage([]));
			}
		}
	}
});