import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductErrorServer, ProductSuccessServer } from "../types";
import { fetchDeleteProduct } from "../fetch/fetchDeleteProduct";


export const fetchDeleteProductThunk = createAsyncThunk<
	ProductSuccessServer,
	number,
	{ rejectValue: ProductErrorServer }
>(
	'fetchDeleteProductThunk',
	async (productId, { rejectWithValue }) => {
		try {
			const response = await fetchDeleteProduct<ProductSuccessServer, number>(productId);
			return response;
		} catch (error) {
			return rejectWithValue(error as ProductErrorServer);
		}
	})
