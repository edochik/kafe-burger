import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchGetProducts } from "../fetch/fetchGetProducts";
import { ProductErrorServer, ProductSuccessServer } from "../types";

export const fetchInitialProductsThunk = createAsyncThunk<
	ProductSuccessServer,
	void,
	{ rejectValue: ProductErrorServer }
>(
	"fetchInitialProductThunk",
	async (_, { rejectWithValue }) => {
		try {
			const products = await fetchGetProducts<ProductSuccessServer>();
			return products
		} catch (error) {
			return rejectWithValue(error as ProductErrorServer);
		}
	}
)