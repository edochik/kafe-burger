import { createAsyncThunk } from "@reduxjs/toolkit"
import { SuccessServer } from "../types";
import { ResponseServer } from "../../../shared/types/responseServer";
import { fetchOrders } from "../fetch/fetchOrders";


export const fetchOrdersThunk = createAsyncThunk<
	SuccessServer,
	number,
	{ rejectValue: ResponseServer }
>(
	"fetchOrdersThunk",
	async (data, { rejectWithValue }) => {
		try {
			const response = await fetchOrders(data);
			return response;
		} catch (error) {
			return rejectWithValue(error as ResponseServer);
		}
	}
);
