import { IResponseServer } from "../../shared/domain/responseServer";
import { LoadingStatus } from "../../shared/types/loading";
import { User } from "../profile/types";

export interface Cart {
	id: number;
	nameRu: string;
	price: number;
	weight: number;
	imageUrl: string;
	count: number;
}

export interface initialStateCart {
	loading: LoadingStatus;
	errorServer: null | IResponseServer;
	successServer: null | IResponseServer;
	isAppLoaded: boolean;
	cart: Cart[];
}

export interface OrderPayload {
	user: User;
	deliveryMethod: string;
	order: {
		count: number,
		id: number
	}[];
}