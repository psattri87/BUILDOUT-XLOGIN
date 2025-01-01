import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [result, setResult] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if ((input.username !== "user") & (input.password !== "password")) {
      setResult("Invalid username or password");
    } else {
      setResult("Welcome, user!");
    }
  }

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Login Page</h1>
      {result !== "" && <div className="result">{result}</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            required
            value={input.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            value={input.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
