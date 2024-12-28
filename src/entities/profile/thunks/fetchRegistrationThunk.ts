import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRegistration } from "../fetch/fetchRegistration";
import { IResponseServer } from "../../../shared/domain/responseServer";
import { SuccessServer, UpdateUser } from "../types.js";

export const fetchRegistrationThunk = createAsyncThunk<
	SuccessServer,
	Partial<UpdateUser>,
	{ rejectValue: IResponseServer }
>(
	'fetchRegistrationThunk',
	async (data, { rejectWithValue }) => {
		try {
			const response = await fetchRegistration(data);
			return response
		} catch (error) {
			return rejectWithValue(error as IResponseServer);
		}
	})