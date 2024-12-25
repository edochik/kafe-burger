import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserVerification } from "../fetch/fetchUserVerification";
import { IResponseServer } from "../../../shared/domain/responseServer";
import { SuccessServer } from "../types";

export const fetchUserVerificationThunk = createAsyncThunk<SuccessServer, void, { rejectValue: IResponseServer }>(
	"fetchUserVerificationThunk",
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetchUserVerification();
			return response;
		} catch (error) {
			return rejectWithValue(error as IResponseServer);
		}
	})