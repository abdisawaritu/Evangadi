function StudentDashboard() {
  const student = {
    name: "Abdisa",
    department: "Computer Engineering",
    age: 22,
    isActive: true,
  };

  function handleLogout() {
    console.log("Logging out...");
  }

  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>

      <div className="student-card">
        <h2>{student.name}</h2>

        <p>Department: {student.department}</p>

        <p>Age: {student.age}</p>

        <p>Status: {student.isActive ? "Active" : "Inactive"}</p>

        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default StudentDashboard;
