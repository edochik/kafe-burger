import { AppDispatch } from "../../app/store";
import { updateProduct } from "../../entities/product/productSlice";
import { Product } from "../../entities/product/types";

export const numberInput = (
	name: keyof Omit<Product, 'id'>,
	value: string,
	dispatch: AppDispatch) => {
	if (!/^[0-9]*$/.test(value)) {
		return
	}
	const valueIsNumber = Number(value);
	if (!Number.isNaN(valueIsNumber)) {
		dispatch(updateProduct({ key: name, value: valueIsNumber }))
	}
}