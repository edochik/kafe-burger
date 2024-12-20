export interface InputValues {
	phone: string;
	firstName: string;
	receiving: string;
	floor: string;
	address: string;
	apartment: string;
}

type Callback = React.Dispatch<React.SetStateAction<InputValues>>;

export function changeReceiving(arg: string, callback: Callback) {
	if (arg === "pickup") {
		callback((prev) => ({
			...prev,
			receiving: arg,
			address: "",
			floor: "",
			apartment: "",
		}));
	}
	callback((prev) => ({ ...prev, receiving: arg }));
}