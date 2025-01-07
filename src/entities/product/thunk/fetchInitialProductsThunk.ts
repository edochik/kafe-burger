import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../fetch/fetchProducts";
import { ResponseServer } from "../../../shared/types/responseServer";
import { Product } from "../types";

export const fetchInitialProductsThunk = createAsyncThunk<
	Product[],
	void,
	{ rejectValue: ResponseServer }
>(
	"fetchInitialProductThunk",
	async (_, { rejectWithValue }) => {
		try {
			const products = await fetchProducts();
			return products
		} catch (error) {
			return rejectWithValue(error as ResponseServer);
		}
	}
)