import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = 'burgers';

export const selectSlice = createSlice({
	name: 'selectProduct',
	initialState,
	reducers: {
		selectCategory: (state, action: PayloadAction<string>) => {
			return state = action.payload
		}
	}
})

export const { selectCategory } = selectSlice.actions 