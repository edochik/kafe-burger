import { CartItem } from "../../app/interface"
import { IProductCardProps } from "./index";
// необходимо тестировать функцию
export function addProduct(prev: CartItem[], props: IProductCardProps) {
	console.log(props);
	const { id, nameRu, price, weight, imageUrl } = props;
	const obj = { id, nameRu, price, weight, imageUrl }
	const ids = prev.map((product) => product.id);
	if (!ids.includes(id)) {
		return [
			...prev,
			{
				...obj,
				count: 1,
			},
		];
	}
	return prev;
}