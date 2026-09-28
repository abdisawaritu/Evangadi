import "./App.css"; // we does not from
// const element = <h1>Hello</h1>;

// console.log(element);
function App() {
  const name = "abdisa";
  const age = 20;
  const isLoggedIn = true;
  const students = ["Abdisa", "Abebe", "Kebede"];
  return (
    <>
      <div className="contanier">
        <h1>hello {name}</h1>
        <h1
          className="hello"
          style={{
            fontSize: "20px",
            backgroundColor: "blue",
            marginTop: "10px",
          }}
        >
          Hello
        </h1>
        {isLoggedIn ? <h1>Dashboard</h1> : <h1>Login</h1>}
        <h2 style={{ color: "blue" }}>MY first React Component</h2>
        <h1>Welcome</h1>
        <p style={{ color: "red", fontSize: "20px" }}>Learn React</p>
        <p>Age: {age + 1}</p>
        <p>{10 + 30}</p>
        <br />
      </div>

      <div>
        <h1>this is react element from the JSX is its components </h1>
      </div>
      <form action="">
        <label htmlFor=""></label>
      </form>
      <ul>
        {students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>

      {console.log("this is the javascript which is writtin inside jsx")}
      {2 + 4}
    </>
  );
}

export default App;

// everty code we have goes here
