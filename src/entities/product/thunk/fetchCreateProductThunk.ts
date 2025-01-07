import { createAsyncThunk } from "@reduxjs/toolkit";
import { ResponseServer } from "../../../shared/types/responseServer";
import { fetchCreateProduct } from "../fetch/fetchCreateProduct";
import { Product, SuccessServer } from "../types";


export const fetchCreateProductThunk = createAsyncThunk<
	SuccessServer,
	Omit<Product, "id">,
	{ rejectValue: ResponseServer }
>(
	'fetchCreateProductThunk',
	async (product, { rejectWithValue }) => {
		try {
			const response = await fetchCreateProduct(product);
			return response;
		} catch (error) {
			return rejectWithValue(error as ResponseServer);
		}
	})
