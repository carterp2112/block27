import React from 'react'
import { useState } from 'react'
import App from '../App';

function SignUpForm({ token, setToken}) {
    const [username, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit() {
        event.preventDefault();
        setToken(result.token);
        console.log("Hello 👋");
    }

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
            Username: <input value={username} onChange={(e) => setUser(e.target.value)} />
        </label>
        <label>
            Password: <input value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SignUpForm
