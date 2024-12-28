import { IOrderDetails } from "../../entities/profile/types";

export function getDetailsMap(orderDetails: IOrderDetails[]) {
	const detailsMap: Map<number, IOrderDetails[]> = new Map();
	for (const order of orderDetails) {
		const orderId = order.orderId;
		if (!detailsMap.has(orderId)) {
			detailsMap.set(orderId, []);
		}
		const key = detailsMap.get(orderId);
		key?.push(order);
	}
	return detailsMap
}