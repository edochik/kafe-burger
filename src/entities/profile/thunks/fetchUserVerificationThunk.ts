import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserVerification } from "../fetch/fetchUserVerification";
import { ProfileErrorServer, ProfileSuccessServer } from "../types";

export const fetchUserVerificationThunk = createAsyncThunk<
	ProfileSuccessServer,
	void,
	{ rejectValue: ProfileErrorServer }>(
		"fetchUserVerificationThunk",
		async (_, { rejectWithValue }) => {
			try {
				const response = await fetchUserVerification<ProfileSuccessServer>();
				return response;
			} catch (error) {
				return rejectWithValue(error as ProfileErrorServer);
			}
		})