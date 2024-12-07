import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//! Если данные на сервере поменяются и burgers будут последними
//! у нас будет выводится burgers надо через middleware, отследить загрузку
//! как только данные загружены, то мы вытаскиваем первую категорию и передаем сюда
//! использование одних данных для работы !!!!
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