import { InputValues } from "./interface";

type Callback = React.Dispatch<React.SetStateAction<InputValues>>;

export function changeReceiving(arg: string, callback: Callback) {
	if (arg === "pickup") {
		callback((prev) => ({
			...prev,
			receiving: arg,
			address: "",
			floor: "",
			intercom: "",
		}));
	}
	callback((prev) => ({ ...prev, receiving: arg }));
}