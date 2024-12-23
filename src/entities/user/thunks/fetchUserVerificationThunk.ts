import { createAsyncThunk } from "@reduxjs/toolkit";


export const fetchUserVerificationThunk = createAsyncThunk(
	"fetchUserVerificationThunk",
	async () => {
		try {
			const response = await fetch('https://chip-patch-papaya.glitch.me/api/auth/verify', {
				method: 'GET',
				credentials: 'include'
			});
			return await response.json()
		} catch (error) {
			return null
		}
	})