import React, { Component } from 'react';
import StudentCard from '../StudentCard/StudentCard';

class StudentList extends Component {
    render() {
        return (
          <div>
            <StudentList name="Abdisa Waritu" age={23} />
            <StudentList name="Kenenisa" age={24} />
            <StudentList name="Abdurehman " age={25} />
          </div>
        );
    }
}

export default StudentList;
