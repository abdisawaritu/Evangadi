import "./App.css";
import StudendCard from "./components/StudendCard";
import StudentCard from "./components/StudendCard";

function App() {
  function handleDelete() {
    console.log("delete something");

    
  }
  return (
    <>
      <StudendCard name="Abdisa" age={22} department="Computer Engineering" />

      <StudendCard name="Abebe" department="Electrical Engineering" />

      <StudendCard
        name="Hana"
        department="Software Engineering"
        isActive={true}
      />
      <StudendCard subjects={["Math", "Physics", "Programming"]} />

      <StudendCard
        student={{
          name: "Abdisa",
          department: "Computer Engineering",
          year: 5,
        }}
      />
      <StudendCard onDelete={handleDelete} />

      <StudentCard name="Abdisa" department="Computer Engineering" />
    </>
  );
}

export default App;
