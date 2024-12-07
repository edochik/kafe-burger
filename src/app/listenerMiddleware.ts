import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store";
import { selectCategory } from "../features/RadioButtons/selectSlice";
import { addProductCart, decrementProduct, incrementProduct } from "../features/Cart/cartSlice";

export const listenerMiddleware = createListenerMiddleware()
export const startAppListening = listenerMiddleware.startListening.withTypes<
	RootState,
	AppDispatch
>();

startAppListening({
	matcher: isAnyOf(
		selectCategory,
		addProductCart,
		incrementProduct,
		decrementProduct
	),
	effect: async (action, listenerApi) => {
		const { productsInCart } = listenerApi.getState()
		//  cart = localStorage.getItem('cartYourMeal');
		localStorage.setItem('cartYourMeal', JSON.stringify(productsInCart))
	}
})