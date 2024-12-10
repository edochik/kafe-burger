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

export async function fetchRegister(data: User) {
  const response = await fetch("https://chip-patch-papaya.glitch.me/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw error;
  }
  return response.json();
}
