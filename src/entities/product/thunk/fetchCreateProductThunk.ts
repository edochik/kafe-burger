import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCreateProduct } from "../fetch/fetchCreateProduct";
import { Product, ProductErrorServer, ProductSuccessServer } from "../types";


export const fetchCreateProductThunk = createAsyncThunk<
	ProductSuccessServer,
	Omit<Product, "id">,
	{ rejectValue: ProductErrorServer }
>(
	'fetchCreateProductThunk',
	async (product, { rejectWithValue }) => {
		try {
			const response = await fetchCreateProduct<ProductSuccessServer, Omit<Product, "id">>(product);
			return response;
		} catch (error) {
			return rejectWithValue(error as ProductErrorServer);
		}
	})
