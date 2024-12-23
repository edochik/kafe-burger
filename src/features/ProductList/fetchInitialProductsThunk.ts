import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../shared/api/fetchProducts";

export const fetchInitialProductsThunk = createAsyncThunk(
	"fetchInitialProductThunk",
	async () => {
		try {
			const products = await fetchProducts();
			return products
		} catch (error) {
			return []
		}
	}
)