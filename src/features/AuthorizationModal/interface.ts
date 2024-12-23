import { User } from "../../entities/user/types.js"

export interface Data {
	login: string,
	password: string
	user: User
}