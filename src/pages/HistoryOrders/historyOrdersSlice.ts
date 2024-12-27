import { createSlice } from "@reduxjs/toolkit";
import { fetchHistoryOrdersThunk } from "./fetchHistoryOrdersThunk";
import { LoadingStatus } from "../../shared/types/loading.js";

interface OrderDetails {
	id: number,
	orderId: number,
	price: number,
	productId: number,
	count: number
}
interface Order {
	id: number,
	userId: number,
	deliveryMethod: "pickup" | "delivery",
	address: string,
	floor: string,
	apartment: string,
	phone: string,
	createdAt: string,
	total: number
}
interface InitialState {
	loading: LoadingStatus;
	error: string | null;
	orderDetails: OrderDetails[],
	orders: Order[],
}

const initialState: InitialState = {
	loading: 'idle',
	error: null,
	orderDetails: [],
	orders: []
}

export const historyOrdersSlice = createSlice({
	name: 'historyOrders',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchHistoryOrdersThunk.pending, (state) => {
				state.loading = 'pending';
			})
			.addCase(fetchHistoryOrdersThunk.fulfilled, (state, action) => {
				state.loading = 'succeeded';
				state.orderDetails = action.payload.orderDetails;
				state.orders = action.payload.orders;
			})
			.addCase(fetchHistoryOrdersThunk.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action.error.message!;
			})
	}
})