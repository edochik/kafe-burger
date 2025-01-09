import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchLogout } from "../fetch/fetchLogout";
import { ProfileErrorServer, ProfileSuccessServer } from "../types";

export const fetchLogoutThunk = createAsyncThunk<
	ProfileSuccessServer,
	void,
	{ rejectValue: ProfileErrorServer }>(
		'fetchLogoutThunk',
		async (_, { rejectWithValue }) => {
			try {
				const response = await fetchLogout<ProfileSuccessServer>();
				return response
			} catch (error) {
				return rejectWithValue(error as ProfileErrorServer);
			}
		}
	)
