import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchOrder } from "../fetch/fetchOrder";
import { CartErrorServer, CartSuccessServer, OrderPayload } from "../types";

export const fetchOrderThunk = createAsyncThunk<
	CartSuccessServer,
	OrderPayload,
	{ rejectValue: CartErrorServer }
>(

	'fetchOrderThunk',
	async (data, { rejectWithValue }) => {
		try {
			const response: CartSuccessServer = await fetchOrder<CartSuccessServer, OrderPayload>(data);
			return response
		} catch (error) {
			return rejectWithValue(error as CartErrorServer);
		}
	}
)