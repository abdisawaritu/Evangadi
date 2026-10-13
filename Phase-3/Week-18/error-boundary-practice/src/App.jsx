import ErrorBoundary from "./components/ErrorBoundary";
import "./App.css";
import StudentList from "./components/StudentList";

function App() {
  return (
    <>
      <h1>Student Management System</h1>
      

      <ErrorBoundary>
        <StudentList />
      </ErrorBoundary>
    </>
  );
}

export default App;
