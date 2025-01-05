import { createAsyncThunk } from "@reduxjs/toolkit"
import { SuccessServer } from "../types";
import { IResponseServer } from "../../../shared/domain/responseServer";
import { fetchOrders } from "../fetch/fetchOrders";


export const fetchOrdersThunk = createAsyncThunk<
	SuccessServer,
	number,
	{ rejectValue: IResponseServer }
>(
	"fetchOrdersThunk",
	async (data, { rejectWithValue }) => {
		try {
			const response = await fetchOrders(data);
			return response;
		} catch (error) {
			return rejectWithValue(error as IResponseServer);
		}
	}
);
