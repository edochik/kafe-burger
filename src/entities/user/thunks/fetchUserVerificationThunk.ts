import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserVerification } from "../fetch/fetchUserVerification";

export const fetchUserVerificationThunk = createAsyncThunk(
	"fetchUserVerificationThunk",
	async () => {
		try {
			const response = await fetchUserVerification();
			return response;
		} catch (error) {
			return null
		}
	})