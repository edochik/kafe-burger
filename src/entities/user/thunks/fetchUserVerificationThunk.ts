import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUserVerification } from "../fetch/fetchUserVerification";

// export const fetchUserVerificationThunk = createAsyncThunk(
// 	"fetchUserVerificationThunk",
// 	async () => {
// 		try {
// 			const response = await fetch('https://chip-patch-papaya.glitch.me/api/auth/verify', {
// 				method: 'GET',
// 				credentials: 'include'
// 			});
// 			return await response.json()
// 		} catch (error) {
// 			return null
// 		}
// 	})

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