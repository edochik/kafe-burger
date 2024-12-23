import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../shared/domain/Product";
import { fetchInitialProductsThunk } from "./fetchInitialProductsThunk";

interface InitialState {
	loading: "idle" | "pending" | "succeeded" | "failed";
	error: string | null;
	products: Product[]
}

const initialState: InitialState = {
	loading: 'idle',
	error: null,
	products: []
}

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchInitialProductsThunk.pending, (state) => {
				state.loading = 'pending';
			})
			.addCase(fetchInitialProductsThunk.fulfilled, (state, action) => {
				state.loading = 'succeeded';
				state.products = action.payload
			})
			.addCase(fetchInitialProductsThunk.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action.error.message!;
			})
	}
})