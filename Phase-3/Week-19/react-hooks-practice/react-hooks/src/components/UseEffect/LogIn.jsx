import { useEffect } from "react";
const Login = () => {
  useEffect(() => {
    console.log("Hi ,  Log in component is Mounting");

    let x = 0;
    let visitTime = setInterval(() => {
      console.log(`visit time - ${(x = x + 1)} sec`);
    }, 1000);
    return () => {
      console.log("bye . i'm unmounting");
      alert("You have succesffully Loggged out");
      clearInterval(visitTime)
    };
  }, []);
  return (
    <div>
      <h1> User Logged In</h1>
      <h2>Name : Abebe</h2>
      <h3>Bootcamp: Evangadi</h3>
      <h2>Group: 2</h2>
    </div>
  );
};

export default Login;
