const Student = (props) => {
  console.log(props);
  return (
    <div>
      <h2>{props.student.name}</h2>
      <p>{props.student.age}</p>
      <p>{props.student.department}</p>
      <div>
        <h2>{props.student.name}</h2>

        <p>Department: {props.student.department}</p>

        <p>City: {props.student.address.city}</p>

        <p>Country: {props.student.address.country}</p>
      </div>
    </div>
  );
};

export default Student;
