import { API } from "../../../shared/api/api.js";

const API_LOGOUT = `${API}logout`


export async function fetchLogout() {
	const data = await fetch(API_LOGOUT, {
		method: "POST",
		credentials: "include",
	});

}

// const userLogout = async () => {
// 		try {
// 			const response = await fetch(
// 				"https://chip-patch-papaya.glitch.me/api/logout",
// 				{
// 					method: "POST",
// 					credentials: "include",
// 				}
// 			);
// 			if (!response.ok) {
// 				const errorData = await response.json();
// 				throw new Error(errorData.errorDetail);
// 			}
// 			dispatch(logoutUser());
// 		} catch (error) {
// 			if (error instanceof Error) {
// 				console.log(error.message);
// 			}
// 		}
// 	};