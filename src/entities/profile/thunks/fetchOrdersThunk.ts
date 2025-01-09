import { createAsyncThunk } from "@reduxjs/toolkit"
import { ProfileErrorServer, ProfileSuccessServer } from "../types";
import { fetchOrders } from "../fetch/fetchOrders";


export const fetchOrdersThunk = createAsyncThunk<
	ProfileSuccessServer,
	number,
	{ rejectValue: ProfileErrorServer }
>(
	"fetchOrdersThunk",
	async (data, { rejectWithValue }) => {
		try {
			const response = await fetchOrders<ProfileSuccessServer, number>(data);
			return response;
		} catch (error) {
			return rejectWithValue(error as ProfileErrorServer);
		}
	}
);
