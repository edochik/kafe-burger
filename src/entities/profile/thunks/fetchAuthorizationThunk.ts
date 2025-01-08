import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchAuthorization } from "../fetch/fetchAuthorization";
import { AuthorizationRequest, SuccessServer } from "../types";
import { ResponseServer } from "../../../shared/types/responseServer";


export const fetchAuthorizationThunk = createAsyncThunk<
	SuccessServer,
	AuthorizationRequest,
	{ rejectValue: ResponseServer }
>(
	"fetchAuthorizationThunk",
	async (data, { rejectWithValue }) => {
		try {
			const response = await fetchAuthorization(data);
			return response;
		} catch (error) {
			return rejectWithValue(error as ResponseServer);
		}
	}
);
