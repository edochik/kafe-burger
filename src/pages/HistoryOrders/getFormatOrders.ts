import { Order } from "../../entities/user/types.js";

export function getFormatOrders(orders: Order[]) {
	return orders.map((order) => {
		const { createdAt, ...rest } = order;
		const date = new Date(order.createdAt);
		const formatDate = date.toLocaleDateString("ru-RU", {
			day: "numeric",
			month: "long",
		});
		return { ...rest, date: formatDate };
	})
}

