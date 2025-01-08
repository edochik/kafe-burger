import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchOrder } from "../fetch/fetchOrder";
import { SuccessServer } from "../../profile/types";
import { OrderPayload } from "../types";
import { ResponseServer } from "../../../shared/types/responseServer";



export const fetchOrderThunk = createAsyncThunk<
	SuccessServer,
	OrderPayload,
	{ rejectValue: ResponseServer }
>(

	'fetchOrderThunk',
	async (data, { rejectWithValue }) => {
		try {
			const response: SuccessServer = await fetchOrder(data);
			return response
		} catch (error) {
			return rejectWithValue(error as ResponseServer);
		}
	}
)