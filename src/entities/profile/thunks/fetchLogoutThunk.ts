import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchLogout } from "../fetch/fetchLogout";
import { IResponseServer } from "../../../shared/domain/responseServer";
import { SuccessServer } from "../types";

export const fetchLogoutThunk = createAsyncThunk<
	SuccessServer,
	void,
	{ rejectValue: IResponseServer }>(
		'fetchLogoutThunk',
		async (_, { rejectWithValue }) => {
			try {
				const response = await fetchLogout();
				return response
			} catch (error) {
				return rejectWithValue(error as IResponseServer);
			}
		}
	)
