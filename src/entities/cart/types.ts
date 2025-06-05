import { IResponseServer } from "@shared/types/IResponseServer";
import { LoadingStatus } from "@shared/types/loading";
import { User } from "../profile/types";

export interface CartErrorServer extends IResponseServer {

}
export interface CartSuccessServer extends IResponseServer {
	orderId?: number,
	total?: number
}

export interface Cart {
	id: number;
	nameRu: string;
	nameEn: string;
	price: number;
	weight: number;
	imageUrl: string;
	count: number;
}

export interface OrderPayload {
	user: User;
	deliveryMethod: string;
	order: {
		count: number,
		id: number
	}[];
}

export interface InitialState {
	loading: LoadingStatus;
	errorServer: null | CartErrorServer;
	successServer: null | CartSuccessServer;
	isAppLoaded: boolean;
	cart: Cart[];
}