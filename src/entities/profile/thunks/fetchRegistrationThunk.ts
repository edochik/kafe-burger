import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRegistration } from "../fetch/fetchRegistration";
import { ResponseServer } from "../../../shared/types/responseServer";
import { SuccessServer, UpdateUser } from "../types";

export const fetchRegistrationThunk = createAsyncThunk<
	SuccessServer,
	Partial<UpdateUser>,
	{ rejectValue: ResponseServer }
>(
	'fetchRegistrationThunk',
	async (data, { rejectWithValue }) => {
		try {
			const response = await fetchRegistration(data);
			return response
		} catch (error) {
			return rejectWithValue(error as ResponseServer);
		}
	})