import { fetchData } from "./helper";

const API_PRODUCTS = 'https://chip-patch-papaya.glitch.me/api/products'

export async function fetchProducts() {
	const products = await fetchData(API_PRODUCTS);
	return products
}