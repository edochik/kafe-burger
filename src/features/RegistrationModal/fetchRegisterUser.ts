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
  const request = await fetch("https://chip-patch-papaya.glitch.me/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...data }),
  });
  if (!request.ok) {
    const error = await request.json();
    throw error;
  }
  return request.json();
}

