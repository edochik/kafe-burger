import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchAuthorization } from "../fetch/fetchAuthorization";
import { AuthorizationRequest } from "../types";

export const fetchAuthorizationThunk = createAsyncThunk(
	"fetchRegistrationThunk",
	async (data: AuthorizationRequest) => {
		try {
			const response = await fetchAuthorization(data);
			return response;
		} catch (error) {
			return null
		}
	}
)
