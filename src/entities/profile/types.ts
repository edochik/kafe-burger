import { ResponseServer } from "../../shared/types/responseServer";
import { LoadingStatus } from "../../shared/types/loading";

export interface OrderDetail {
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
	role: string
}

export interface InitialState {
	loading: LoadingStatus;
	errorServer: null | ResponseServer;
	successServer: null | ResponseServer;
	isAuthorization: boolean;
	data: {
		user: User,
		orders: Order[],
		orderDetails: OrderDetail[]
	}
}

export interface AuthorizationRequest {
	login: string;
	password: string;
}

export interface SuccessServer {
	status: 'success',
	message: string,
	user: User,
	orders: Order[]
	orderDetails: OrderDetail[]
}

export interface UpdateUser extends Omit<User, "password"> {
	password: string;
}

