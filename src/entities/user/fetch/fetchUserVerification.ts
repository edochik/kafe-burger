import { API } from "../../../shared/api/api";
import { fetchDataUniversal } from "../../../shared/api/helper";
import { User } from "../userSlice.js";


const API_VERIFICATION = `${API}auth/verify`

export async function fetchUserVerification(): Promise<User> {
	const user: User = await fetchDataUniversal(API_VERIFICATION, { method: "GET", credentials: 'include' });
	return user;
}
