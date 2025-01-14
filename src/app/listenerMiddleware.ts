import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store";
import { setCategories, setSelectCategory } from "../entities/categories/categoriesSlice";
import { addProductCart, decrementProduct, incrementProduct, setCartFromLocalStorage } from "../entities/cart/cartSlice";
import { Cart } from "../entities/cart/types";
import { fetchOrderThunk } from "../entities/cart/thunk/fetchOrderThunk";
import { defaultPage, setSortBy } from "../entities/product/productSlice";
import { fetchInitialProductsThunk } from "../entities/product/thunk/fetchInitialProductsThunk";
import { getCategories } from "../entities/categories/getCategories";
import { fetchOrdersThunk } from "../entities/profile/thunks/fetchOrdersThunk";
import { fetchDeleteProductThunk } from "../entities/product/thunk/fetchDeleteProductThunk";

export const listenerMiddleware = createListenerMiddleware();
export const startAppListening = listenerMiddleware.startListening.withTypes<
	RootState,
	AppDispatch
>();

// обновление состояния при изменение корзины
startAppListening({
	matcher: isAnyOf(
		setSelectCategory,
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
			await listenerApi.dispatch(fetchOrdersThunk(id))
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

// для сортировки если по default делаем запрос на сервер 
startAppListening({
	matcher: isAnyOf(setSortBy),
	effect: async (action, listenerApi) => {
		const state = listenerApi.getState();
		const criteriaDefault = state.products.sortBy;
		if (criteriaDefault === 'default') {
			listenerApi.dispatch(fetchInitialProductsThunk())
		}
	}
});

// получаем категории товаров
startAppListening({
	matcher: isAnyOf(fetchInitialProductsThunk.fulfilled),
	effect: async (action, listenerApi) => {
		const state = listenerApi.getState();
		const { products } = state.products
		const categories = getCategories(products)
		listenerApi.dispatch(setCategories(categories))
	}
});

// возвращаемся к первой странице если переключились между категориями
startAppListening({
	matcher: isAnyOf(setSelectCategory, fetchDeleteProductThunk.fulfilled),
	effect: async (action, listenerApi) => {
		const state = listenerApi.getState();
		const { currentPage } = state.products.pageInfo;
		if (currentPage !== 1) {
			listenerApi.dispatch(defaultPage())
		}
	}
})

