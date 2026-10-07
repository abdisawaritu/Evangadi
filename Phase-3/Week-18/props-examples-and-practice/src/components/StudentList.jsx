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

  return <Student student={student} />;
};

export default StudentList;
