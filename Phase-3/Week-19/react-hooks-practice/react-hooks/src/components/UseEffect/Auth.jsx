import { useState } from "react";
import Login from "./Login";
import LogOut from "./LogOut";

const Auth = () => {
  const [show, setShow] = useState(false);

  const status = () => {
    setShow(!show);
  };

  return (
    <div>
      <div> {show ? <Login /> : <LogOut />} </div>

      <button onClick={status}>{show ? " Log Out" : " Log In "} </button>
    </div>
  );
};

export default Auth;
