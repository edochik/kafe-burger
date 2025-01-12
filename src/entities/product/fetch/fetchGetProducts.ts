import { API_PRODUCT } from "../../../shared/api/api";
import { fetchData } from "../../../shared/api/helper";

export async function fetchGetProducts<T>(): Promise<T> {
	const products = await fetchData<T>(API_PRODUCT);
	return products
}