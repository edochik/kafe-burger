import { ResponseServer } from "../../shared/types/responseServer";
import { LoadingStatus } from "../../shared/types/loading";
import { User } from "../profile/types";
export interface InitialState {
	loading: LoadingStatus;
	errorServer: null | ResponseServer;
	successServer: null | ResponseServer;
	isAppLoaded: boolean;
	cart: Cart[];
}
export interface Cart {
	id: number;
	nameRu: string;
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