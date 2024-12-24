import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "./store";
import { selectCategory } from "../features/RadioButtons/selectSlice";
import { addProductCart, clearCart, decrementProduct, incrementProduct } from "../features/Cart/cartSlice";
import { fetchUserVerificationThunk } from "../entities/user/thunks/fetchUserVerificationThunk";
import { fetchHistoryOrdersThunk } from "../features/RenderLinkOrUser/fetchHistoryOrdersThunk";
import { fetchAuthorizationThunk } from "../entities/user/thunks/fetchAuthorizationThunk";

export const listenerMiddleware = createListenerMiddleware();
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
		const { cart } = listenerApi.getState()
		localStorage.setItem('cartYourMeal', JSON.stringify(cart))
	}
});

startAppListening({
	matcher: isAnyOf(
		clearCart,
	),
	effect: async (action, listenerApi) => {
		localStorage.removeItem('cartYourMeal')
	}
});

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