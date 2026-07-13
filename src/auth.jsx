import { useState } from "react";

export default function Login({
  status,
  setStatus,
  username,
  setUsername,
}) {
  const [temp, setTemp] = useState("");

  function checked() {
    setUsername(temp);
    setStatus(true);
  }

  return (
    <div>
      <h4>Hello {status ? username : "GUEST"}</h4>

      <label htmlFor="username">Enter Username</label>
      <input
        type="text"
        id="username"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
      />

      <button onClick={checked}>Login</button>
    </div>
  );
}