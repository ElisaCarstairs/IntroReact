import { useState } from "react";
import Home from "./Components/Home/Home";
import Register from "./Pages/Register";

export default function App() {
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  const login = (username) => setUser({ username });
  const logout = () => setUser(null);

  return (
    <div>
      {showRegister ? (
        <Register onRegister={(username) => {
          login(username);
          setShowRegister(false);
        }} />
      ) : (
        <Home
          user={user}
          login={login}
          logout={logout}
          showRegisterForm={() => setShowRegister(true)}
        />
      )}
    </div>
  );
}
