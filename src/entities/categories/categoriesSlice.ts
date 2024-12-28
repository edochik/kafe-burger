import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Categories } from "./types";


interface InitialState {
	selectCategory: string,
	categories: Categories[]
}

const initialState: InitialState = {
	selectCategory: 'burgers',
	categories: []
};

export const categoriesSlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		setSelectCategory: (state, action: PayloadAction<string>) => {
			state.selectCategory = action.payload
		},
		setCategories: (state, action: PayloadAction<Categories[]>) => {
			state.categories = action.payload
		}
	}
})

export const { setSelectCategory, setCategories } = categoriesSlice.actions 