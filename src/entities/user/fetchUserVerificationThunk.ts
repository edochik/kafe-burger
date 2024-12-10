import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUser } from "../../shared/api/fetchUser";

export const fetchUserVerificationThunk = createAsyncThunk(
	"fetchUserVerificationThunk",
	async () => {
		try {
			const user = await fetch('https://chip-patch-papaya.glitch.me/api/auth/verify', {
				method: 'GET',
				credentials: 'include'
			});
			return await user.json()
		} catch (error) {
			return null
		}
	})