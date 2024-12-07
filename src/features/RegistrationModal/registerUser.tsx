interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  floor: string;
  apartment: string;
  login: string;
  password: string;
}

export async function registerUser(data: User) {
  const response = await fetch("https://chip-patch-papaya.glitch.me/regist", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error);
  }
  return response.json();
}
