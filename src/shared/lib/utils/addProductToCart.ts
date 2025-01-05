import { addProductCart, incrementProduct } from "../../../entities/cart/cartSlice";
import { Cart } from "../../../entities/cart/types";
import { Product } from "../../../entities/product/types.js";
import { useAppDispatch } from "../hooks/hooks";

export function addProductToCart(
	dispatch: ReturnType<typeof useAppDispatch>,
	cart: Cart[],
	product: Product) {
	const { id, nameRu, price, weight, imageUrl } = product;
	if (!cart.some((cartProduct) => cartProduct.id === id)) {
		dispatch(
			addProductCart({ id, nameRu, price, weight, imageUrl, count: 1 })
		);
	} else {
		dispatch(incrementProduct(id));
	}
}
