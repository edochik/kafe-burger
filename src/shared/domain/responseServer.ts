// надо переделать на ServerError
export interface IResponseServer {
	status: 'success' | 'error';
	message: string;
	field?: string;
	orderId?: number;
	total?: number;
}