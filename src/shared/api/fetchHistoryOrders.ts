import { fetchData } from "./helper.js";

const API_HISTORY_ORDERS = 'https://chip-patch-papaya.glitch.me/api/orders'

export async function fetchProducts() {
	const products = await fetchData(API_HISTORY_ORDERS);
	return products
}
