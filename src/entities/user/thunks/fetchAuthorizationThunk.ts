import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchAuthorization } from "../fetch/fetchAuthorization";
import { AuthorizationRequest, SuccessServer } from "../types";
import { IResponseServer } from "../../../shared/domain/responseServer.js";


export const fetchAuthorizationThunk = createAsyncThunk<
	SuccessServer,
	AuthorizationRequest,
	{ rejectValue: IResponseServer }
>(
	"fetchRegistrationThunk",
	async (data, { rejectWithValue }) => {
		try {
			const response = await fetchAuthorization(data);
			return response;
		} catch (error) {
			return rejectWithValue(error as IResponseServer);
		}
	}
);
