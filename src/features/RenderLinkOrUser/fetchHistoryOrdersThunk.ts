import { createAsyncThunk } from "@reduxjs/toolkit";

const API_HISTORY_ORDERS = 'https://chip-patch-papaya.glitch.me/api/orders';

export const fetchHistoryOrdersThunk = createAsyncThunk(
	"fetchHistoryOrdersThunk",
	async (userId: number) => {
		try {
			const response = await fetch(`${API_HISTORY_ORDERS}?id=${userId}`);
			const result = await response.json();
			return result;
		} catch (error) {
		}
	}
)