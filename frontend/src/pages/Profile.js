import { useState } from "react";
import axios from "axios";

export default function Profile() {
  const [data, setData] = useState(null);
  const [msg, setMsg] = useState("");

  const getProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("/api/auth/profile", { headers: { Authorization: token } });
      setData(res.data);
      setMsg("");
    } catch (e) {
      setMsg(e.response?.data?.error || "Failed to load profile");
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <button onClick={getProfile}>Load Profile</button>
      {msg && <p>{msg}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
