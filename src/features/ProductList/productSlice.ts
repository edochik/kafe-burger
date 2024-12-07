import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../shared/domain/Product";
import { fetchInitialProductThunk } from "./thunk";

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
			.addCase(fetchInitialProductThunk.pending, (state) => {
				state.loading = 'pending';
			})
			.addCase(fetchInitialProductThunk.fulfilled, (state, action) => {
				state.loading = 'succeeded';
				state.products = action.payload
			})
			.addCase(fetchInitialProductThunk.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action.error.message!;
			})
	}
})