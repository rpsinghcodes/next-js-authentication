export function getToken() {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const tokenDuration = getExpirationDate();
  if (tokenDuration < 0) {
    return "EXPIRED";
  }
  return token;
}

export function getExpirationDate() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export async function isTokenVerified(token) {
  try {
    let res = await fetch("/api/auth/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });
    if (!res.ok) {
      localStorage.clear();
      return false
    }
    res = await res.json();
    return true
  } catch (err) {
    console.log("error in fetching /api/auth/verify");
  }
}
