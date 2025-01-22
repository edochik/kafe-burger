import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchInitialProductsThunk } from "./thunk/fetchInitialProductsThunk";
import { sortFunctions } from "./sortFunctions";
import { InitialState, Product, ProductSuccessServer } from "./types";
import { fetchCreateProductThunk } from "./thunk/fetchCreateProductThunk";
import { fetchDeleteProductThunk } from "./thunk/fetchDeleteProductThunk";

const initialState: InitialState = {
	loading: 'idle',
	errorServer: null,
	successServer: null,
	pageInfo: {
		pageSize: 6,
		currentPage: 1,
	},
	products: [],
	newProduct: {
		nameRu: "",
		nameEn: "",
		price: 0,
		weight: 0,
		kilocalories: 0,
		imageUrl: "",
		composition: "",
		categoryImg: "",
		description: "",
		categoryEn: "",
		categoryRu: "",
	},
	sortBy: 'default'
}

export const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {
		incrementPage: (state) => {
			state.pageInfo.currentPage += 1
		},
		decrementPage: (state) => {
			state.pageInfo.currentPage -= 1
		},
		defaultPage: (state) => {
			state.pageInfo.currentPage = 1
		},
		resetServerResponseProduct: (state) => {
			state.errorServer = null
			state.successServer = null
		},
		resetNewProduct: (state) => {
			state.newProduct.nameRu = ""
			state.newProduct.nameEn = ""
			state.newProduct.price = 0
			state.newProduct.weight = 0
			state.newProduct.kilocalories = 0
			state.newProduct.imageUrl = ""
			state.newProduct.composition = ""
			state.newProduct.categoryImg = ""
			state.newProduct.description = ""
			state.newProduct.categoryEn = ""
			state.newProduct.categoryRu = ""
		},
		setSortBy: (state, action) => {
			const criteria = action.payload
			state.sortBy = criteria;
			if (criteria === 'default') {
				return
			}
			state.products = sortFunctions[criteria]?.(state.products)
		},
		updateProduct: (state, action: PayloadAction<{ key: keyof Omit<Product, "id">; value: string | number }>) => {
			const { key, value } = action.payload;
			(state.newProduct[key] as string | number) = value;
		},
		updateCategoryProduct: (state, action: PayloadAction<{
			categoryEn: string; categoryImg: string; categoryRu: string
		}>) => {
			const { categoryEn, categoryImg, categoryRu } = action.payload;
			state.newProduct.categoryEn = categoryEn
			state.newProduct.categoryRu = categoryRu
			state.newProduct.categoryImg = categoryImg
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchInitialProductsThunk.pending, (state) => {
				state.loading = 'pending';
			})
			.addCase(fetchInitialProductsThunk.fulfilled, (state, action: PayloadAction<ProductSuccessServer>) => {
				state.loading = 'succeeded';
				const { products } = action.payload
				state.products = products
			})
			.addCase(fetchInitialProductsThunk.rejected, (state, action) => {
				state.loading = 'failed';
				state.errorServer = action.payload ?? { status: "error", message: "fetchCreateProductThunk error" };
			})

			.addCase(fetchCreateProductThunk.pending, (state) => {
				state.loading = 'pending';
			})
			.addCase(fetchCreateProductThunk.fulfilled, (state, action: PayloadAction<ProductSuccessServer>) => {
				state.loading = 'succeeded';
				const { products, message, status } = action.payload
				state.successServer = { status, message }
				state.products = products
			})
			.addCase(fetchCreateProductThunk.rejected, (state, action) => {
				state.loading = 'failed';
				state.errorServer = action.payload ?? { status: "error", message: "fetchCreateProductThunk error" };
			})

			.addCase(fetchDeleteProductThunk.pending, (state) => {
				state.loading = 'pending';
			})
			.addCase(fetchDeleteProductThunk.fulfilled, (state, action: PayloadAction<ProductSuccessServer>) => {
				state.loading = 'succeeded';
				const { products, message, status } = action.payload
				state.successServer = { status, message }
				state.products = products
			})
			.addCase(fetchDeleteProductThunk.rejected, (state, action) => {
				state.loading = 'failed';
				state.errorServer = action.payload ?? { status: "error", message: "fetchDeleteProductThunk error" };
			})
	}
})

export const {
	setSortBy,
	updateProduct,
	updateCategoryProduct,
	resetServerResponseProduct,
	resetNewProduct,
	incrementPage,
	decrementPage,
	defaultPage
} = productSlice.actions