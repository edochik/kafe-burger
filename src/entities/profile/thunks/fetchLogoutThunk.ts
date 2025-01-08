import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchLogout } from "../fetch/fetchLogout";
import { ResponseServer } from "../../../shared/types/responseServer";
import { SuccessServer } from "../types";

export const fetchLogoutThunk = createAsyncThunk<
	SuccessServer,
	void,
	{ rejectValue: ResponseServer }>(
		'fetchLogoutThunk',
		async (_, { rejectWithValue }) => {
			try {
				const response = await fetchLogout();
				return response
			} catch (error) {
				return rejectWithValue(error as ResponseServer);
			}
		}
	)
