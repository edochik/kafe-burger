import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../fetch/fetchProducts";
import { Product, ProductErrorServer } from "../types";

export const fetchInitialProductsThunk = createAsyncThunk<
	Product[],
	void,
	{ rejectValue: ProductErrorServer }
>(
	"fetchInitialProductThunk",
	async (_, { rejectWithValue }) => {
		try {
			const products = await fetchProducts<Product[]>();
			return products
		} catch (error) {
			return rejectWithValue(error as ProductErrorServer);
		}
	}
)