

function StudendCard({ name, department, id, year, email }) {
  // const {name, department}  = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>{department}</p>
      <h2>{email}</h2>
      <p>{id}</p>
      <h2>{name}</h2>
      <p>{year}</p>
    </div>
  );
}

export default StudendCard;

// destrucction the object 
// function StudentCard({ student }) {
//   return (
//     <div>
//       <h2>{student.name}</h2>
//       <p>{student.department}</p>
//       <p>{student.year}</p>
//     </div>
//   );
// }
