import { User } from "../../entities/user/userSlice.js"

export interface Data {
	login: string,
	password: string
	user: User
}