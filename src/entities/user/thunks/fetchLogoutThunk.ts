import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchLogout } from "../fetch/fetchLogout";

export const fetchLogoutThunk = createAsyncThunk(
	'fetchLogoutThunk',
	async () => {
		try {
			const response = await fetchLogout()
		} catch (error) {
			return null
		}
	}
)
