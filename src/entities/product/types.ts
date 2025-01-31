import { LoadingStatus } from "../../shared/types/loading";
import { IResponseServer } from "../../shared/types/IResponseServer";
export interface ProductErrorServer extends IResponseServer {

}
export interface ProductSuccessServer extends IResponseServer {
	products: Product[]
}
export interface Product {
	id: number;
	nameRu: string;
	nameEn: string;
	price: number;
	description: string;
	categoryRu: string;
	categoryEn: string;
	categoryImg: string;
	composition: string;
	weight: number;
	kilocalories: number;
	imageUrl: string;
}

export interface pageInfo {
	pageSize: number,
	currentPage: number,
}

export interface InitialState {
	loading: LoadingStatus;
	errorServer: null | IResponseServer;
	successServer: null | IResponseServer;
	pageInfo: pageInfo,
	products: Product[],
	newProduct: Omit<Product, "id">,
	sortBy: string,
}
