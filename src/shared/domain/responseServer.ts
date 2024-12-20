export interface IResponseServer {
	status: 'success' | 'error';
	message: string;
	field?: string;
}