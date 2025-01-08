export interface ResponseServer {
	status: 'success' | 'error';
	message: string;
	field?: string;
	orderId?: number;
	total?: number;
	code?: number;
}