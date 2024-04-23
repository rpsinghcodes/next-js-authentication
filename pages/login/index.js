import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../store";

export default function LoginPage() {
    const router = useRouter();
    const isLogedIn = useSelector(state => state.credential.isLogedIn);
    const dispatch =  useDispatch();
    const [loading, setLoading] = useState(false)
  const handleFormData = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    console.log('got the data now i\'m fetching.')
    setLoading(true);
    const response = await fetch('/api/auth/login', {
        method:"POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    })
    console.log('i think fetching is completed.')
    const result = await response.json();

    if(response.ok) {
      console.log('result: ', result)
      localStorage.setItem('token', result.token)
      localStorage.setItem('userName', result.username);
      const userName = result.username;
      console.log('userName: ', userName);
      dispatch(Login({token: result.token, username: userName, isLogedIn:true}))
        router.push('/')


    } else {
        console.log('response: ', result);
        setLoading(false);
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
      <button type="submit">{loading ? "Submitting." : "Login"}</button>
    </form>
  );
}
