import { createAsyncThunk } from "@reduxjs/toolkit";
import { IResponseServer } from "../../../shared/domain/responseServer";
import { SuccessServer, UpdateUser } from "../types";
import { fetchUpdateUser } from "../fetch/fetchUpdateUser";

export const fetchUpdateUserThunk = createAsyncThunk<
	SuccessServer,
	UpdateUser,
	{ rejectValue: IResponseServer }
>(
	'fetchUpdateUserThunk',
	async (data, { rejectWithValue }) => {
		try {
			const response = await fetchUpdateUser(data);
			return response;
		} catch (error) {
			return rejectWithValue(error as IResponseServer);
		}
	}
)