import { useContext } from "react";
import UserContext from "../context/UserContext";

function WelcomeMessage() {
  const user = useContext(UserContext);

  return (
    <section>
      <h2>Welcome, {user.name}!</h2>
      <p>We are glad to have you in the application.</p>
    </section>
  );
}

export default WelcomeMessage;
