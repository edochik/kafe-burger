import { User } from "../../entities/user/userSlice";
import { fetchData } from "./helper";

const API_VERIFICATION_USER = 'https://chip-patch-papaya.glitch.me/api/auth/verify'

export async function fetchUser(): Promise<User> {
	const user = await fetchData<User>(API_VERIFICATION_USER);
	return user
}