import { useContext } from "react";
import UserContext from "../context/UserContext";

function UserProfile() {
  const user = useContext(UserContext);

  return (
    <section>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Role: {user.role}</p>
    </section>
  );
}

export default UserProfile;
