import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchAuthorization } from "../fetch/fetchAuthorization";
import { AuthorizationRequest, ProfileErrorServer, ProfileSuccessServer } from "../types";


export const fetchAuthorizationThunk = createAsyncThunk<
	ProfileSuccessServer,
	AuthorizationRequest,
	{ rejectValue: ProfileErrorServer }
>(
	"fetchAuthorizationThunk",
	async (data, { rejectWithValue }) => {
		try {
			const response = await fetchAuthorization<ProfileSuccessServer, AuthorizationRequest>(data);
			return response;
		} catch (error) {
			return rejectWithValue(error as ProfileErrorServer);
		}
	}
);

