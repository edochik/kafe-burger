import { IResponseServer } from "../../shared/domain/responseServer.js";

export interface OrderDetails {
	id: number,
	orderId: number,
	price: number,
	productId: number,
	count: number
}

export interface Order {
	id: number,
	userId: number,
	deliveryMethod: "pickup" | "delivery",
	address: string,
	floor: string,
	apartment: string,
	phone: string,
	createdAt: string,
	total: number
}

export interface User {
	id: null | number,
	firstName: string,
	lastName: string,
	email: string,
	phone: string,
	address: string,
	floor: string,
	apartment: string,
	login: string,
}

export interface InitialStateUser {
	loading: "idle" | "pending" | "succeeded" | "failed";
	error: null | IResponseServer;
	message: null | IResponseServer;
	isAuthorization: boolean;
	data: {
		user: User,
		// orders: Order[],
		// orderDetails: OrderDetails[]
	}
}

export interface AuthorizationRequest {
	login: string;
	password: string;
}

export interface ServerSuccess {
	status: 'success',
	message: string,
	user: User
}