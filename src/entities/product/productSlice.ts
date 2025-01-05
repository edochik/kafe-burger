import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchInitialProductsThunk } from "./thunk/fetchInitialProductsThunk";
import { LoadingStatus } from "../../shared/types/loading";
import { sortFunctions } from "./sortFunctions";
import { Product } from "./types";


interface InitialState {
	loading: LoadingStatus;
	error: string | null;
	products: Product[],
	sortBy: string,
}

const initialState: InitialState = {
	loading: 'idle',
	error: null,
	products: [],
	sortBy: 'default'
}

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		setSortBy: (state, action) => {
			const criteria = action.payload
			state.sortBy = criteria;
			if (criteria === 'default') {
				return
			}
			state.products = sortFunctions[criteria]?.(state.products)
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchInitialProductsThunk.pending, (state) => {
				state.loading = 'pending';
			})
			.addCase(fetchInitialProductsThunk.fulfilled, (state, action: PayloadAction<Product[]>) => {
				state.loading = 'succeeded';
				state.products = action.payload
			})
			.addCase(fetchInitialProductsThunk.rejected, (state, action) => {
				state.loading = 'failed';
				state.error = action.error.message!;
			})
	}
})

export const { setSortBy } = productSlice.actions