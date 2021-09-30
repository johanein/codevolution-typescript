import { useContext } from "react";
import { UserContext } from "../FutureValueUserContext";

const User = () => {
  const { setUser, user } = useContext(UserContext) || {};
  const handleLogin = () => {
    setUser({ name: "contextUser", email: "contextUser@gmail.com" });
  };
  const handleLogout = () => {
    if (setUser) setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};

export default User;
