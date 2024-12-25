import { IResponseServer } from "../../shared/domain/responseServer.js";
import { User } from "../user/types.js";

export interface Cart {
	id: number;
	nameRu: string;
	price: number;
	weight: number;
	imageUrl: string;
	count: number;
}

export interface initialStateCart {
	loading: "idle" | "pending" | "succeeded" | "failed";
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