import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchOrder } from "../fetch/fetchOrder";
import { SuccessServer } from "../../user/types";
import { OrderPayload } from "../types";
import { IResponseServer } from "../../../shared/domain/responseServer";



export const fetchOrderThunk = createAsyncThunk<
	SuccessServer,
	OrderPayload,
	{ rejectValue: IResponseServer }
>(

	'fetchOrderThunk',
	async (data, { rejectWithValue }) => {
		try {
			const response: SuccessServer = await fetchOrder(data);
			return response
		} catch (error) {
			return rejectWithValue(error as IResponseServer);
		}
	}
)