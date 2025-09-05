import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <nav style={{ padding: 12, background: "#f2f2f2", display: "flex", gap: 10 }}>
      <Link to="/signup">Signup</Link>
      <Link to="/login">Login</Link>
      <Link to="/profile">Profile</Link>
      <button onClick={logout} style={{ marginLeft: "auto" }}>Logout</button>
    </nav>
  );
}
