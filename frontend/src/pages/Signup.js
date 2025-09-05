import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSignup = async () => {
    try {
      const res = await axios.post("/api/auth/signup", { email, password });
      localStorage.setItem("token", res.data.token);
      setMsg("Signup successful!");
    } catch (e) {
      setMsg(e.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
      <button onClick={handleSignup}>Signup</button>
      <p>{msg}</p>
    </div>
  );
}
