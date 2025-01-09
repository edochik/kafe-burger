import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchOrder } from "../fetch/fetchOrder";
import { CartSuccessServer, OrderPayload } from "../types";
import { ResponseServer } from "../../../shared/types/responseServer";



export const fetchOrderThunk = createAsyncThunk<
	CartSuccessServer,
	OrderPayload,
	{ rejectValue: ResponseServer }
>(

	'fetchOrderThunk',
	async (data, { rejectWithValue }) => {
		try {
			const response: CartSuccessServer = await fetchOrder(data);
			return response
		} catch (error) {
			return rejectWithValue(error as ResponseServer);
		}
	}
)