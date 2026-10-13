
import PropTypes from "prop-types";
import Student from "./Student";

const StudentList = () => {
 const student = {
   name: "Abdisa",
   age: 23,
   department: "Computer Engineering",

   address: {
     city: "Addis Ababa",
     country: "Ethiopia",
   },
 };
 const defaultStudent = {
   name: "Unknown Student",
   age: 0,
   department: "Unknown Department",
 };
 

  return <Student student={student} />;
};
StudentList.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  isActive: PropTypes.bool,
  subjects: PropTypes.array,
  student: PropTypes.object,
  onDelete: PropTypes.func,
};
StudentList.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
    department: PropTypes.string,
  }).isRequired,
};
// to validate the array of object 
StudentList.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      department: PropTypes.string.isRequired,
      grade: PropTypes.number.isRequired,
    }),
  ).isRequired,
};



export default StudentList;
