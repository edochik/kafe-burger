import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProfileErrorServer, ProfileSuccessServer, UserForUpdate } from "../types";
import { fetchUpdateUser } from "../fetch/fetchUpdateUser";

export const fetchUpdateUserThunk = createAsyncThunk<
	ProfileSuccessServer,
	UserForUpdate,
	{ rejectValue: ProfileErrorServer }
>(
	'fetchUpdateUserThunk',
	async (data, { rejectWithValue }) => {
		try {
			const response = await fetchUpdateUser<ProfileSuccessServer, UserForUpdate>(data);
			return response;
		} catch (error) {
			return rejectWithValue(error as ProfileErrorServer);
		}
	}
)