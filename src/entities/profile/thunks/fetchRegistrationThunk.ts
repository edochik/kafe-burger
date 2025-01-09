import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchRegistration } from "../fetch/fetchRegistration";
import { ProfileErrorServer, ProfileSuccessServer, UserForRegistration } from "../types";

export const fetchRegistrationThunk = createAsyncThunk<
	ProfileSuccessServer,
	UserForRegistration,
	{ rejectValue: ProfileErrorServer }
>(
	'fetchRegistrationThunk',
	async (data, { rejectWithValue }) => {
		try {
			const response = await fetchRegistration<ProfileSuccessServer, UserForRegistration>(data);
			return response
		} catch (error) {
			return rejectWithValue(error as ProfileErrorServer);
		}
	})