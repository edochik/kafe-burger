import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserVerification } from "../fetch/fetchUserVerification";
import { ResponseServer } from "../../../shared/types/responseServer";
import { SuccessServer } from "../types";

export const fetchUserVerificationThunk = createAsyncThunk<
	SuccessServer,
	void,
	{ rejectValue: ResponseServer }>(
		"fetchUserVerificationThunk",
		async (_, { rejectWithValue }) => {
			try {
				const response = await fetchUserVerification();
				return response;
			} catch (error) {
				return rejectWithValue(error as ResponseServer);
			}
		})