import { Product } from "../domain/Product";
import { fetchData } from "./helper";

const API_PRODUCTS = 'https://chip-patch-papaya.glitch.me/api/products'

export async function fetchProducts(): Promise<Product[]> {
	const products = await fetchData<Product[]>(API_PRODUCTS);
	return products
}