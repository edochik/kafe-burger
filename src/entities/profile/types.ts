import { IResponseServer } from "../../shared/types/responseServer";
import { LoadingStatus } from "../../shared/types/loading";

export interface ProfileErrorServer extends IResponseServer {
	field?: string
	code?: number
}
export interface ProfileSuccessServer extends IResponseServer {
	user: User,
	orders: Order[]
	orderDetails: OrderDetail[]
}
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
	errorServer: null | ProfileErrorServer;
	successServer: null | ProfileSuccessServer;
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

export interface UserForUpdate extends User {
	password: string
}

export interface UserForRegistration extends Omit<User, "role" | "id"> {

}


