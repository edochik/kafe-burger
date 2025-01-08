import { OrderDetail } from "../../entities/profile/types.js";

export function getOrderDetailsMap(orderDetails: OrderDetail[]) {
	const detailsMap: Map<number, OrderDetail[]> = new Map();
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