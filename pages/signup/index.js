import { useRouter } from "next/router";

export default function SignUpPage() {
    const router = useRouter()
  const handleFormData = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    const response = await fetch('/api/auth/signup', {
        method:"POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    })
    const result = await response.json();

    if(response.ok) {
        router.push('/')
    } else {
        alert(result.message);
    }
  };
  return (
    <form onSubmit={handleFormData}>
      <p>
        <label htmlFor="username">Enter UserName</label>
      </p>

      <input type="text" name="username" required />
      <p>
        <label htmlFor="password">Enter Password</label>
      </p>

      <input type="password" name="password" />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
