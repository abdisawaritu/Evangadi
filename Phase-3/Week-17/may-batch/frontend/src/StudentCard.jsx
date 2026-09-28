function StudentCard() {
  const name = "Abdisa";
  const age = 22;
  const isStudent = true;

  function handleClick() {
    console.log("Student selected");
  }

  return (
    <div className="student-card">
      <h2>{name}</h2>

      <p>Age: {age}</p>

      <p>{isStudent ? "Computer Engineering Student" : "Not a student"}</p>

      <button onClick={handleClick}>Select Student</button>
    </div>
  );
}

export default StudentCard;
